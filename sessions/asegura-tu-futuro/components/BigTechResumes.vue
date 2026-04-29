<script setup>
import resumeIBM from '@hr-gdl/shared-assets/images/big-tech-resumes/RESUME-IBM.jpg'
import resumeMeta from '@hr-gdl/shared-assets/images/big-tech-resumes/RESUME-META.jpg'
import resumeGoogle from '@hr-gdl/shared-assets/images/big-tech-resumes/RESUME-GOOGLE.pdf?url'
</script>

<template>
  <div class="grid grid-cols-3 gap-4 mt-8">
    <div class="text-center">
      <img :src="resumeIBM" class="w-full h-auto rounded shadow-lg" />
      <p class="mt-2 text-sm">IBM</p>
    </div>
    <div class="text-center">
      <img :src="resumeMeta" class="w-full h-auto rounded shadow-lg" />
      <p class="mt-2 text-sm">Meta</p>
    </div>
    <div class="text-center">
      <iframe :src="resumeGoogle" class="w-full h-96 rounded shadow-lg"></iframe>
      <p class="mt-2 text-sm">Google</p>
    </div>
  </div>
</template>
