<template>
  <div class="workflow-page">
    <AppHeader />

    <main class="content-section">
      <h1 class="page-title">Project Workflow</h1>
      
      <div class="workflow-container">
        <div class="workflow-timeline">
          <div class="timeline-item" v-for="(step, index) in workflowSteps" :key="index">
            <div class="timeline-marker" :class="{ 'active': step.completed }">
              <span class="step-number">{{ index + 1 }}</span>
            </div>
            <div class="timeline-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
              <div class="step-details" v-if="step.details">
                <ul>
                  <li v-for="(detail, i) in step.details" :key="i">{{ detail }}</li>
                </ul>
              </div>
              <div class="step-status" :class="{ 'completed': step.completed }">
                {{ step.completed ? 'Completed' : 'In Progress' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

const workflowSteps = ref([
  {
    title: 'Data Collection',
    description: 'Collecting air quality data from various regions in Switzerland, including PM2.5, PM10, NO2, O3, and other indicators.',
    details: [
      'Obtaining historical data from the Swiss Federal Office for the Environment',
      'Setting up real-time data API interface',
      'Integrating meteorological data'
    ],
    completed: true
  },
  {
    title: 'Data Processing & Analysis',
    description: 'Cleaning, standardizing and analyzing collected data to identify pollution patterns and trends.',
    details: [
      'Data cleaning and outlier handling',
      'Application of spatiotemporal interpolation methods',
      'Statistical analysis and trend identification'
    ],
    completed: true
  },
  {
    title: 'GIS Data Integration',
    description: 'Integrating processed data with geographic information systems, preparing for spatial visualization.',
    details: [
      'Coordinate system conversion and standardization',
      'Spatial database construction',
      'GeoJSON data generation'
    ],
    completed: true
  },
  {
    title: 'WebGIS Development',
    description: 'Developing interactive WebGIS application based on OpenLayers and Vue.js to visualize and query air quality data.',
    details: [
      'Map interface design and implementation',
      'Interactive feature development',
      'Data layer management'
    ],
    completed: false
  },
  {
    title: 'Model Building & Prediction',
    description: 'Building air quality prediction models based on historical data to provide future air quality trend forecasts.',
    details: [
      'Machine learning model selection and training',
      'Model validation and optimization',
      'Prediction result visualization'
    ],
    completed: false
  }
]);
</script>

<style scoped>
.workflow-page {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

.content-section {
  padding: 4rem;
  flex: 1;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.workflow-container {
  max-width: 900px;
  margin: 0 auto;
}

.workflow-timeline {
  position: relative;
  padding: 2rem 0;
}

.workflow-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50px;
  height: 100%;
  width: 4px;
  background: #ddd;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 100px;
}

.timeline-marker {
  position: absolute;
  left: 42px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ddd;
  border: 4px solid #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-marker.active {
  background: #3a4db5;
}

.step-number {
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
}

.timeline-content {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.step-title {
  margin-top: 0;
  color: #333;
}

.step-description {
  color: #555;
  margin-bottom: 1rem;
}

.step-details ul {
  padding-left: 1.5rem;
  color: #666;
}

.step-details li {
  margin-bottom: 0.5rem;
}

.step-status {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: #f0f0f0;
  color: #888;
  font-size: 0.8rem;
  margin-top: 1rem;
}

.step-status.completed {
  background: #d4edda;
  color: #155724;
}
</style>