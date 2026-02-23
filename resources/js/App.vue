<script setup>
import HeaderSection from './components/HeaderSection.vue'
</script>

<template>
<div class="main-container">
  <HeaderSection />
  <main class="content-container">
    <RouterView /> 
  </main>
</div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.content-container {
  max-width: 1200px;
  min-width: 920px;
  padding: 36px 14px 60px;
  margin: 0 auto;
}
</style>