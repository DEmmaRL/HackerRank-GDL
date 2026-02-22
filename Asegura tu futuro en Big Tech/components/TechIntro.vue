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

// State for nodes (non-reactive for performance)
const nodes = nodesData.map(n => ({
  ...n,
  currX: n.x,
  currY: n.y,
  vx: 0,
  vy: 0
}))

let rafId
let lastTime = 0
const friction = 0.95
const spring = 0.0012
const centerRadius = 35

const setNodeRef = (el, i) => { if (el) nodeElements[i] = el }
const setLineRef = (el, i) => { if (el) lineElements[i] = el }

const update = (time) => {
  if (!lastTime) lastTime = time
  const dt = Math.min((time - lastTime) / 16, 2)
  lastTime = time

  const container = containerRef.value
  if (!container) return (rafId = requestAnimationFrame(update))
  
  const w = container.offsetWidth
  const h = container.offsetHeight

  // Only update if container has size
  if (w > 0 && h > 0) {
    nodes.forEach((node, i) => {
      // 1. Organic Drift Physics
      const driftX = Math.sin(time * 0.0006 + node.x) * 2
      const driftY = Math.cos(time * 0.0005 + node.y) * 2
      
      node.vx += ((node.x + driftX) - node.currX) * spring * dt
      node.vy += ((node.y + driftY) - node.currY) * spring * dt

      // Central Repulsion
      const dx = node.currX - 50
      const dy = node.currY - 50
      const dSq = dx * dx + dy * dy
      if (dSq < centerRadius * centerRadius) {
        const d = Math.sqrt(dSq) || 1
        const f = Math.pow(1 - d / centerRadius, 2) * 0.06
        node.vx += (dx / d) * f * dt
        node.vy += (dy / d) * f * dt
      }

      node.currX += node.vx * dt
      node.currY += node.vy * dt
      node.vx *= Math.pow(friction, dt)
      node.vy *= Math.pow(friction, dt)

      // 2. Direct DOM update
      const el = nodeElements[i]
      if (el) {
        const x = (node.currX * w) / 100
        const y = (node.currY * h) / 100
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
    })

    // 3. Update Connections
    lineElements.forEach((line, i) => {
      const n1 = nodes[i]
      const n2 = nodes[(i + 1) % nodes.length]
      if (n1 && n2) {
        line.setAttribute('x1', n1.currX)
        line.setAttribute('y1', n1.currY)
        line.setAttribute('x2', n2.currX)
        line.setAttribute('y2', n2.currY)
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
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #b85741; stop-opacity: 0.12" />
          <stop offset="100%" style="stop-color: #31394d; stop-opacity: 0.08" />
        </linearGradient>
      </defs>
      <line 
        v-for="(node, i) in nodes" 
        :key="`line-${i}`"
        :ref="el => setLineRef(el, i)"
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
  stroke-width: 0.15;
  stroke-dasharray: 1 2;
  vector-effect: non-scaling-stroke;
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
