<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const nodesData = [
  { id: 'apple', label: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', x: 50, y: 14, size: 108, invert: true },
  { id: 'microsoft', label: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', x: 24, y: 24, size: 102 },
  { id: 'nvidia', label: 'NVIDIA', logo: '/logos/Nvidia-Light-Vertical-Logo.wine.svg', x: 76, y: 24, size: 96 },
  { id: 'google', label: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', x: 17, y: 48, size: 90 },
  { id: 'amazon', label: 'Amazon', logo: '/logos/amazon.svg', x: 83, y: 48, size: 88 },
  { id: 'meta', label: 'Meta', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png', x: 50, y: 40, size: 84 },
  { id: 'tesla', label: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg', x: 50, y: 62, size: 72 },
  { id: 'oracle', label: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', x: 30, y: 72, size: 64 },
  { id: 'netflix', label: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png', x: 69, y: 72, size: 62 },
  { id: 'ibm', label: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', x: 18, y: 84, size: 58 },
  { id: 'intel', label: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Intel-logo-2022.png', x: 82, y: 84, size: 56 },
  { id: 'amd', label: 'AMD', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg', x: 40, y: 88, size: 52 },
  { id: 'uber', label: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png', x: 60, y: 88, size: 50 },
  { id: 'pinterest', label: 'Pinterest', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png', x: 50, y: 96, size: 46 }
]

const containerRef = ref(null)
const nodeElements = ref([])
const lineElements = ref([])
let draggedIndex = -1
let draggedPointerId = null

const nodes = nodesData.map((node) => ({
  ...node,
  currX: node.x,
  currY: node.y,
  vx: 0,
  vy: 0,
}))

const pairs = []
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    pairs.push([i, j])
  }
}

let rafId
let lastTime = 0
const friction = 0.94
const spring = 0.00036
const speedScale = 0.4
const centerRadius = 28
const maxConnectDist = 36

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

const getNodeMargins = (node, width, height) => {
  const marginX = Math.max(4, ((node.size / 2) / width) * 100 + 1)
  const marginY = Math.max(6, ((node.size / 2) / height) * 100 + 2)
  return { marginX, marginY }
}

const moveNodeToClient = (index, clientX, clientY) => {
  const container = containerRef.value
  if (!container) return

  const rect = container.getBoundingClientRect()
  if (!rect.width || !rect.height) return

  const node = nodes[index]
  const { marginX, marginY } = getNodeMargins(node, rect.width, rect.height)
  const x = clamp(((clientX - rect.left) / rect.width) * 100, marginX, 100 - marginX)
  const y = clamp(((clientY - rect.top) / rect.height) * 100, marginY, 100 - marginY)

  node.currX = x
  node.currY = y
  node.x = x
  node.y = y
  node.vx = 0
  node.vy = 0
}

const startDrag = (index, event) => {
  draggedIndex = index
  draggedPointerId = event.pointerId
  event.preventDefault()
  moveNodeToClient(index, event.clientX, event.clientY)
}

const onPointerMove = (event) => {
  if (draggedIndex < 0 || event.pointerId !== draggedPointerId) return
  moveNodeToClient(draggedIndex, event.clientX, event.clientY)
}

const endDrag = (event) => {
  if (draggedIndex < 0 || event.pointerId !== draggedPointerId) return
  draggedIndex = -1
  draggedPointerId = null
}

const update = (time) => {
  if (!lastTime) lastTime = time
  const dt = Math.min((time - lastTime) / 16, 2) * speedScale
  lastTime = time

  const container = containerRef.value
  if (!container) {
    rafId = requestAnimationFrame(update)
    return
  }

  const width = container.offsetWidth
  const height = container.offsetHeight
  if (!width || !height) {
    rafId = requestAnimationFrame(update)
    return
  }

  nodes.forEach((node, index) => {
    if (index === draggedIndex) {
      const element = nodeElements.value[index]
      if (element) {
        const x = (node.currX * width) / 100
        const y = (node.currY * height) / 100
        element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
      return
    }

    const driftX = Math.sin(time * (0.00018 + index * 0.00008) + node.x) * 9
    const driftY = Math.cos(time * (0.00016 + index * 0.00008) + node.y) * 9

    node.vx += ((node.x + driftX) - node.currX) * spring * dt
    node.vy += ((node.y + driftY) - node.currY) * spring * dt

    const cx = node.currX - 50
    const cy = node.currY - 50
    const distCenter = Math.sqrt(cx * cx + cy * cy) || 1
    if (distCenter < centerRadius) {
      const force = Math.pow(1 - distCenter / centerRadius, 2) * 0.05
      node.vx += (cx / distCenter) * force * dt
      node.vy += (cy / distCenter) * force * dt
    }

    nodes.forEach((other, otherIndex) => {
      if (otherIndex === index) return
      const dx = node.currX - other.currX
      const dy = node.currY - other.currY
      const distance = Math.sqrt(dx * dx + dy * dy) || 1
      const minDist = ((node.size + other.size) / 2 / Math.min(width, height)) * 100 + 3
      if (distance < minDist) {
        const force = Math.pow(1 - distance / minDist, 2) * 0.06
        node.vx += (dx / distance) * force * dt
        node.vy += (dy / distance) * force * dt
      }
    })

    node.currX += node.vx * dt
    node.currY += node.vy * dt

    const { marginX, marginY } = getNodeMargins(node, width, height)
    node.currX = clamp(node.currX, marginX, 100 - marginX)
    node.currY = clamp(node.currY, marginY, 100 - marginY)

    node.vx *= Math.pow(friction, dt)
    node.vy *= Math.pow(friction, dt)

    const element = nodeElements.value[index]
    if (element) {
      const x = (node.currX * width) / 100
      const y = (node.currY * height) / 100
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }
  })

  pairs.forEach((pair, index) => {
    const line = lineElements.value[index]
    if (!line) return
    const n1 = nodes[pair[0]]
    const n2 = nodes[pair[1]]
    const dx = n1.currX - n2.currX
    const dy = n1.currY - n2.currY
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance < maxConnectDist) {
      const opacity = Math.pow(1 - distance / maxConnectDist, 1.2) * 0.7
      line.setAttribute('x1', n1.currX)
      line.setAttribute('y1', n1.currY)
      line.setAttribute('x2', n2.currX)
      line.setAttribute('y2', n2.currY)
      line.style.opacity = opacity
    } else {
      line.style.opacity = 0
    }
  })

  rafId = requestAnimationFrame(update)
}

onMounted(async () => {
  await nextTick()
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', endDrag)
  window.addEventListener('pointercancel', endDrag)
  rafId = requestAnimationFrame(update)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', endDrag)
  window.removeEventListener('pointercancel', endDrag)
})
</script>

<template>
  <div ref="containerRef" class="market-system">
    <svg class="market-net" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="marketLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #b85741; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #d9c4b1; stop-opacity: 1" />
        </linearGradient>
      </defs>
      <line
        v-for="(pair, index) in pairs"
        :key="`edge-${index}`"
        :ref="(el) => { if (el) lineElements[index] = el }"
        class="market-line"
        stroke="url(#marketLineGrad)"
      />
    </svg>

    <div
      v-for="(node, index) in nodes"
      :key="node.id"
      :ref="(el) => { if (el) nodeElements[index] = el }"
      class="market-node"
      :style="{ width: `${node.size}px`, height: `${node.size}px` }"
      @pointerdown="startDrag(index, $event)"
    >
      <div class="market-node-pulse"></div>
      <div class="market-node-inner">
        <img :src="node.logo" :alt="node.label" :class="{ 'invert-logo': node.invert, 'nvidia-fix': node.id === 'nvidia' }" />
      </div>
      <!-- <p class="market-node-label">{{ node.label }}</p> -->
    </div>
  </div>
</template>

<style scoped>
.market-system {
  position: relative;
  height: 420px;
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 0;
  background: transparent;
}

.market-net {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}

.market-line {
  stroke-width: 0.35;
  stroke-dasharray: 1 1.6;
  animation: flowLine 10s linear infinite;
}

@keyframes flowLine {
  from { stroke-dashoffset: 30; }
  to { stroke-dashoffset: 0; }
}

.market-node {
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
  z-index: 10;
  pointer-events: auto;
  cursor: grab;
  touch-action: none;
}

.market-node:active {
  cursor: grabbing;
}

.market-node-pulse {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(217, 196, 177, 0.2) 0%, transparent 70%);
  animation: pulseNode 5s ease-in-out infinite;
}

@keyframes pulseNode {
  0%, 100% { transform: scale(1); opacity: 0.35; }
  50% { transform: scale(1.35); opacity: 0.12; }
}

.market-node-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #001a2b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14%;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.market-node-inner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.invert-logo {
  filter: brightness(0) invert(1);
}

.nvidia-fix {
  transform: scale(1.25);
}

.market-node-label {
  position: absolute;
  left: 50%;
  top: calc(100% + 6px);
  transform: translateX(-50%);
  margin: 0;
  font-size: 0.72rem;
  line-height: 1;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
