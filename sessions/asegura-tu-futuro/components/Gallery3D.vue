<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slider-image">
        <img :src="images[currentIndex]" :alt="`Intern Experience ${currentIndex + 1}`" />
      </div>
    </div>

    <div class="slider-controls">
      <button @click="previousImage" class="nav-btn">
        <span>‹</span>
      </button>
      
      <div class="dots">
        <button 
          v-for="(_, index) in images" 
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index"
        />
      </div>
      
      <button @click="nextImage" class="nav-btn">
        <span>›</span>
      </button>
    </div>

    <div class="image-counter">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
              'images/intern-experience/01.png',
              'images/intern-experience/02.png',
              'images/intern-experience/03.png',
              'images/intern-experience/04.png',
              'images/intern-experience/05.jpeg',
            ],
      currentIndex: 0,
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<style scoped>
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
}

.slider-wrapper {
  width: 100%;
  max-width: 500px;
  height: 340px;
  background: #f8f9fa;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.slider-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
}

.slider-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #e07a5f;
  background: white;
  color: #e07a5f;
  font-size: 28px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.nav-btn:hover {
  background: #e07a5f;
  color: white;
  transform: scale(1.1);
}

.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #e07a5f;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: #e07a5f;
  width: 28px;
  border-radius: 5px;
}

.dot:hover {
  transform: scale(1.15);
}

.image-counter {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}
</style>

