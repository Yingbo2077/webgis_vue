<template>
  <div class="webgis-page">
    <AppHeader />
    <div class="map-wrapper">
      <MapContainer />
    </div>
    
    <AppFooter />
  </div>
</template>

<style scoped>
.webgis-page {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.map-wrapper {
  flex: 1;
  position: relative;
  height: calc(100vh - 64px - 250px); /* 导航栏高度约为64px，页脚高度约为250px */
  min-height: 400px; /* 确保地图有最小高度 */
}
</style>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import MapContainer from '@/components/MapContainer.vue'
import AppFooter from '@/components/AppFooter.vue';
</script>
