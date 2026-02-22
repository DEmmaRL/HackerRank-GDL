<script setup>
import { ref } from 'vue'

const nodes = [
  { x: 15, y: 20, logo: 'https://logo.clearbit.com/google.com', delay: 0 },
  { x: 75, y: 15, logo: 'https://logo.clearbit.com/meta.com', delay: 0.5 },
  { x: 85, y: 65, logo: 'https://logo.clearbit.com/amazon.com', delay: 1 },
  { x: 25, y: 75, logo: 'https://logo.clearbit.com/microsoft.com', delay: 1.5 },
  { x: 50, y: 85, logo: 'https://logo.clearbit.com/apple.com', delay: 2 }
]
</script>

<template>
  <div class="tech-intro">
    <svg class="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#b85741;stop-opacity:0.25" />
          <stop offset="100%" style="stop-color:#31394d;stop-opacity:0.4" />
        </linearGradient>
      </defs>
      
      <line v-for="(node, i) in nodes.slice(0, -1)" :key="`line-${i}`"
        :x1="nodes[i].x" :y1="nodes[i].y"
        :x2="nodes[i + 1].x" :y2="nodes[i + 1].y"
        stroke="url(#lineGradient)"
        stroke-width="0.2"
        stroke-dasharray="2,2"
        class="animated-line"
        :style="{ animationDelay: `${node.delay}s` }"
      />
    </svg>

    <div v-for="(node, i) in nodes" :key="`node-${i}`" class="node" :style="{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: `${node.delay}s` }">
      <div class="node-ring"></div>
      <img :src="node.logo" :alt="`Company ${i}`" loading="lazy" />
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(.slidev-page) {
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
}

.slidev-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.connections {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  pointer-events: none;
}

.animated-line {
  stroke-dashoffset: 0;
  animation: flowLine 3s linear infinite;
  vector-effect: non-scaling-stroke;
}

@keyframes flowLine {
  to {
    stroke-dashoffset: -4;
  }
}

.node {
  position: absolute;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  animation: slideInNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

@keyframes slideInNode {
  to {
    opacity: 1;
  }
}

.node-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #b85741;
  border-radius: 50%;
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.15;
  }
}

.node img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: white;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(49, 57, 77, 0.1);
}

.node img:hover {
  box-shadow: 0 6px 24px rgba(184, 87, 65, 0.2);
}

.content-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  width: 85%;
  text-align: center;
}

.content-box :deep(h1) {
  font-size: 3.5rem;
  font-weight: 700;
  color: #31394d;
  margin: 0 0 0.5rem 0;
  line-height: 1.1;
}

.content-box :deep(h2) {
  font-size: 1.5rem;
  color: #b85741;
  font-weight: 400;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
}

.content-box :deep(p) {
  font-size: 1.2rem;
  color: #31394d;
  font-weight: 500;
  margin: 0;
}
</style>

