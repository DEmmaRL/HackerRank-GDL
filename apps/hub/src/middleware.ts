import { defineMiddleware } from "astro:middleware";

const LOCAL_PORTS: Record<string, number> = {
  'resume-building-101': 3031,
  'technical-interview': 3032,
  'asegura-tu-futuro': 3033,
};

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Si la ruta empieza con /slides/, actuamos como proxy
  if (url.pathname.startsWith('/slides/')) {
    const segments = url.pathname.split('/');
    const sessionName = segments[2]; 
    const remainingPath = segments.slice(3).join('/') || '';

    if (sessionName) {
      let targetUrl: string;

      // En desarrollo, usamos los puertos locales si existen
      if (import.meta.env.DEV && LOCAL_PORTS[sessionName]) {
        targetUrl = `http://localhost:${LOCAL_PORTS[sessionName]}/${remainingPath}${url.search}`;
      } else {
        // Convención de nombres: hr-gdl-slide-<nombre-carpeta>
        targetUrl = `https://hr-gdl-slide-${sessionName}.vercel.app/${remainingPath}${url.search}`;
      }

      try {
        const response = await fetch(targetUrl);

        // Si el slide no existe (404) y es la ruta raíz de la sesión, dejamos que Astro maneje su propio 404
        if (response.status === 404 && !remainingPath) {
            return next();
        }

        // Clonamos la respuesta para devolverla al usuario
        return new Response(response.body, {
          status: response.status,
          headers: response.headers
        });
      } catch (e) {
        // En desarrollo, si falla el fetch al puerto local, avisamos pero seguimos
        if (import.meta.env.DEV) {
          console.warn(`[Proxy Warning] No se pudo conectar con la sesión local "${sessionName}" en el puerto ${LOCAL_PORTS[sessionName]}. ¿Está el servidor corriendo?`);
        } else {
          console.error(`[Proxy Error] No se pudo conectar con ${sessionName}:`, e);
        }
        return next();
      }
    }
  }

  return next();
});

