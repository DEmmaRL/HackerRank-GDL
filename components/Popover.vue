<script setup lang="ts">
import { ref, computed, type CSSProperties } from 'vue'

const props = defineProps<{
  trigger?:   'hover' | 'click'
  variant?:   'tooltip' | 'modal'
  placement?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right'
  delay?:     number
  offsetX?:   number
  offsetY?:   number
  bg?:        string
  color?:     string
  border?:    string
}>()

const trigger   = computed(() => props.trigger   ?? 'hover')
const variant   = computed(() => props.variant   ?? 'tooltip')
const placement = computed(() => props.placement ?? 'top')
const delay     = computed(() => props.delay     ?? 0)

const open  = ref(false)
let   timer = 0

const show = () => {
  clearTimeout(timer)
  if (delay.value > 0) timer = setTimeout(() => { open.value = true }, delay.value) as unknown as number
  else open.value = true
}
const hide = () => {
  clearTimeout(timer)
  if (delay.value > 0) timer = setTimeout(() => { open.value = false }, delay.value) as unknown as number
  else open.value = false
}
const toggle = () => { open.value ? hide() : show() }

const onEnter = () => { if (trigger.value === 'hover') show() }
const onLeave = () => { if (trigger.value === 'hover') hide() }
const onClick = () => { if (trigger.value === 'click') toggle() }

// Compute tooltip position styles from placement + optional offsets
const tooltipStyle = computed<CSSProperties>(() => {
  const ox = props.offsetX ?? 0
  const oy = props.offsetY ?? 0
  const off = 'var(--popover-offset)'

  const map: Record<string, CSSProperties> = {
    'top':          { bottom: `calc(100% + ${off} + ${oy}px)`, left: `calc(50% + ${ox}px)`,        translate: '-50% 0' },
    'top-left':     { bottom: `calc(100% + ${off} + ${oy}px)`, left: `calc(0% + ${ox}px)`,         translate: '0 0'    },
    'top-right':    { bottom: `calc(100% + ${off} + ${oy}px)`, right: `calc(0% + ${-ox}px)`,       translate: '0 0'    },
    'bottom':       { top:    `calc(100% + ${off} + ${oy}px)`, left: `calc(50% + ${ox}px)`,        translate: '-50% 0' },
    'bottom-left':  { top:    `calc(100% + ${off} + ${oy}px)`, left: `calc(0% + ${ox}px)`,         translate: '0 0'    },
    'bottom-right': { top:    `calc(100% + ${off} + ${oy}px)`, right: `calc(0% + ${-ox}px)`,       translate: '0 0'    },
    'left':         { right:  `calc(100% + ${off} + ${-ox}px)`, top: `calc(50% + ${oy}px)`,        translate: '0 -50%' },
    'right':        { left:   `calc(100% + ${off} + ${ox}px)`,  top: `calc(50% + ${oy}px)`,        translate: '0 -50%' },
  }
  return map[placement.value] ?? map['top']
})

const cssVars = computed(() => ({
  ...(props.bg     && { '--popover-bg':     props.bg }),
  ...(props.color  && { '--popover-color':  props.color }),
  ...(props.border && { '--popover-border': props.border }),
}))
</script>

<template>
  <span
    v-if="variant === 'tooltip'"
    class="popover-host"
    :style="cssVars"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click="onClick"
  >
    <slot />
    <span
      class="popover-tooltip"
      :class="{ 'is-open': open }"
      :style="tooltipStyle"
      role="tooltip"
    >
      <slot name="content" />
    </span>
  </span>

  <template v-else>
    <span class="popover-host" @mouseenter="onEnter" @mouseleave="onLeave" @click="onClick">
      <slot />
    </span>
    <Teleport to="body">
      <Transition name="popover-modal">
        <div v-if="open" class="popover-backdrop" @click.self="hide">
          <div class="popover-modal" role="dialog" aria-modal="true" :style="cssVars">
            <button class="popover-close" aria-label="Close" @click="hide">✕</button>
            <slot name="content" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
</template>
