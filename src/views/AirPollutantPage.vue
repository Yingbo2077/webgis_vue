<template>
  <div class="detail-page">
    <AppHeader />
    
    <!-- Hero Section -->
    <div class="hero-section bg-gray-50 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Air Pollutant Mapping and Classification</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive analysis of air quality trends in Switzerland from 2013 to 2022,
          focusing on NO₂, PM2.5, and PM10 concentrations and their spatial distribution.
        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content-section py-12">
      <div class="container mx-auto px-8">
        <!-- Section 1: Annual Mean Concentrations -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-8">Annual Mean Concentrations (2013-2022)</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">Temporal Evolution of Pollutants</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Analysis of the CAMS reanalysis data reveals significant trends in air pollutant concentrations across Switzerland over the past decade. The annual mean maps demonstrate:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Gradual reduction in NO₂ levels, particularly in urban areas</li>
                  <li>Seasonal variations in PM2.5 and PM10 concentrations</li>
                  <li>Impact of meteorological conditions on pollution dispersion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Health-Based Classification -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-8">Health-Based Classification</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">EU Air Quality Standards</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  The 2020 pollution maps were reclassified according to EU health thresholds to identify areas of concern:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Areas exceeding annual mean limits for each pollutant</li>
                  <li>Spatial distribution of concentration classes</li>
                  <li>Identification of pollution hotspots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Change Analysis -->
        <div>
          <h2 class="text-3xl font-semibold mb-8">2022 Change Analysis</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">Recent Trends Assessment</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Comparison of 2022 pollution levels with the 2017-2021 average reveals:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Areas of significant improvement or deterioration</li>
                  <li>Effectiveness of air quality management measures</li>
                  <li>Potential factors influencing observed changes</li>
                </ul>
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
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-block {
  @apply bg-white rounded-lg shadow-lg p-8;
}

.image-container img {
  @apply w-full h-full object-cover;
}
</style> 