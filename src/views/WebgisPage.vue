<template>
  <div class="webgis-page">
    <header class="navbar">
      <nav>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/developers">Developers</router-link></li>
          <li><router-link to="/workflow">Workflow</router-link></li>
          <li><router-link to="/results">Results</router-link></li>
          <li><router-link to="/webgis">WebGIS</router-link></li>
        </ul>
      </nav>
    </header>
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
