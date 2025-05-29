<template>
  <div id="map" ref="mapContainer" style="height: 100vh;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { createMap } from '@/map/index'

const mapContainer = ref(null)

onMounted(() => {
  createMap(mapContainer.value)
})
</script>
