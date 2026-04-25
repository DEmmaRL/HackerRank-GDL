import { defineMiddleware } from "astro:middleware";
import { getLocalSessionPorts } from "./utils/ports";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith('/slides/')) {
    const segments = url.pathname.split('/');
    const sessionName = segments[2]; 
    const remainingPath = segments.slice(3).join('/') || '';

    if (sessionName) {
      let targetUrl: string;
      let port: number | undefined;

      if (import.meta.env.DEV) {
        const localPorts = getLocalSessionPorts();
        port = localPorts[sessionName];
        if (!port) return next();

        // Local proxy: Preserve full URL path to match Slidev's --base configuration.
        // Note: The SlidesEmbed component bypasses this middleware in dev for the iframe source to preserve HMR.
        // This middleware block primarily handles direct browser navigation to /slides/* in local dev.
        targetUrl = `http://localhost:${port}${url.pathname}${url.search}`;
      } else {
        // Edge proxy (Vercel): Strip the '/slides/:session' prefix as micro-frontends are served from root
        targetUrl = `https://hr-gdl-slide-${sessionName}.vercel.app/${remainingPath}${url.search}`;
      }

      try {
        const response = await fetch(targetUrl);

        // Fallback: Yield to Astro's internal 404 handler if the session root is not found
        if (response.status === 404 && !remainingPath) {
            return next();
        }

        // Strip decompression headers (Node.js fetch auto-decodes the body; forwarding these causes ERR_CONTENT_DECODING_FAILED)
        const proxiedHeaders = new Headers(response.headers);
        proxiedHeaders.delete('content-encoding');
        proxiedHeaders.delete('content-length');

        return new Response(response.body, {
          status: response.status,
          headers: proxiedHeaders
        });
      } catch (e) {
        if (import.meta.env.DEV) {
          console.warn(`[Proxy Warning] Could not connect to local session "${sessionName}" on port ${port}. Is the Slidev server running?`);
        } else {
          console.error(`[Proxy Error] Could not connect to ${sessionName}:`, e);
        }
        return next();
      }
    }
  }

  return next();
});
