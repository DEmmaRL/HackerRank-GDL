# SKILLS — Guía de trabajo para este proyecto

## Contexto
Presentación Slidev para HackerRank Campus Crew GDL (CUCEI).
Tema: "Cómo construir un Resume de clase mundial"
Duración: 90 min · Audiencia: Estudiantes de Ingeniería

---

## Reglas de trabajo

1. No inventar contenido. El presentador provee el texto de cada sección. Yo estructuro, no redacto.
2. SST en `style.css`. Todos los estilos viven ahí. No usar `style=""` inline salvo excepciones mínimas (ej. `font-size` puntual en un `h1`).
3. Usar design tokens. Siempre `var(--hr-green)`, `var(--gap-md)`, etc. Nunca valores hardcoded.
4. `v-click` para revelaciones. Usar `v-click` / `:class="$clicks >= N ? 'X' : ''"` para dinámicas A vs B y puntos progresivos.
5. Componentes reutilizables. Antes de crear HTML nuevo, verificar si ya existe una clase en `style.css`.
6. No usar guiones largos "—" en el contenido de los slides. Son una marca de escritura de IA.
7. No traducir términos técnicos: open source, pull request, code review, feedback, Engineering Manager, etc.

---

## Design Tokens (style.css)

```
Colors:   --hr-green, --hr-black, --hr-white, --hr-terrain, --hr-sky, --hr-celery, --hr-terminal, --hr-border, --hr-green-dim
Fonts:    --font-primary (Satoshi), --font-mono (Departure Mono)
Text:     --text-eyebrow (0.75rem), --text-sm (0.8rem), --text-base (0.9rem), --text-label (0.65rem)
Spacing:  --gap-sm (0.85rem), --gap-md (1.25rem), --gap-lg (1.5rem), --mt-section (1.25rem)
```

---

## Slide Variants (class en frontmatter)

| class           | bg              | text          |
|-----------------|-----------------|---------------|
| `dark-slide`    | `--hr-black`    | `--hr-white`  |
| `light-slide`   | `--hr-white`    | `--hr-black`  |
| `green-slide`   | `--hr-green`    | `--hr-black`  |
| `terrain-slide` | `--hr-terrain`  | `--hr-white`  |

---

## Componentes disponibles (style.css)

| Clase          | Uso                                              |
|----------------|--------------------------------------------------|
| `.eyebrow`     | Etiqueta superior mono uppercase verde           |
| `.label`       | Etiqueta pequeña mono uppercase verde            |
| `.accent`      | Texto en `--hr-green`                            |
| `.sub`         | Párrafo secundario, opacidad 0.75                |
| `.hero-lockup` | Logo + texto GDL en portada                      |
| `.grid-2`      | Grid 2 columnas con gap                          |
| `.item`        | Border-left accent, para listas de contenido     |
| `.points`      | Columna de `.point` con border-left              |
| `.card`        | Tarjeta con border sutil y padding               |
| `.versus`      | Grid 2 cols para comparar dos `.card`            |
| `.methods`     | Grid 2 cols para `.method` (STAR/XYZ)            |
| `.example`     | Bloque con border-left para ejemplos             |
| `.noise-grid`  | Lista de items con ✕ rojo (`.noise-item`)        |
| `.ab`          | Grid 2 cols para A vs B                          |
| `.ab-card`     | Tarjeta A vs B (mod: `.bad`, `.good`)            |
| `.ab-tag`      | Etiqueta de la tarjeta (mod: `.bad`, `.good`)    |

---

## Patrón de slide de sección (separador)

```md
---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección N</span>

# Título de la Sección
```

---

## Patrón A vs B con v-click

```md
---
class: light-slide
---

<span class="eyebrow">A vs B · Ejemplo N</span>

# Pregunta al público

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

## Patrón A vs B con título que cambia al hacer click

Útil cuando quieres plantear una pregunta al público y revelar la respuesta en el título.

```md
# <span v-if="$clicks === 0">¿Pregunta al público?</span><span v-else>Respuesta revelada.</span>

<div class="ab">
  <div class="ab-card" :class="$clicks >= 1 ? 'bad' : ''">
    <span class="ab-tag bad" v-click>✕ Opción mala</span>
    <p>Descripción. <span v-click="1">Detalle que se revela junto con el veredicto.</span></p>
  </div>
  <div class="ab-card" :class="$clicks >= 1 ? 'good' : ''">
    <span class="ab-tag good" v-click="1">✓ Opción buena</span>
    <p>Descripción. <span v-click="1" class="accent">Conclusión que aparece con el veredicto.</span></p>
  </div>
</div>
```

---

## Click Animations (fade-up global)

Definido en `style.css`. Todos los elementos con `v-click` hacen fade-in con slide-up de 6px.

```css
.slidev-vclick-target {
  transition: opacity 400ms ease, transform 400ms ease;
}
.slidev-vclick-hidden {
  opacity: 0;
  transform: translateY(6px);
  pointer-events: none;
}
```

### Otros presets disponibles (copiar y pegar en style.css según necesidad)

```css
/* Scale up */
.slidev-vclick-hidden { opacity: 0; transform: scale(0.95); }

/* Slide desde la izquierda */
.slidev-vclick-hidden { opacity: 0; transform: translateX(-12px); }

/* Slide desde la derecha */
.slidev-vclick-hidden { opacity: 0; transform: translateX(12px); }

/* Solo fade, sin movimiento */
.slidev-vclick-hidden { opacity: 0; }
```

---

## Estructura del schedule.json

| id | Sección                              | Duración | Estado       |
|----|--------------------------------------|----------|--------------|
| 1  | Apertura: El Choque de Realidad      | 10 min   | ✅ Completo  |
| 2  | Construyendo el DNI del Ingeniero    | 15 min   | ✅ Completo  |
| 3  | Experiencia y la Fórmula de Oro      | 15 min   | ✅ Completo  |
| 4  | El Formato: El Gran Plot Twist       | 15 min   | ✅ Completo  |
| 5  | Estrategia de Gestión y Polimorfismo | 10 min   | ✅ Completo  |
| 6  | Live Demo & Ecosistema               | 25 min   | ✅ Completo  |

---

## Flujo para agregar una nueva sección

1. Revisar `schedule.json` para el `id`, `goal` y `key_points` de la sección.
2. Esperar que el presentador provea el contenido específico.
3. Elegir el componente correcto de la tabla de arriba.
4. Agregar slide separador verde primero.
5. Construir slides de contenido usando solo clases existentes.
6. Agregar `<!-- comentarios de speaker notes -->` al final de cada slide.
7. Actualizar este archivo marcando la sección como completada.
