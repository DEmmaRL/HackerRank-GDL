<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const nodesData = [
  { id: 'microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', x: 50, y: 15 },
  { id: 'meta', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png', x: 8, y: 42 },
  { id: 'amazon', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-icon.png', x: 92, y: 42 },
  { id: 'nvidia', logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg', x: 15, y: 88 },
  { id: 'apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', x: 85, y: 88 }
]

const containerRef = ref(null)
const nodeElements = []
const lineElements = []

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
const speedScale = 0.4 // Slower for premium feel
const centerRadius = 35
const minNodeDist = 18
const maxConnectDist = 55 // Large range
const margin = 8 // Safety margin %

const setNodeRef = (el, i) => { if (el) nodeElements[i] = el }
const setLineRef = (el, i) => { if (el) lineElements[i] = el }

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
      // 1. Organic Physics
      const driftX = Math.sin(time * (0.0003 + i * 0.0001) + node.x) * 12
      const driftY = Math.cos(time * (0.0002 + i * 0.0001) + node.y) * 12
      
      node.vx += ((node.x + driftX) - node.currX) * spring * dt
      node.vy += ((node.y + driftY) - node.currY) * spring * dt

      // 2. Central repulsion
      const dx = node.currX - 50
      const dy = node.currY - 50
      const distSq = dx * dx + dy * dy
      if (distSq < centerRadius * centerRadius) {
        const d = Math.sqrt(distSq) || 1
        const f = Math.pow(1 - d / centerRadius, 2) * 0.08
        node.vx += (dx / d) * f * dt
        node.vy += (dy / d) * f * dt
      }

      // 3. Avoid overlaps
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
      
      // 4. Hard bounds check (KEEP IN SCREEN)
      node.currX = Math.max(margin, Math.min(100 - margin, node.currX))
      node.currY = Math.max(margin, Math.min(100 - margin, node.currY))

      node.vx *= Math.pow(friction, dt)
      node.vy *= Math.pow(friction, dt)

      const el = nodeElements[i]
      if (el) {
        const x = (node.currX * w) / 100
        const y = (node.currY * h) / 100
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
    })

    // 5. Dynamic Connections
    pairs.forEach((pair, index) => {
      const line = lineElements[index]
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
  rafId = requestAnimationFrame(update)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div ref="containerRef" class="tech-intro-system">
    <div class="background-canvas"></div>
    
    <svg class="net-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" style="stop-color: #b85741; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #31394d; stop-opacity: 1" />
        </linearGradient>
      </defs>
      <line 
        v-for="i in pairs.length" 
        :key="`line-${i}`"
        :ref="el => setLineRef(el, i-1)"
        class="net-line"
        stroke="url(#lineGrad)"
      />
    </svg>

    <div 
      v-for="(node, i) in nodes" 
      :key="node.id"
      :ref="el => setNodeRef(el, i)"
      class="hw-node"
    >
      <div class="hw-node-pulse"></div>
      <div class="hw-node-inner">
        <img :src="node.logo" :alt="node.id" />
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
  background: #ffffff;
}

.background-canvas {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, #ffffff 0%, #f1f3f6 100%);
  pointer-events: none;
}

.net-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.net-line {
  stroke-width: 0.8;
  stroke-dasharray: 2 3;
  transition: opacity 0.2s ease;
  animation: flowLine 10s linear infinite;
}

@keyframes flowLine {
  from { stroke-dashoffset: 20; }
  to { stroke-dashoffset: 0; }
}

.hw-node {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
  will-change: transform;
  z-index: 10;
  pointer-events: auto;
}

.hw-node-pulse {
  position: absolute;
  inset: -12px;
  background: radial-gradient(circle, rgba(184, 87, 65, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulseNode 5s ease-in-out infinite;
}

@keyframes pulseNode {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.4); opacity: 0.1; }
}

.hw-node-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-shadow: 0 10px 30px rgba(49, 57, 77, 0.12);
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hw-node:hover .hw-node-inner {
  transform: scale(1.15);
  box-shadow: 0 15px 40px rgba(184, 87, 65, 0.2);
  border-color: rgba(184, 87, 65, 0.2);
}

.hw-node-inner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  font-size: 4.2rem !important;
  font-weight: 900 !important;
  color: #31394d !important;
  line-height: 1.1 !important;
  margin-bottom: 0.5rem !important;
  letter-spacing: -0.02em !important;
}

:deep(h2) {
  font-size: 1.5rem !important;
  color: #b85741 !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.12em !important;
  margin-bottom: 2rem !important;
}
</style>
