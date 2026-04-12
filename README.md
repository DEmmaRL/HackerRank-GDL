# HackerRank Crew GDL — Slidev Template

Template oficial para presentaciones de HackerRank Crew GDL.

## Uso

1. Click en **"Use this template"** en GitHub
2. Clona tu nuevo repo
3. Instala dependencias y arranca:

```bash
pnpm install
pnpm dev
```

## Actualizar Slidev

```bash
pnpm update @slidev/cli
```

## Deploy

- Netlify usa `pnpm build` y publica la carpeta `dist`.
- Vercel usa `pnpm build` y publica la carpeta `dist`.

Este repo está configurado para usar `pnpm` de forma consistente en local y en CI.

## Componentes disponibles

El `slides.md` incluye un slide de ejemplo por cada componente del sistema de diseño:

| Componente | Uso |
|---|---|
| `.points` | Lista vertical con border-left accent |
| `.grid-2` + `.item` | Grid 2 columnas con items |
| `.versus` | Comparación de dos `.card` |
| `.ab` + `.ab-card` | A vs B con v-click |
| `.noise-grid` | Lista de antipatrones con ✕ |
| `.methods` | Grid 2 cols para metodologías |
| `.example` | Bloque con border-left |

## Variantes de slide

```yaml
class: dark-slide    # fondo negro (default)
class: light-slide   # fondo blanco
class: green-slide   # fondo verde HackerRank
class: terrain-slide # fondo verde oscuro
```
