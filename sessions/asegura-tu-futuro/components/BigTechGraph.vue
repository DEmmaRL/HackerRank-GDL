<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const nodesData = [
  { id: 'nvidia', rank: 1, label: 'Nvidia', status: 'activa', valueT: 4.56, current: '$4,56 billones', peak: '$5,00 billones (2025)', preExit: 'N/A', logo: '/logos/Nvidia-Light-Vertical-Logo.wine.svg', x: 50, y: 14, size: 114 },
  { id: 'apple', rank: 2, label: 'Apple', status: 'activa', valueT: 3.95, current: '$3,95 billones', peak: '$4,06 billones (2025)', preExit: 'N/A', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', x: 22, y: 23, size: 104, invert: true },
  { id: 'alphabet', rank: 3, label: 'Alphabet', status: 'activa', valueT: 3.83, current: '$3,83 billones', peak: '$4,15 billones (2026)', preExit: 'N/A', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', x: 78, y: 23, size: 103 },
  { id: 'microsoft', rank: 4, label: 'Microsoft', status: 'activa', valueT: 3.53, current: '$3,53 billones', peak: '$3,85 billones (2025)', preExit: 'N/A', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', x: 17, y: 42, size: 98 },
  { id: 'amazon', rank: 5, label: 'Amazon', status: 'activa', valueT: 2.49, current: '$2,49 billones', peak: '$2,60 billones (2026)', preExit: 'N/A', logo: '/logos/amazon.svg', x: 83, y: 42, size: 82 },
  { id: 'tsmc', rank: 6, label: 'TSMC', status: 'nueva', valueT: 1.9, current: '$1,90 billones', peak: '$3,14 billones (2025)', preExit: 'N/A', logo: '/logos/tsmc.svg', x: 36, y: 43, size: 74 },
  { id: 'meta', rank: 7, label: 'Meta', status: 'activa', valueT: 1.7, current: '$1,70 billones', peak: '$1,79 billones (2026)', preExit: 'N/A', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png', x: 64, y: 43, size: 71 },
  { id: 'broadcom', rank: 8, label: 'Broadcom', status: 'nueva', valueT: 1.57, current: '$1,57 billones', peak: '$1,75 billones (2025)', preExit: 'N/A', logo: '/logos/broadcom.svg', x: 25, y: 62, size: 68 },
  { id: 'tesla', rank: 9, label: 'Tesla', status: 'activa', valueT: 1.55, current: '$1,55 billones', peak: '$1,60 billones (2024)', preExit: 'N/A', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg', x: 75, y: 62, size: 68 },
  { id: 'openai', rank: 10, label: 'OpenAI', status: 'candidata', valueT: 1.0, current: '$1,00 billón (Est.)', peak: 'N/A', preExit: 'N/A', logo: '/logos/openai-icon.svg', x: 50, y: 70, size: 60, invert: true },
  { id: 'alibaba', rank: 11, label: 'Alibaba', status: 'legacy', valueT: 0.37, current: '$370 mil M', peak: '$783 mil M (2020)', preExit: '$606 mil M (2021)', reason: 'Regulación china, pérdida de cuota en pagos digitales frente a WeChat Pay', logo: '/logos/alibaba.svg', x: 16, y: 82, size: 50 },
  { id: 'samsung', rank: 12, label: 'Samsung', status: 'activa', valueT: 0.727, current: '$727 mil M', peak: '$727 mil M (2026)', preExit: 'N/A', logo: '/logos/samsung.svg', x: 36, y: 87, size: 52 },
  { id: 'oracle', rank: 13, label: 'Oracle', status: 'en-ascenso', valueT: 0.436, current: '$436 mil M', peak: '$575 mil M (2025)', preExit: 'N/A', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', x: 50, y: 87, size: 50 },
  { id: 'cisco', rank: 14, label: 'Cisco', status: 'legacy', valueT: 0.34, current: '$340 mil M', peak: '$555 mil M (2000)', preExit: '$129 mil M (2014)', reason: 'Desplazamiento por proveedores de networking modernos, transición incompleta a software', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', x: 64, y: 87, size: 48 },
  { id: 'intel', rank: 15, label: 'Intel', status: 'legacy', valueT: 0.222, current: '$222 mil M', peak: '$509 mil M (2000)', preExit: '$211 mil M (2023)', reason: 'Retraso en nodos de fabricación (7nm+), competencia de ARM y arquitecturas abiertas', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg', x: 84, y: 82, size: 48 }
]

const containerRef = ref(null)
const nodeElements = ref([])
const lineElements = ref([])
const failedLogos = ref({})
const tooltip = ref({
  visible: false,
  left: 0,
  top: 0,
  node: null,
})
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

const statusLabel = {
  activa: 'Activa',
  nueva: 'Nueva Big Tech',
  candidata: 'Candidata',
  'en-ascenso': 'En Ascenso',
  displaced: 'Legacy (Disp.)',
  legacy: 'Legacy (Disp.)',
}

const getFallbackInitials = (label) => label
  .split(' ')
  .map((part) => part[0])
  .join('')
  .slice(0, 3)
  .toUpperCase()

const markLogoFailed = (id) => {
  failedLogos.value = {
    ...failedLogos.value,
    [id]: true,
  }
}

const updateTooltip = (node, width, height) => {
  tooltip.value = {
    visible: true,
    left: (node.currX * width) / 100 + node.size * 0.5 + 14,
    top: (node.currY * height) / 100 - node.size * 0.5 - 14,
    node,
  }
}

const hideTooltip = () => {
  tooltip.value = {
    visible: false,
    left: 0,
    top: 0,
    node: null,
  }
}

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

  const container = containerRef.value
  if (container) {
    const node = nodes[index]
    updateTooltip(node, container.offsetWidth, container.offsetHeight)
  }
}

const onPointerMove = (event) => {
  if (draggedIndex < 0 || event.pointerId !== draggedPointerId) return
  moveNodeToClient(draggedIndex, event.clientX, event.clientY)
}

const endDrag = (event) => {
  if (draggedIndex < 0 || event.pointerId !== draggedPointerId) return
  draggedIndex = -1
  draggedPointerId = null
  hideTooltip()
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
      updateTooltip(node, width, height)
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
      if (draggedIndex >= 0 && index !== draggedIndex) {
        element.style.filter = 'blur(2px) opacity(0.5)'
      } else {
        element.style.filter = ''
      }
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
      if (draggedIndex >= 0 && draggedIndex !== pair[0] && draggedIndex !== pair[1]) {
        line.style.filter = 'blur(0.5px)'
        line.style.opacity = opacity * 0.3
      } else {
        line.style.filter = ''
        line.style.opacity = opacity
      }
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
  hideTooltip()
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
      :class="{ 'is-displaced': node.status === 'displaced' || node.status === 'legacy', 'is-en-ascenso': node.status === 'en-ascenso', 'is-candidata': node.status === 'candidata', 'is-nueva': node.status === 'nueva' }"
      :style="{ width: `${node.size}px`, height: `${node.size}px` }"
      @pointerdown="startDrag(index, $event)"
    >
      <div class="market-node-pulse"></div>
      <div class="market-node-inner">
        <img
          v-if="!failedLogos[node.id]"
          :src="node.logo"
          :alt="node.label"
          :class="{ 'invert-logo': node.invert, 'nvidia-fix': node.id === 'nvidia' }"
          @error="markLogoFailed(node.id)"
        />
        <span v-else class="market-fallback">{{ getFallbackInitials(node.label) }}</span>
      </div>
      <!-- <p class="market-node-label">{{ node.label }}</p> -->
    </div>

    <div
      v-if="tooltip.visible && tooltip.node"
      class="node-tooltip"
      :class="{ 'node-tooltip-displaced': tooltip.node.status === 'displaced' || tooltip.node.status === 'legacy', 'node-tooltip-green': tooltip.node.status === 'en-ascenso' || tooltip.node.status === 'candidata' || tooltip.node.status === 'nueva' }"
      :style="{ left: `${tooltip.left}px`, top: `${tooltip.top}px` }"
    >
      <p class="tooltip-title">#{{ tooltip.node.rank }} · {{ tooltip.node.label }}</p>
      <p><strong>Estado:</strong> {{ statusLabel[tooltip.node.status] }}</p>
      <p v-if="tooltip.node.current !== 'N/A'"><strong>Valor actual:</strong> {{ tooltip.node.current }}</p>
      <p v-if="tooltip.node.peak !== 'N/A'"><strong>Peak histórico:</strong> {{ tooltip.node.peak }}</p>
      <p v-if="tooltip.node.preExit !== 'N/A'"><strong>Pre-salida:</strong> {{ tooltip.node.preExit }}</p>
    </div>
  </div>
</template>

<style scoped>
.market-system {
  position: relative;
  height: 420px;
  margin-top: 1rem;
  overflow: visible !important;
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

.market-node.is-displaced .market-node-pulse {
  background: radial-gradient(circle, rgba(184, 87, 65, 0.35) 0%, transparent 72%);
}

.market-node.is-en-ascenso .market-node-pulse {
  background: radial-gradient(circle, rgba(76, 175, 80, 0.35) 0%, transparent 72%);
}

.market-node.is-candidata .market-node-pulse {
  background: radial-gradient(circle, rgba(76, 175, 80, 0.35) 0%, transparent 72%);
}

.market-node.is-nueva .market-node-pulse {
  background: radial-gradient(circle, rgba(76, 175, 80, 0.35) 0%, transparent 72%);
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

.market-node.is-displaced .market-node-inner {
  box-shadow: 0 0 0 1px rgba(184, 87, 65, 0.45), 0 0 28px rgba(184, 87, 65, 0.55);
  border: 1px solid rgba(184, 87, 65, 0.7);
}

.market-node.is-en-ascenso .market-node-inner {
  box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.45), 0 0 28px rgba(76, 175, 80, 0.55);
  border: 1px solid rgba(238, 229, 51, 0.839);
}

.market-node.is-candidata .market-node-inner {
  box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.45), 0 0 28px rgba(76, 175, 80, 0.55);
  border: 1px solid rgba(238, 229, 51, 0.839);
}

.market-node.is-nueva .market-node-inner {
  box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.45), 0 0 28px rgba(76, 175, 80, 0.55);
  border: 1px solid rgba(238, 229, 51, 0.839);
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

.market-fallback {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #d9c4b1;
  letter-spacing: 0.08em;
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

.node-tooltip {
  position: absolute;
  z-index: 40;
  min-width: 220px;
  max-width: 300px;
  transform: translate(-8px, -100%);
  background: rgba(0, 26, 43, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.6rem;
  padding: 0.55rem 0.7rem;
  text-align: left;
  backdrop-filter: blur(4px);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.45);
  pointer-events: none;
  overflow: visible !important;
  word-wrap: break-word;
}

.node-tooltip-displaced {
  border-color: rgba(184, 87, 65, 0.7);
  box-shadow: 0 8px 26px rgba(184, 87, 65, 0.35);
}

.node-tooltip-green {
  border-color: rgba(238, 229, 51, 0.839);
  box-shadow: 0 8px 26px rgba(76, 175, 80, 0.35);
}

.tooltip-title {
  margin: 0 0 0.3rem;
  color: #d9c4b1;
  font-weight: 700;
  font-size: 0.82rem;
}

.node-tooltip p {
  margin: 0.12rem 0;
  color: #ffffff;
  font-size: 0.72rem;
  line-height: 1.3;
}

.node-tooltip strong {
  color: #d9c4b1;
}
</style>
