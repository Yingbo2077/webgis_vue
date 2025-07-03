<template>
  <div class="detail-page">
    <AppHeader />
    
    <!-- Hero Section -->
    <div class="hero-section bg-gray-50 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Land Cover Processing and Pollution Zonal Analysis</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Investigation of the relationship between land cover types and air pollution levels,
          with a focus on urban areas and temporal trends from 2013 to 2022.
        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content-section py-12">
      <div class="container mx-auto px-8">
        <!-- Section 1: Land Cover Classification -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-8">IPCC Land Cover Classification</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">ESA Land Cover Reclassification</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  The ESA land cover data was processed and reclassified into six main IPCC categories:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Forest Land</li>
                  <li>Cropland</li>
                  <li>Grassland</li>
                  <li>Wetlands</li>
                  <li>Settlements</li>
                  <li>Other Land</li>
                </ul>
                <p class="text-gray-700 leading-relaxed">
                  This classification provides a standardized framework for analyzing the relationship
                  between land use patterns and air quality across Switzerland.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Urban Analysis -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-8">Urban Area Analysis</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">Pollution Patterns in Urban Settings</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Detailed analysis of pollution patterns in urban areas reveals:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Higher concentration of pollutants in dense urban areas</li>
                  <li>Correlation between urban density and pollution levels</li>
                  <li>Impact of urban green spaces on air quality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Temporal Analysis -->
        <div>
          <h2 class="text-3xl font-semibold mb-8">Temporal Trend Analysis</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">Long-term Trends (2013-2022)</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Time series analysis of pollution levels in different land cover types shows:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Seasonal variations in pollution concentrations</li>
                  <li>Long-term trends in urban air quality</li>
                  <li>Effectiveness of pollution control measures</li>
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