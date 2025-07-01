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

            <!-- Section 2-->
            <div class="content-card">
              <h2 class="text-3xl font-semibold mb-8">Monthly Pollutant Raster Processing</h2>
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
                    <img src="@/assets/Clipped.png" alt="Analysis Results" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">Clipped Monthly Pollution Raster</p>
                </div>
              </div>

              <div class="text-content pl-8 pr-16">
                <div class="flex flex-col gap-6">
                  <div>
                    <h4 class="section-title">Monthly Aggregation from NetCDF</h4>

                    <p class="content-text mb-4">
                      NO₂, PM2.5, and PM10 NetCDF files were loaded in QGIS using the "Add Mesh Layer" tool. After setting the CRS and enabling the time controller, available variables were verified. The Mesh Calculator was then used to compute the monthly mean for December 2022.
                    </p>
                    <p class="content-text mb-4">
                      The aggregated output was exported to GeoTIFF format using the "Rasterize Mesh Dataset" tool, with consistent resolution and projection. This raster served as a base input for further pollution analysis and visualization.

                    </p>

                  </div>
                  <div>
                    <h4 class="section-title">Monthly GeoTIFF Clipping and Standardization
                    </h4>

                    <p class="content-text mb-4">
                      Monthly GeoTIFF layers (2013–2022) for NO₂, PM2.5, and PM10 were loaded and reprojected to a common CRS. The Switzerland boundary was used as a mask in the "Clip Raster by Mask Layer" tool, which was executed in batch mode to ensure spatial consistency and processing efficiency.

                    </p>
                    <p class="content-text mb-4">
                      The clipped rasters were saved with a consistent naming convention and used as standardized input for annual mean calculation and time-series analysis.
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3-->
        <div class="content-card mb-16">
          <h2 class="text-3xl font-semibold mb-8">Yearly aggregated pollutants</h2>
          <div class="flex gap-8 ">
            <!-- Left side - Image -->
            <div class="w-1/2 flex-none pl-8">
              <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px] mr-8">
                <img src="@/assets/annual.png" alt="Annual Mean Analysis Results" class="w-full h-full object-cover"/>
              </div>
              <p class="text-gray-500 text-sm mt-2 text-center">Annual Average Pollution Map Example: PM2.5 (2013)</p>
            </div>
            
            <!-- Right side - Text content -->
            <div class="w-1/2 flex-none pr-8 pb-8">
              <div class="flex flex-col gap-6 h-full">
                <div>
                  <h4 class="section-title">1. Yearly Mean Calculation Using r.series</h4>
                  <p class="content-text mb-4">
                    Using the clipped monthly pollutant rasters, yearly means were calculated by averaging the 12 monthly layers for each pollutant and year. This was done using the r.series tool in QGIS, with the aggregation operation set to average and input layers grouped by year.
                  </p>

                </div>
                <div>

                  <h4 class="section-title mt-4">2. Batch Export and Standardized Output Naming</h4>
                  <p class="content-text mb-4">
                    Batch processing was applied to handle multiple years efficiently. The output files followed a standardized naming scheme such as Switzerland_average_pm2p5_2022.tif, with consistent projection and resolution settings.                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Section 4-->
        <div class="content-card ">
          <h2 class="text-3xl font-semibold mb-8"> Reclassification of Yearly Pollution Maps (2020)</h2>
          <div class="flex gap-4 ">


            <!-- left side - Text content -->
            <div class="w-1/2 flex-none pl-8 pb-8 pr-8">
              <div class="flex flex-col gap-6 h-full">
                <div>
                  <h4 class="section-title">1. Reclassification Based on EU Thresholds</h4>
                  <p class="content-text mb-4">
                    Based on EU air quality standards, annual mean concentration maps of NO₂, PM2.5, and PM10 for the year 2020 were reclassified into five categories. The Reclassify by Table tool in QGIS was used to apply the classification thresholds to the yearly raster layers.
                  </p>

                </div>
                <div>

                  <h4 class="section-title mt-4">2. Batch Processing and Output</h4>
                  <p class="content-text mb-4">
                    Each pollutant was assigned a specific set of threshold values and processed in batch mode. The resulting maps were saved using a standardized format, enabling visual assessment of concentration levels across the study area.
                  </p>
                </div>

              </div>
            </div>
            <!-- right side - Image -->
            <div class="w-1/2 flex-none pl-8">
              <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px] mr-8">
                <img src="@/assets/standard.png" alt="Annual Mean Analysis Results" class="w-full h-full object-cover"/>
              </div>
              <p class="text-gray-500 text-sm mt-2 text-center">PM2.5 Concentration Classification Map – 2020</p>
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