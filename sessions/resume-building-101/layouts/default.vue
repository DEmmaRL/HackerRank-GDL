<template>
  <div class="slidev-layout default">
    <slot />
    <!-- Watermark: bottom-right corner, low opacity -->
    <img
      src="@hr-gdl/shared-assets/logos/logo-light-narrow.svg"
      class="watermark"
      aria-hidden="true"
    />
  </div>
</template>

<style scoped>
.watermark {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  height: 2rem;
  opacity: 0.28;
  pointer-events: none;
}
</style>
