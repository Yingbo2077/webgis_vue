<template>
  <div class="detail-page">
    <AppHeader />
    
    <!-- Hero Section -->
    <div class="hero-section bg-gray-50 py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Population Exposure Analysis and Visualization</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Assessment of population exposure to air pollution in Switzerland using 2020 WorldPop data,
          creating detailed bivariate maps and exposure distribution analyses.
        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content-section py-12">
      <div class="container mx-auto px-8">
        <!-- Section 1: Population Density Analysis -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-8">Population Density Classification</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">Population Distribution Patterns</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Analysis of the 2020 WorldPop data reveals the following patterns:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>High-density urban centers and agglomerations</li>
                  <li>Medium-density suburban areas</li>
                  <li>Low-density rural settlements</li>
                </ul>
                <p class="text-gray-700 leading-relaxed">
                  This classification forms the basis for understanding population exposure
                  to different levels of air pollution across Switzerland.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Bivariate Analysis -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-8">Bivariate Mapping</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">Population-Pollution Overlay Analysis</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  The bivariate mapping approach combines population density with pollution levels to:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Identify areas of high population exposure</li>
                  <li>Quantify the number of people affected by different pollution levels</li>
                  <li>Highlight priority areas for air quality management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Exposure Distribution -->
        <div>
          <h2 class="text-3xl font-semibold mb-8">Exposure Distribution Analysis</h2>
          <div class="grid grid-cols-1 gap-12">
            <div class="content-block">
              <div class="image-container bg-gray-100 rounded-lg overflow-hidden mb-6 h-[400px]">
                <!-- 实际使用时替换为真实图片 -->
                <div class="w-full h-full bg-gray-200"></div>
              </div>
              <div class="text-content">
                <h3 class="text-2xl font-medium mb-4">Population Exposure Statistics</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Statistical analysis of population exposure reveals:
                </p>
                <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Percentage of population exposed to different pollution levels</li>
                  <li>Geographic distribution of exposure risks</li>
                  <li>Temporal variations in population exposure</li>
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