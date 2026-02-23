<script setup>
import Navigation from './Navigation.vue';
import { vectorPath } from './header-title';
</script>

<template>
<div class="main-container">
  <div class="vector-title">
    <svg width="834.39" height="65.172" viewBox="0 0 834.39 65.172" 
      xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" 
      fill-rule="nonzero" font-size="9pt" stroke="#1b1d1d" stroke-width=".5" 
      fill="#1b1d1d" style="stroke:#1b1d1d;stroke-width:.5;fill:#1b1d1d">
      <path :d="vectorPath"/></g>
    </svg>
  </div>
  <Navigation /> 
</div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: hsl(175, 56%, 36%);
  min-width: 920px;
  height: 116px;
  padding-top: 12px;
}

.vector-title {
  height: 62px;
  margin: 0 auto;
}
</style>