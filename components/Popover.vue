<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  trigger?:   'hover' | 'click'
  variant?:   'tooltip' | 'modal'
  placement?: 'top' | 'bottom' | 'left' | 'right'
  bg?:        string
  color?:     string
  border?:    string
}>()

const trigger   = computed(() => props.trigger   ?? 'hover')
const variant   = computed(() => props.variant   ?? 'tooltip')
const placement = computed(() => props.placement ?? 'top')

const open = ref(false)

const show   = () => { open.value = true }
const hide   = () => { open.value = false }
const toggle = () => { open.value = !open.value }

const onEnter = () => { if (trigger.value === 'hover') show() }
const onLeave = () => { if (trigger.value === 'hover') hide() }
const onClick = () => { if (trigger.value === 'click') toggle() }

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
      :class="[`popover-tooltip--${placement}`, { 'is-open': open }]"
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
          <div class="popover-modal" role="dialog" :style="cssVars">
            <button class="popover-close" aria-label="Close" @click="hide">✕</button>
            <slot name="content" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
</template>
