<template>
  <div class="map-container">
    <div id="map" ref="mapContainer"></div>
    
    <div class="map-controls">
      <div class="basemap-control">
        <h3>Basemap</h3>
        <div class="basemap-list">
          <div v-for="(layer, index) in basemapLayers" :key="'basemap-' + index" class="basemap-item">
            <input type="radio" :id="'basemap-' + index" :value="layer.name" v-model="selectedBasemap" @change="switchBasemap(layer)" />
            <label :for="'basemap-' + index">{{ layer.name }}</label>
          </div>
        </div>
      </div>
      
      <div class="layer-control">
        <h3>Data Layers</h3>
        <div class="layer-list">
          <div v-for="(layer, index) in dataLayers" :key="'data-' + index" class="layer-item">
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
      
      <div class="legend" v-if="visibleLayers.length > 0">
        <div class="legend-header" @click="toggleLegendExpanded">
          <h3>Legend</h3>
          <button class="legend-toggle-btn">
            <span v-if="legendExpanded">−</span>
            <span v-else>+</span>
          </button>
        </div>
        <div class="legend-content" v-show="legendExpanded">
          <div v-for="layer in visibleLayers" :key="layer.geoserverLayer" class="legend-layer">
            <h4>{{ layer.name }}</h4>
            <img 
              :src="getLegendUrl(layer.geoserverLayer)" 
              :alt="`Legend for ${layer.name}`"
              class="legend-image"
              @error="onLegendError"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import TileWMS from 'ol/source/TileWMS'
import { fromLonLat } from 'ol/proj'

const mapContainer = ref(null)
let map = null

// Define layers
const layers = reactive([
  {
    name: 'OpenStreetMap',
    visible: true,
    layer: null,
    isBaseMap: true
  },
  {
    name: 'Satellite',
    visible: false,
    layer: null,
    isBaseMap: true
  },
  {
    name: 'Switzerland NO₂ 2017-2021 AAD Map 2022',
    visible: false,
    layer: null,
    geoserverLayer: 'gisgeoserver_17:Switzerland _no2 _2017-2021_AAD_map _2022'
  },
  {
    name: 'Switzerland LC Reclassified 2022',
    visible: false,
    layer: null,
    geoserverLayer: 'gisgeoserver_17:Switzerland_LC_reclassied_2022'
  },
  {
    name: 'Switzerland NO₂ 2020 Bivariate',
    visible: true,
    layer: null,
    geoserverLayer: 'gisgeoserver_17:Switzerland_no2_2020_bivariate'
  },
  {
    name: 'Switzerland NO₂ Concentration Map 2020',
    visible: false,
    layer: null,
    geoserverLayer: 'gisgeoserver_17:switzerland_no2_concentration_map_2020'
  },
  {
    name: 'Switzerland NO₂ Zonal Statistics 2013-2022',
    visible: false,
    layer: null,
    geoserverLayer: 'gisgeoserver_17:swizterland_no2_zonal_statistics_20132022'
  }
])

// Legend
const legendExpanded = ref(true)

// Computed properties to separate basemap and data layers
const basemapLayers = computed(() => {
  return layers.filter(layer => layer.isBaseMap)
})

const dataLayers = computed(() => {
  return layers.filter(layer => !layer.isBaseMap)
})

// Computed property to get visible layers with geoserver layers
const visibleLayers = computed(() => {
  return layers.filter(layer => layer.visible && layer.geoserverLayer)
})

// Selected basemap state
const selectedBasemap = ref('OpenStreetMap')

// Toggle legend expanded state
const toggleLegendExpanded = () => {
  legendExpanded.value = !legendExpanded.value
}

// Switch basemap function
const switchBasemap = (selectedLayer) => {
  // Turn off all basemap layers
  basemapLayers.value.forEach(layer => {
    layer.visible = false
    if (layer.layer) {
      layer.layer.setVisible(false)
    }
  })
  
  // Turn on selected basemap
  selectedLayer.visible = true
  if (selectedLayer.layer) {
    selectedLayer.layer.setVisible(true)
  }
}

// Function to generate legend URL from GeoServer
const getLegendUrl = (layerName) => {
  const baseUrl = 'http://www.gis-geoserver.polimi.it/geoserver/wms'
  const params = new URLSearchParams({
    'service': 'WMS',
    'version': '1.3.0',
    'request': 'GetLegendGraphic',
    'format': 'image/png',
    'width': '12',
    'height': '12',
    'LEGEND_OPTIONS': 'fontName:Arial;fontSize:10;fontStyle:bold;fontColor:0x000000;dx:3;dy:0;mx:0;my:-2;dpi:120;layout:vertical',
    'layer': layerName
  })
  return `${baseUrl}?${params.toString()}`
}

// Handle legend image load errors
const onLegendError = (event) => {
  console.error('Failed to load legend image:', event.target.src)
  event.target.style.display = 'none'
}

// Initialize map
onMounted(() => {
  // Switzerland center coordinates (matching your layer data)
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
      zoom: 8  // Zoom to see Switzerland clearly
    })
  })
  
  // Initialize layers
  layers[0].layer = baseLayer
  
  // Create satellite layer
  const satelliteLayer = new TileLayer({
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attributions: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    visible: false
  })
  
  map.addLayer(satelliteLayer)
  layers[1].layer = satelliteLayer
  
  // Load other layers
  initializeLayers()
})

// Initialize layers
const initializeLayers = () => {
  // Create all GeoServer WMS layers dynamically
  layers.forEach((layerConfig) => {
    // Skip base map layers
    if (layerConfig.isBaseMap) return;
    
    if (layerConfig.geoserverLayer) {
      const geoserverLayer = new TileLayer({
        source: new TileWMS({
          url: 'http://www.gis-geoserver.polimi.it/geoserver/wms',
          params: { 
            'LAYERS': layerConfig.geoserverLayer, 
            'TILED': true 
          },
          serverType: 'geoserver',
          transition: 0,
        }),
        visible: layerConfig.visible,
      });
      
      // Add debugging for each WMS layer
      console.log('Adding GeoServer WMS layer:', layerConfig.geoserverLayer);
      
      // Add error handling
      geoserverLayer.getSource().on('tileloaderror', function(event) {
        console.error(`WMS tile load error for ${layerConfig.name}:`, event);
      });
      
      geoserverLayer.getSource().on('tileloadend', function() {
        console.log(`WMS tile loaded successfully for ${layerConfig.name}`);
      });
      
      map.addLayer(geoserverLayer);
      layerConfig.layer = geoserverLayer;
    }
  });
}

// Toggle layer visibility (single selection for data layers only)
const toggleLayer = (layerItem) => {
  if (layerItem.layer) {
    // If this data layer is being turned on, turn off all other data layers
    if (layerItem.visible) {
      dataLayers.value.forEach(layer => {
        if (layer !== layerItem) {
          layer.visible = false
          if (layer.layer) {
            layer.layer.setVisible(false)
          }
        }
      })
    }
    
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
    center: fromLonLat([9.1859, 45.4642]),
    zoom: 6,
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

.basemap-control, .layer-control, .legend {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.basemap-control h3, .layer-control h3, .legend h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.basemap-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.basemap-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.basemap-item label {
  font-size: 14px;
  color: #555;
  cursor: pointer;
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
  gap: 15px;
}

.legend-layer {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-layer h4 {
  margin: 0;
  font-size: 14px;
  color: #333;
  font-weight: 600;
}

.legend-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.legend-toggle-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.legend-toggle-btn:hover {
  color: #333;
  background-color: #f0f0f0;
  border-radius: 50%;
}

.legend-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  display: block;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
</style>
