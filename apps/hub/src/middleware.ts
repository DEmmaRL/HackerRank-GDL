import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Si la ruta empieza con /slides/, actuamos como proxy
  if (url.pathname.startsWith('/slides/')) {
    const segments = url.pathname.split('/');
    const sessionName = segments[2]; 
    const remainingPath = segments.slice(3).join('/') || '';

    if (sessionName) {
      // Convención de nombres: hr-gdl-slide-<nombre-carpeta>
      const targetUrl = `https://hr-gdl-slide-${sessionName}.vercel.app/${remainingPath}${url.search}`;

      try {
        const response = await fetch(targetUrl);
        
        // Si el slide no existe (404), dejamos que Astro maneje su propio 404
        if (response.status === 404 && !remainingPath) {
            return next();
        }

        // Clonamos la respuesta para devolverla al usuario
        return new Response(response.body, {
          status: response.status,
          headers: response.headers
        });
      } catch (e) {
        console.error(`[Proxy Error] No se pudo conectar con ${sessionName}:`, e);
        return next();
      }
    }
  }

  return next();
});
