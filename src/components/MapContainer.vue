<template>
  <div class="map-container">
    <div id="map" ref="mapContainer"></div>
    
    <div class="map-controls">
      <div class="layer-control">
        <h3>Layer Control</h3>
        <div class="layer-list">
          <div v-for="(layer, index) in layers" :key="index" class="layer-item">
            <input type="checkbox" :id="'layer-' + index" v-model="layer.visible" @change="toggleLayer(layer)" />
            <label :for="'layer-' + index">{{ layer.name }}</label>
          </div>
        </div>
      </div>
      
      <div class="map-toolbar">
        <button class="tool-button" title="Zoom In" @click="zoomIn">
          <span>+</span>
        </button>
        <button class="tool-button" title="Zoom Out" @click="zoomOut">
          <span>-</span>
        </button>
        <button class="tool-button" title="Reset View" @click="resetView">
          <span>⟲</span>
        </button>
        <button class="tool-button" title="Measure" @click="toggleMeasurement">
          <span>📏</span>
        </button>
      </div>
      
      <div class="legend" v-if="showLegend">
        <h3>Legend</h3>
        <div class="legend-content">
          <div class="legend-item" v-for="(item, index) in legendItems" :key="index">
            <div class="legend-color" :style="{ backgroundColor: item.color }"></div>
            <div class="legend-label">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'

const mapContainer = ref(null)
let map = null

// Define layers
const layers = reactive([
  {
    name: 'Base Map',
    visible: true,
    layer: null
  },
  {
    name: 'PM2.5 Concentration',
    visible: false,
    layer: null
  },
  {
    name: 'PM10 Concentration',
    visible: false,
    layer: null
  },
  {
    name: 'NO₂ Concentration',
    visible: false,
    layer: null
  },
  {
    name: 'O₃ Concentration',
    visible: false,
    layer: null
  }
])

// Legend
const showLegend = ref(true)
const legendItems = ref([
  { color: '#00FF00', label: 'Good (0-50)' },
  { color: '#FFFF00', label: 'Moderate (51-100)' },
  { color: '#FF7E00', label: 'Unhealthy for Sensitive Groups (101-150)' },
  { color: '#FF0000', label: 'Unhealthy (151-200)' },
  { color: '#99004C', label: 'Very Unhealthy (201-300)' },
  { color: '#7E0023', label: 'Hazardous (>300)' }
])

// Initialize map
onMounted(() => {
  // Switzerland center coordinates
  const switzerlandCenter = fromLonLat([8.2275, 46.8182])
  
  // Create base layer
  const baseLayer = new TileLayer({
    source: new OSM(),
    visible: true
  })
  
  // Create map instance
  map = new Map({
    target: mapContainer.value,
    layers: [baseLayer],
    view: new View({
      center: switzerlandCenter,
      zoom: 8
    })
  })
  
  // Initialize layers
  layers[0].layer = baseLayer
  
  // Load other layers
  initializeLayers()
})

// Initialize layers
const initializeLayers = () => {
  // This is just an example, in a real project you would load data from a server
  const pm25Layer = new TileLayer({
    source: new OSM(),
    visible: false,
    opacity: 0.7
  })
  
  const pm10Layer = new TileLayer({
    source: new OSM(),
    visible: false,
    opacity: 0.7
  })
  
  const no2Layer = new TileLayer({
    source: new OSM(),
    visible: false,
    opacity: 0.7
  })
  
  const o3Layer = new TileLayer({
    source: new OSM(),
    visible: false,
    opacity: 0.7
  })
  
  // Add layers to map
  map.addLayer(pm25Layer)
  map.addLayer(pm10Layer)
  map.addLayer(no2Layer)
  map.addLayer(o3Layer)
  
  // Save layer references
  layers[1].layer = pm25Layer
  layers[2].layer = pm10Layer
  layers[3].layer = no2Layer
  layers[4].layer = o3Layer
}

// Toggle layer visibility
const toggleLayer = (layerItem) => {
  if (layerItem.layer) {
    layerItem.layer.setVisible(layerItem.visible)
  }
}

// Map tool functions
const zoomIn = () => {
  const view = map.getView()
  const zoom = view.getZoom()
  view.animate({
    zoom: zoom + 1,
    duration: 250
  })
}

const zoomOut = () => {
  const view = map.getView()
  const zoom = view.getZoom()
  view.animate({
    zoom: zoom - 1,
    duration: 250
  })
}

const resetView = () => {
  const view = map.getView()
  view.animate({
    center: fromLonLat([8.2275, 46.8182]),
    zoom: 8,
    duration: 500
  })
}

const toggleMeasurement = () => {
  // Implement measurement functionality in a real project
  alert('Measurement functionality will be implemented in future development')
}
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}

#map {
  width: 100%;
  height: 100%;
}

.map-controls {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.layer-control, .legend {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.layer-control h3, .legend h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.layer-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.layer-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.layer-item label {
  font-size: 14px;
  color: #555;
  cursor: pointer;
}

.map-toolbar {
  display: flex;
  gap: 5px;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.tool-button {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #555;
}

.tool-button:hover {
  background-color: #e0e0e0;
}

.legend-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.legend-label {
  font-size: 12px;
  color: #555;
}
</style>
