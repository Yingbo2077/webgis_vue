<template>
  <div class="detail-page">
    <AppHeader />
    
    <!-- Hero Section -->
    <div class="hero-section  py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Air Pollutant Mapping and Classification</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive analysis of air quality trends in Switzerland from 2013 to 2022,
          focusing on NO₂, PM2.5, and PM10 concentrations and their spatial distribution.
        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content-section bg-gray-50 py-12">
      <div class="container mx-auto px-8 ">
        <!-- Section 1: Data Acquisition -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-4">Data Acquisition and Processing</h2>
          <div class="grid grid-cols-1 gap-16">
            <div class="content-card">
              <div class="flex gap-24 mb-8 px-8">
                <div class="flex-1">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[400px]">
                    <img src="@/assets/CAMS.png" alt="CAMS Data Interface" class="w-full h-full object-cover"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">CAMS Atmosphere Data Store interface for downloading air pollution data</p>
                </div>
                <div class="flex-1">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[400px]">
                    <img src="@/assets/clip.png" alt="Area Clipping Process" class="w-full h-full object-cover"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">QGIS interface showing the extraction of Switzerland's national boundary</p>
                </div>
              </div>

              <div class="text-content pl-8 pr-16">
                <div class="flex flex-col gap-6">
                  <div>
                    <h4 class="section-title">1. Data Sources</h4>
                    <h4 class="subsection-title">National Boundary Vector Data</h4>
                    <p class="content-text mb-4">
                      The national boundary was obtained from a GeoPackage vector file, specifically the countries_boundaries layer in GIS_Lab_Case_studies.gpkg. After loading the layer into QGIS, the boundary of Switzerland was selected using attribute filtering and exported as a separate layer to be used for clipping all pollution-related raster datasets.
                    </p>
                    <h4 class="subsection-title">Air Pollution Data</h4>
                    <p class="content-text mb-4">
                      Air pollution data were retrieved from the <a href="https://ads.atmosphere.copernicus.eu/datasets/cams-europe-air-quality-reanalyses?tab=overview" target="_blank" class="text-blue-600 hover:text-blue-800 underline">CAMS Atmosphere Data Store</a> using the "CAMS global reanalysis" dataset. The required variables include NO₂, PM2.5, and PM10, all at the surface level. Data were downloaded in NetCDF format for the period 2013–2022, with a specific focus on December 2022 for monthly mean calculations.
                    </p>
                  </div>

                  <div class="mb-4">
                    <h4 class="section-title">2. Area Extraction & Clipping</h4>
                    <p class="content-text mb-4">
                      The boundary of Switzerland is extracted in QGIS and saved as a separate layer to serve as a clipping mask. All layers are reprojected to EPSG:4326 to ensure spatial consistency.
                    </p>
                    <p class="content-text">
                      The "Clip Raster by Mask Layer" tool is then used to clip both NetCDF-derived .tif files and monthly GeoTIFFs to the study area. Batch processing is recommended for handling multiple layers efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 2: Health-Based Classification -->
            <div class="content-card">
              <h2 class="text-3xl font-semibold mb-8">Data Acquisition and Processing</h2>
              <div class="flex gap-12 mb-8 px-8 justify-start overflow-x-auto">
                <div class="w-[400px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/mesh.png" alt="Mesh Calculator Interface" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">QGIS Mesh Calculator for processing pollution data</p>
                </div>
                <div class="w-[400px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/Calculator.png" alt="Rasterization Process" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">Rasterization of vector data for analysis</p>
                </div>
                <div class="w-[400px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/Rasterize.png" alt="Analysis Results" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">Final visualization of pollution analysis results</p>
                </div>
              </div>

              <div class="text-content pl-8 pr-16">
                <div class="flex flex-col gap-6">
                  <div>
                    <h4 class="section-title">1. Data Processing</h4>
                    <h4 class="subsection-title">Mesh Calculator Operations</h4>
                    <p class="content-text mb-4">
                      The QGIS Mesh Calculator was utilized to perform mathematical operations on the pollution data layers. This includes calculating monthly and annual averages, as well as deriving statistical measures for trend analysis.
                    </p>
                    <h4 class="subsection-title">Rasterization Process</h4>
                    <p class="content-text mb-4">
                      Vector data layers were converted to raster format to enable pixel-based analysis and ensure consistency with the pollution data. This step was crucial for integrating different data types in the analysis workflow.
                    </p>
                  </div>

                  <div class="mb-4">
                    <h4 class="section-title">2. Analysis Results</h4>
                    <p class="content-text mb-4">
                      The processed data revealed significant spatial patterns in pollution distribution across Switzerland. The analysis highlighted areas of high pollution concentration and temporal trends over the study period.
                    </p>
                    <p class="content-text">
                      The results were visualized using standardized classification schemes to ensure consistency and comparability across different pollutants and time periods.
                    </p>
                  </div>
                </div>
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

.content-card {
  @apply bg-white rounded-lg shadow-lg p-8;
}

.section-title {
  @apply text-xl font-semibold mb-4;
}

.subsection-title {
  @apply text-lg font-medium mb-2;
}

.content-text {
  @apply text-gray-700 text-base leading-relaxed;
}
</style> 