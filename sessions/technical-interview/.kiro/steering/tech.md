# Technology Stack

## Framework
- **Slidev** — presentaciones como código en Markdown
- **Vue 3** — para componentes y directivas (`v-click`, `:class`, etc.)
- **pnpm** como package manager

## Archivos clave
- `slides.md` — contenido principal de la presentación
- `style.css` — Single Source of Truth para todos los estilos
- `layouts/` — layouts custom de Vue
- `components/` — componentes Vue reutilizables
- `public/` — assets estáticos (logos, fuentes)

## Fuentes
- **Satoshi** (400, 500, 700) — tipografía principal
- **Departure Mono** (400) — tipografía monoespaciada

## Restricciones
- No usar estilos inline salvo excepciones mínimas puntuales (ej. `font-size` en un `h1` específico)
- No hardcodear colores ni espaciados — siempre usar design tokens de `style.css`
- No agregar dependencias nuevas sin consultar
