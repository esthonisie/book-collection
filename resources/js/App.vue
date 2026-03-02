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
}

.content-container {
  max-width: 1200px;
  min-width: 920px;
  padding: 24px 14px 46px;
  margin: 0 auto;
}
</style>