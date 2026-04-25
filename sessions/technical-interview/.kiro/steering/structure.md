# Project Structure

```
hackerrank-crew-gdl-template/
├── slides.md              # Presentación principal
├── style.css              # SST de estilos — todos los tokens y componentes
├── .kiro/steering/        # Steering files de Kiro
├── layouts/
│   └── default.vue
├── components/            # Componentes Vue reutilizables
├── pages/                 # Slides importados
├── snippets/              # Snippets de código para slides
└── public/
    ├── fonts/             # Satoshi, Departure Mono (.woff2)
    └── logos/             # Logo HackerRank (dark/light, narrow/wide)
```

## Convenciones de slides.md

Cada slide se separa con `---`. El frontmatter acepta:
- `class:` — variante de color (`dark-slide`, `light-slide`, `green-slide`, `terrain-slide`)
- `layout:` — layout de Slidev (`center`, `default`, etc.)
- `transition:` — transición (`slide-left`, `slide-up`, `fade`)

### Slide de sección (separador)
```md
---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección N</span>

# Título
```

### Speaker notes
Siempre al final del slide entre `<!-- -->`.

## Design Tokens

```
--hr-green      #05C770
--hr-black      #141419
--hr-white      #FFFFFF
--hr-terrain    #003333
--hr-sky        #73D3FB
--hr-celery     #DBFFC2
--hr-terminal   #86F9F9
--hr-border     rgba(255,255,255,0.1)
--hr-green-dim  rgba(5,199,112,0.25)

--font-primary  'Satoshi', sans-serif
--font-mono     'Departure Mono', monospace

--text-eyebrow  0.75rem
--text-sm       0.8rem
--text-base     0.9rem
--text-label    0.65rem

--gap-sm        0.85rem
--gap-md        1.25rem
--gap-lg        1.5rem
--mt-section    1.25rem
```

## Componentes CSS disponibles (style.css)

| Clase          | Uso                                                        |
|----------------|------------------------------------------------------------|
| `.eyebrow`     | Etiqueta superior mono uppercase verde                     |
| `.label`       | Etiqueta pequeña mono uppercase verde                      |
| `.accent`      | Texto en `--hr-green`                                      |
| `.sub`         | Párrafo secundario, opacidad 0.75                          |
| `.hero-lockup` | Logo + texto GDL en portada                                |
| `.grid-2`      | Grid 2 columnas                                            |
| `.item`        | Border-left accent para listas de contenido                |
| `.points`      | Columna de `.point` con border-left                        |
| `.card`        | Tarjeta con border sutil y padding                         |
| `.versus`      | Grid 2 cols para comparar dos `.card`                      |
| `.methods`     | Grid 2 cols para `.method` (STAR/XYZ)                      |
| `.example`     | Bloque con border-left para ejemplos                       |
| `.noise-grid`  | Lista de items con ✕ rojo (`.noise-item`)                  |
| `.ab`          | Grid 2 cols para A vs B                                    |
| `.ab-card`     | Tarjeta A vs B — modificadores: `.bad`, `.good`            |
| `.ab-tag`      | Etiqueta de tarjeta — modificadores: `.bad`, `.good`       |

## Patrón A vs B con v-click

```md
<div class="ab">
  <div class="ab-card" :class="$clicks >= 1 ? 'bad' : ''">
    <span class="ab-tag bad" v-click>✕ Opción mala</span>
    <p>Contenido...</p>
  </div>
  <div class="ab-card" :class="$clicks >= 1 ? 'good' : ''">
    <span class="ab-tag good" v-click="1">✓ Opción buena</span>
    <p>Contenido con <span :class="$clicks >= 1 ? 'accent' : ''">métrica</span>.</p>
  </div>
</div>
```
