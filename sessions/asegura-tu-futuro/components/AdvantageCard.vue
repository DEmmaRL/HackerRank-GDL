<template>
  <div class="advantage-card">
    <div class="card-bg"></div>
    <div class="card-blob"></div>
    <div class="card-content">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    blobColor: {
      type: String,
      default: '#e07a5f'
    }
  }
}
</script>

<style scoped>
.advantage-card {
  position: relative;
  width: 180px;
  height: 200px;
  border-radius: 14px;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.advantage-card:hover {
  box-shadow: 0px 16px 48px rgba(224, 122, 95, 0.15);
  transform: translateY(-2px);
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.card-blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: v-bind(blobColor);
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.4s ease;
}

.advantage-card:hover .card-blob {
  opacity: 0.6;
  animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }
  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }
  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }
  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}

.card-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.card-title {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: #e07a5f;
  line-height: 1.3;
}

.card-description {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: #333;
  font-weight: 400;
}
</style>
