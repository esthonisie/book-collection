<script setup>
import Navigation from './Navigation.vue';
</script>

<template>
<div class="main-container">
  <div class="title">BOOK COLLECTION</div>
  <Navigation /> 
</div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  position: sticky;
  justify-content: space-between;
  top: 0;
  min-width: 920px;
  height: 126px;
  padding-top: 20px;
  background-color: white;
  border-bottom: 1px solid black;
  z-index: 1000;
}

.title {
  text-align: center;
}
</style>