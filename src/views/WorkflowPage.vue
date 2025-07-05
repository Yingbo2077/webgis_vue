<template>
  <div class="workflow-page">
    <AppHeader />
    
    <!-- Hero Section with Background -->
    <div class="hero-section relative h-[600px]">
      <div 
        class="absolute inset-0 w-full h-full bg-cover bg-center"
        :style="{
          backgroundImage: `url(${workflow1Bg})`,
          opacity: '0.7'
        }"
      ></div>
      
      <!-- Main Title -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 class="text-7xl font-bold text-gray-800 mb-4">Workflow</h1>
        <p class="text-2xl text-gray-700">Our Development Process</p>
      </div>
    </div>

    <!-- Purpose Section -->
    <div class="purpose-section py-8 h-[430px]" style="background-color: rgba(210,228,255,0.3);">
      <div class="container mx-auto px-8 h-full">
        <div class="flex flex-row items-start justify-between h-full">
          <!-- Main Content -->
          <div class="w-2/3 p-12 mr-8">
            <h2 class="text-4xl font-bold mb-8">Project Purpose</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              This project investigates the spatial relationship between air pollution, land cover, and population exposure in Switzerland by integrating open geospatial data and reproducible GIS workflows. It focuses on:<br>
             
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mt-4">
              1. Mapping pollution concentration trends (2013–2022) for NO₂, PM2.5, and PM10;<br>
              2. Analyzing correlations between land cover types and pollution levels;<br>
              3. Identifying exposure hotspots using pollution-population overlays.
            </p>
          </div>
          
          <!-- Quote -->
          <div class="w-1/3 p-6 mb-12 pt-[210px]">
            <p class="text-base text-gray-500 italic">
              Final Deliverables:<br>
              – Annual concentration maps (2013–2022)<br>
              – Health-based pollution classification<br>
              – Urban land-use correlation analysis<br>
              – Bivariate exposure maps<br>
              – Interactive WebGIS and website
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Steps Section -->
    <div class="steps-section py-16 mb-8">
      <div class="container mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-12">Development Steps</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Step 1: Data Collection -->
          <div class="step-card" @click="navigateToStep('data-collection')">
            <div :class="cardClasses">
              <div :class="imageClasses" :style="{ backgroundImage: `url(${step1Bg})`, backgroundSize: 'cover', backgroundPosition: 'left top' }"></div>
              <div :class="contentClasses">
                <h3 class="text-2xl font-semibold mb-4">Air Pollutant Mapping and Classification</h3>
                <p class="text-gray-600">
                  CAMS air quality data (2013–2022) were processed into annual mean concentration maps for Switzerland. The 2020 maps were reclassified based on EU health thresholds, and 2022 changes were computed relative to the 2017–2021 average to assess national pollution trends.
                </p>
              </div>
            </div>
          </div>

          <!-- Step 2: Analysis -->
          <div class="step-card" @click="navigateToStep('analysis')">
            <div :class="cardClasses">
              <div :class="imageClasses" :style="{ backgroundImage: `url(${step2Bg})`, backgroundSize: 'cover', backgroundPosition: 'left top'}"></div>
              <div :class="contentClasses">
                <h3 class="text-2xl font-semibold mb-4">Land Cover Processing and Pollution Zonal Analysis</h3>
                <p class="text-gray-600">
                  ESA land cover was reclassified into six IPCC categories and aligned with Switzerland's pollution rasters. Zonal statistics focused on urban areas were used to analyze mean and maximum pollution from 2013 to 2022, resulting in temporal trend visualizations.
                </p>
              </div>
            </div>
          </div>

          <!-- Step 3: Implementation -->
          <div class="step-card" @click="navigateToStep('implementation')">
            <div :class="cardClasses">
              <div :class="imageClasses" :style="{ backgroundImage: `url(${step3Bg})`, backgroundSize: 'cover', backgroundPosition: 'left top' }" ></div>
              <div :class="contentClasses">
                <h3 class="text-2xl font-semibold mb-4">Population Exposure Analysis and Visualization</h3>
                <p class="text-gray-600">
                  Based on 2020 WorldPop data, Switzerland's population was classified by density and overlaid with pollution levels to create bivariate maps. Population totals under each pollution class were aggregated and visualized using pie charts to highlight exposure distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import workflow1Bg from '@/assets/workflow1.jpg';
import step1Bg from '@/assets/step1.png';
import step2Bg from '@/assets/step2.png';
import step3Bg from '@/assets/step3.png';

// Card Styles
const cardClasses = [
  'bg-white',
  'rounded-lg',
  'shadow-lg',
  'hover:shadow-xl',
  'transition-shadow',
  'h-[620px]',
  'flex',
  'flex-col',
  'overflow-hidden' // 防止内容溢出
].join(' ');

const imageClasses = [
  'h-[350px]',
  'rounded-t-lg',
  'transition-transform',
  'duration-300',
  'transform',
  'hover:scale-105'
].join(' ');

const contentClasses = [
  'p-8',
  'flex',
  'flex-col',
  'h-[270px]', // 固定内容区域高度
  'overflow-y-auto', // 自动滚动
  'custom-scrollbar' // 使用自定义滚动条样式
].join(' ');

// eslint-disable-next-line no-unused-vars
const router = useRouter();

const navigateToStep = (step) => {
  switch(step) {
    case 'data-collection':
      router.push('/workflow/air-pollutant');
      break;
    case 'analysis':
      router.push('/workflow/land-cover');
      break;
    case 'implementation':
      router.push('/workflow/population');
      break;
  }
};
</script>

<style scoped>
.workflow-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.step-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
}

.hero-section {
  position: relative;
  background-color: #f3f4f6;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, #ffffff);
}

/* 自定义滚动条样式 */
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f3f3f3;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f3f3f3;
}
</style>