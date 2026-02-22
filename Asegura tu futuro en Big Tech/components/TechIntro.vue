<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const nodesData = [
  { id: 'microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', x: 50, y: 15, invert: false },
  { id: 'meta', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png', x: 8, y: 42, invert: false },
  { id: 'amazon', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-icon.png', x: 92, y: 42, invert: true },
  { id: 'nvidia', logo: '/logos/Nvidia-Light-Vertical-Logo.wine.svg', x: 15, y: 88, invert: false },
  { id: 'apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', x: 85, y: 88, invert: true }
]

const containerRef = ref(null)
const nodeElements = ref([])
const lineElements = ref([])
let draggedIndex = -1
let draggedPointerId = null

const nodes = nodesData.map(n => ({
  ...n,
  currX: n.x,
  currY: n.y,
  vx: 0,
  vy: 0
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
const spring = 0.0004 
const speedScale = 0.4 
const centerRadius = 35
const minNodeDist = 18
const maxConnectDist = 55 
const margin = 8 

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

const moveNodeToClient = (index, clientX, clientY) => {
  const container = containerRef.value
  if (!container) return

  const rect = container.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return

  const x = clamp(((clientX - rect.left) / rect.width) * 100, margin, 100 - margin)
  const y = clamp(((clientY - rect.top) / rect.height) * 100, margin, 100 - margin)

  const node = nodes[index]
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
  if (!container) return (rafId = requestAnimationFrame(update))
  
  const w = container.offsetWidth
  const h = container.offsetHeight

  if (w > 0 && h > 0) {
    nodes.forEach((node, i) => {
      if (i === draggedIndex) {
        const el = nodeElements.value[i]
        if (el) {
          const x = (node.currX * w) / 100
          const y = (node.currY * h) / 100
          el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        }
        return
      }

      const driftX = Math.sin(time * (0.0003 + i * 0.0001) + node.x) * 12
      const driftY = Math.cos(time * (0.0002 + i * 0.0001) + node.y) * 12
      
      node.vx += ((node.x + driftX) - node.currX) * spring * dt
      node.vy += ((node.y + driftY) - node.currY) * spring * dt

      const dx = node.currX - 50
      const dy = node.currY - 50
      const distSq = dx * dx + dy * dy
      if (distSq < centerRadius * centerRadius) {
        const d = Math.sqrt(distSq) || 1
        const f = Math.pow(1 - d / centerRadius, 2) * 0.08
        node.vx += (dx / d) * f * dt
        node.vy += (dy / d) * f * dt
      }

      nodes.forEach((other, j) => {
        if (i === j) return
        const nx = node.currX - other.currX
        const ny = node.currY - other.currY
        const dSq = nx * nx + ny * ny
        const minDistSq = minNodeDist * minNodeDist
        if (dSq < minDistSq) {
          const d = Math.sqrt(dSq) || 1
          const f = Math.pow(1 - d / minNodeDist, 2) * 0.05
          node.vx += (nx / d) * f * dt
          node.vy += (ny / d) * f * dt
        }
      })

      node.currX += node.vx * dt
      node.currY += node.vy * dt
      node.currX = Math.max(margin, Math.min(100 - margin, node.currX))
      node.currY = Math.max(margin, Math.min(100 - margin, node.currY))

      node.vx *= Math.pow(friction, dt)
      node.vy *= Math.pow(friction, dt)

      const el = nodeElements.value[i]
      if (el) {
        const x = (node.currX * w) / 100
        const y = (node.currY * h) / 100
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
    })

    pairs.forEach((pair, index) => {
      const line = lineElements.value[index]
      if (!line) return
      const n1 = nodes[pair[0]]
      const n2 = nodes[pair[1]]
      const dx = n1.currX - n2.currX
      const dy = n1.currY - n2.currY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < maxConnectDist) {
        const opacity = Math.pow(1 - dist / maxConnectDist, 1.1) * 0.7
        line.setAttribute('x1', n1.currX)
        line.setAttribute('y1', n1.currY)
        line.setAttribute('x2', n2.currX)
        line.setAttribute('y2', n2.currY)
        line.style.opacity = opacity
      } else {
        line.style.opacity = 0
      }
    })
  }
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
  <div ref="containerRef" class="tech-intro-system">
    <div class="background-canvas"></div>
    
    <svg class="net-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #b85741; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #d9c4b1; stop-opacity: 1" />
        </linearGradient>
      </defs>
      <line 
        v-for="(pair, i) in pairs" 
        :key="`line-${i}`"
        :ref="el => { if (el) lineElements[i] = el }"
        class="net-line"
        stroke="url(#lineGrad)"
      />
    </svg>

    <div 
      v-for="(node, i) in nodes" 
      :key="node.id"
      :ref="el => { if (el) nodeElements[i] = el }"
      class="hw-node"
      @pointerdown="startDrag(i, $event)"
    >
      <div class="hw-node-pulse"></div>
      <div class="hw-node-inner">
        <img 
          :src="node.logo" 
          :alt="node.id" 
          :class="{ 
            'invert-logo': node.invert,
            'nvidia-fix': node.id === 'nvidia',
            'microsoft-fix': node.id === 'microsoft'
          }" 
        />
      </div>
    </div>

    <div class="intro-overlay">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tech-intro-system {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #002f4a;
}

.background-canvas {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #002f4aff 0%, #31394dff 50%, #31394dff 100%);
  pointer-events: none;
}

.net-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.8;
}

.net-line {
  stroke-width: 0.45;
  stroke-dasharray: 1 1.5;
  animation: flowLine 8s linear infinite;
  transition: opacity 0.3s ease;
}

@keyframes flowLine {
  from { stroke-dashoffset: 25; }
  to { stroke-dashoffset: 0; }
}

.hw-node {
  position: absolute;
  top: 0;
  left: 0;
  width: 72px;
  height: 72px;
  will-change: transform;
  z-index: 10;
  pointer-events: auto;
  cursor: grab;
  touch-action: none;
}

.hw-node:active {
  cursor: grabbing;
}

.hw-node-pulse {
  position: absolute;
  inset: -15px;
  background: radial-gradient(circle, rgba(217, 196, 177, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulseNode 5s ease-in-out infinite;
}

@keyframes pulseNode {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.5); opacity: 0.15; }
}

.hw-node-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: #001a2b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255,255,255,0.12);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hw-node:hover .hw-node-inner {
  transform: scale(1.15);
  box-shadow: 0 15px 50px rgba(184, 87, 65, 0.4);
  border-color: rgba(255,255,255,0.3);
}

.hw-node-inner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.nvidia-fix {
  transform: scale(1.4);
}

.microsoft-fix {
  transform: scale(0.9);
}

.invert-logo {
  filter: brightness(0) invert(1);
}

.intro-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  text-align: center;
  padding: 2rem;
  pointer-events: none;
}

.intro-overlay > * {
  pointer-events: auto;
}

:deep(h1) {
  font-family: 'DM Sans', sans-serif !important;
  font-size: 4.2rem !important;
  font-weight: 700 !important;
  color: #d9c4b1ff !important;
  line-height: 1.1 !important;
  margin-bottom: 0.5rem !important;
  letter-spacing: -0.02em !important;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

:deep(h2) {
  font-family: 'Space Mono', monospace !important;
  font-size: 1.25rem !important;
  color: #ffffffff !important;
  opacity: 0.85;
  font-weight: 400 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.15em !important;
  margin-bottom: 2rem !important;
}

:deep(p), :deep(strong) {
  font-family: 'DM Sans', sans-serif !important;
  color: #ffffffff !important;
}
</style>
