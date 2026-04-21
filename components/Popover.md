# Popover

A modular, reusable Vue 3 component for Slidev that displays contextual content either as a **tooltip** (inline, positioned) or a **modal** (fullscreen overlay). Designed to be portable across any Slidev project.

## Files

| File | Role |
|------|------|
| `components/Popover.vue` | Component logic and template |
| `style.css` | All styles under `/* Component: Popover */` |

Styles live in `style.css` alongside the rest of the design system. The component contains no `<style>` block.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `'hover' \| 'click'` | `'hover'` | What opens the popover |
| `variant` | `'tooltip' \| 'modal'` | `'tooltip'` | Display mode |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip position relative to trigger. Ignored in `modal` variant |
| `bg` | `string` | `var(--popover-bg)` | Background color override (any valid CSS value) |
| `color` | `string` | `var(--popover-color)` | Text color override |
| `border` | `string` | `var(--popover-border)` | Border color override |

## Slots

| Slot | Description |
|------|-------------|
| `default` | The trigger element — whatever the user hovers or clicks |
| `content` | The content shown inside the tooltip or modal |

---

## Usage

### Tooltip on hover (default)

```md
<Popover>
  <span class="accent">FAANG</span>
  <template #content>
    5–7 rounds: LeetCode, system design, and behavioral.
  </template>
</Popover>
```

### Tooltip with placement

```md
<Popover placement="bottom">
  <span class="label">Source</span>
  <template #content>BirJob, 2026</template>
</Popover>
```

### Modal on click

```md
<Popover trigger="click" variant="modal">
  <span class="accent underline cursor-pointer">Read more</span>
  <template #content>
    <span class="label">The hard data</span>
    <p>46% of new hires fail within 18 months...</p>
  </template>
</Popover>
```

### Custom colors

Pass any CSS value — design tokens, hex, or UnoCSS-resolved values:

```md
<Popover bg="var(--hr-terrain)" color="var(--hr-terminal)" border="var(--hr-green)">
  <span class="accent">Hover me</span>
  <template #content>Custom themed tooltip</template>
</Popover>
```

---

## Design tokens

Defaults are defined in `:root` inside `style.css`. Override globally by redefining them, or per-instance via props.

| Token | Default | Description |
|-------|---------|-------------|
| `--popover-bg` | `#1e1e26` | Background of tooltip and modal |
| `--popover-color` | `var(--hr-white)` | Text color |
| `--popover-border` | `var(--hr-border)` | Border color |
| `--popover-offset` | `8px` | Gap between trigger and tooltip |
| `--popover-max-width` | `22rem` | Max width of tooltip |
| `--popover-modal-width` | `42rem` | Max width of modal box |
| `--popover-shadow-sm` | `0 8px 24px rgba(0,0,0,.4)` | Tooltip shadow |
| `--popover-shadow-lg` | `0 24px 64px rgba(0,0,0,.6)` | Modal shadow |
| `--popover-backdrop` | `rgba(0,0,0,.6)` | Modal backdrop color |

---

## Behavior notes

- In `modal` variant, clicking outside the box closes it.
- Pressing `Escape` closes the modal.
- Focus is automatically moved to the first focusable element inside the modal when it opens (focus trap). `Tab` and `Shift+Tab` cycle within the modal.
- `placement` only applies to `tooltip` variant.
- `trigger="hover"` + `variant="modal"` is valid but uncommon — the modal opens on mouseenter and closes on mouseleave.
- The modal is rendered via `<Teleport to="body">` to avoid z-index and overflow clipping issues inside Slidev slides.
