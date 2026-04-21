<script setup lang="ts">
import { ref, computed, onUnmounted, type CSSProperties } from 'vue'

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

const open  = ref(false)
let   timer = 0

function openPopover() {
  clearTimeout(timer)
  timer = window.setTimeout(() => {
    open.value = true
    document.body.classList.add('popover-active')
  }, props.delay ?? 0)
}

function closePopover() {
  open.value = false
  window.setTimeout(() => document.body.classList.remove('popover-active'), 200)
  document.removeEventListener('click', onDocClick)
}

function onDocClick() {
  closePopover()
}

function onHostClick() {
  if (trigger.value !== 'click') return
  if (open.value) {
    closePopover()
  } else {
    openPopover()
    window.setTimeout(() => document.addEventListener('click', onDocClick), 0)
  }
}

function onMouseEnter() { if (trigger.value === 'hover') openPopover() }
function onMouseLeave() {
  if (trigger.value !== 'hover') return
  clearTimeout(timer)
  closePopover()
}

onUnmounted(() => {
  clearTimeout(timer)
  document.removeEventListener('click', onDocClick)
  document.body.classList.remove('popover-active')
})

const tooltipStyle = computed<CSSProperties>(() => {
  const ox  = props.offsetX ?? 0
  const oy  = props.offsetY ?? 0
  const off = 'var(--popover-offset)'

  const map: Record<string, CSSProperties> = {
    'top':          { bottom: `calc(100% + ${off} + ${oy}px)`, left:  `calc(50% + ${ox}px)`,   translate: '-50% 0'  },
    'top-left':     { bottom: `calc(100% + ${off} + ${oy}px)`, left:  `${ox}px`,               translate: '0 0'     },
    'top-right':    { bottom: `calc(100% + ${off} + ${oy}px)`, right: `${-ox}px`,              translate: '0 0'     },
    'bottom':       { top:    `calc(100% + ${off} + ${oy}px)`, left:  `calc(50% + ${ox}px)`,   translate: '-50% 0'  },
    'bottom-left':  { top:    `calc(100% + ${off} + ${oy}px)`, left:  `${ox}px`,               translate: '0 0'     },
    'bottom-right': { top:    `calc(100% + ${off} + ${oy}px)`, right: `${-ox}px`,              translate: '0 0'     },
    'left':         { right:  `calc(100% + ${off} + ${-ox}px)`, top:  `calc(50% + ${oy}px)`,   translate: '0 -50%'  },
    'right':        { left:   `calc(100% + ${off} + ${ox}px)`,  top:  `calc(50% + ${oy}px)`,   translate: '0 -50%'  },
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
    :class="{ 'is-active': open }"
    :style="cssVars"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click.stop="onHostClick"
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
    <span class="popover-host" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click.stop="onHostClick">
      <slot />
    </span>
    <Teleport to="body">
      <Transition name="popover-modal">
        <div v-if="open" class="popover-backdrop" @click.self="closePopover">
          <div class="popover-modal" role="dialog" aria-modal="true" :style="cssVars">
            <button class="popover-close" aria-label="Close" @click="closePopover">✕</button>
            <slot name="content" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
</template>
