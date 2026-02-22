<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const nodesData = [
  { id: 'google', logo: 'https://logo.clearbit.com/google.com', x: 20, y: 25 },
  { id: 'meta', logo: 'https://logo.clearbit.com/meta.com', x: 80, y: 20 },
  { id: 'amazon', logo: 'https://logo.clearbit.com/amazon.com', x: 85, y: 75 },
  { id: 'microsoft', logo: 'https://logo.clearbit.com/microsoft.com', x: 15, y: 80 },
  { id: 'apple', logo: 'https://logo.clearbit.com/apple.com', x: 50, y: 85 }
]

// State for simulation
const state = reactive({
  nodes: nodesData.map(node => ({
    ...node,
    currX: node.x,
    currY: node.y,
    vx: (Math.random() - 0.5) * 0.02,
    vy: (Math.random() - 0.5) * 0.02,
    baseX: node.x,
    baseY: node.y
  }))
})

let rafId
const friction = 0.98
const spring = 0.001
const repulsion = 0.5
const minDist = 18
const centerRadius = 32 // Exclusion zone for text

const updatePhysics = () => {
  const time = Date.now() * 0.001
  
  state.nodes.forEach(node => {
    // 1. Floating drift (organic movement)
    const driftX = Math.sin(time + node.baseX) * 2
    const driftY = Math.cos(time * 0.8 + node.baseY) * 2
    const targetX = node.baseX + driftX
    const targetY = node.baseY + driftY

    // 2. Spring towards target
    node.vx += (targetX - node.currX) * spring
    node.vy += (targetY - node.currY) * spring

    // 3. Avoid center (text area)
    const dx = node.currX - 50
    const dy = node.currY - 50
    const dCenter = Math.sqrt(dx * dx + dy * dy)
    if (dCenter < centerRadius) {
      const force = (centerRadius - dCenter) / centerRadius
      node.vx += (dx / dCenter) * force * 0.02
      node.vy += (dy / dCenter) * force * 0.02
    }

    // 4. Avoid other nodes
    state.nodes.forEach(other => {
      if (node.id === other.id) return
      const nx = node.currX - other.currX
      const ny = node.currY - other.currY
      const dist = Math.sqrt(nx * nx + ny * ny)
      if (dist < minDist) {
        const force = (minDist - dist) / minDist
        node.vx += (nx / dist) * force * 0.01
        node.vy += (ny / dist) * force * 0.01
      }
    })

    // 5. Apply velocity
    node.currX += node.vx
    node.currY += node.vy
    node.vx *= friction
    node.vy *= friction

    // 6. Hard bounds
    node.currX = Math.max(5, Math.min(95, node.currX))
    node.currY = Math.max(5, Math.min(95, node.currY))
  })

  rafId = requestAnimationFrame(updatePhysics)
}

onMounted(() => {
  rafId = requestAnimationFrame(updatePhysics)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="tech-intro-container">
    <div class="background-overlay"></div>
    
    <svg class="network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #b85741; stop-opacity: 0.15" />
          <stop offset="100%" style="stop-color: #31394d; stop-opacity: 0.1" />
        </linearGradient>
      </defs>
      
      <!-- Dynamic connections -->
      <line 
        v-for="(node, i) in state.nodes" 
        :key="`line-${i}`"
        :x1="node.currX" 
        :y1="node.currY"
        :x2="state.nodes[(i + 1) % state.nodes.length].currX"
        :y2="state.nodes[(i + 1) % state.nodes.length].currY"
        class="connection-line"
      />
    </svg>

    <!-- Interactive Nodes -->
    <div 
      v-for="node in state.nodes" 
      :key="node.id"
      class="tech-node"
      :style="{ 
        left: `${node.currX}%`, 
        top: `${node.currY}%`,
      }"
    >
      <div class="node-glow"></div>
      <div class="node-content">
        <img :src="node.logo" :alt="node.id" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="intro-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tech-intro-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.background-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(245,245,247,1) 100%);
  pointer-events: none;
}

.network-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.connection-line {
  stroke: url(#lineGrad);
  stroke-width: 0.1;
  stroke-dasharray: 1 1;
}

.tech-node {
  position: absolute;
  width: 68px;
  height: 68px;
  transform: translate(-50%, -50%);
  z-index: 10;
  will-change: left, top;
}

.node-glow {
  position: absolute;
  inset: -10px;
  background: radial-gradient(circle, rgba(184, 87, 65, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulseGlow 4s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.4); opacity: 0.2; }
}

.node-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-shadow: 0 10px 30px -5px rgba(49, 57, 77, 0.15);
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.tech-node:hover .node-content {
  transform: scale(1.15);
  box-shadow: 0 15px 40px -5px rgba(184, 87, 65, 0.25);
  border-color: rgba(184, 87, 65, 0.2);
}

.node-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.intro-content {
  position: relative;
  z-index: 20;
  max-width: 800px;
  text-align: center;
  pointer-events: none;
}

.intro-content > * {
  pointer-events: auto;
}

/* Slidev text styles override */
:deep(h1) {
  font-size: 4.5rem !important;
  font-weight: 800 !important;
  color: #31394d !important;
  line-height: 1 !important;
  margin-bottom: 0.5rem !important;
  letter-spacing: -0.02em !important;
}

:deep(h2) {
  font-size: 1.5rem !important;
  color: #b85741 !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  margin-bottom: 2rem !important;
}

:deep(strong) {
  color: #4a5568 !important;
  font-weight: 600 !important;
}
</style>
