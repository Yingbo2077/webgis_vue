<template>
  <div class="detail-page">
    <AppHeader />
    
    <!-- Hero Section -->
    <div class="hero-section  py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Land Cover Processing and Urban Pollution Statistics</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          This section involved downloading and simplifying ESA CCI land cover data, aligning it with pollutant rasters, extracting urban areas, and performing zonal statistics to calculate annual mean and maximum values of NO₂, PM2.5, and PM10 from 2013 to 2022.

        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content-section bg-gray-50 py-12">
      <div class="container mx-auto px-8 ">
        <!-- Section 1: Data Acquisition -->
        <div class="mb-20">
          <h2 class="text-3xl font-semibold mb-4">Land Cover Data Source and Preprocessing
          </h2>
          <div class="grid grid-cols-1 gap-16">
            <div class="content-card">
              <div class="flex gap-8 mb-8 px-8 justify-start overflow-x-auto">
                <div class="w-[500px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/land.png" alt="Mesh Calculator Interface" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">ESA CCI Land Cover dataset overview page</p>
                </div>
                <div class="w-[400px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/IPCC.png" alt="Rasterization Process" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">IPCC to CCI-LC Land Cover Reclassification Table</p>
                </div>
                <div class="w-[400px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/reproject.png" alt="Analysis Results" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">QGIS Reprojection Setup using Warp Tool</p>
                </div>
              </div>

              <div class="text-content pl-8 pr-16">
                <div class="flex flex-col ">
                  <div>
                    <h4 class="section-title">Data Sources</h4>
                    <p class="content-text mb-4">
                      The ESA CCI land cover classification maps were used to analyze the relationship between land use and air pollution. The dataset was downloaded from the <a href="https://cds.climate.copernicus.eu/datasets/satellite-land-cover?tab=overview" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Climate Data Store (CDS)</a> , covering the period from 1992 to the present at 300m resolution. For this project, version v2.1.1 (2022) was used, with a sub-region defined by North 72°, South 30°, West -25°, East 45°.
                    </p>

                  </div>

                  <div class="mb-4">
                    <h4 class="section-title">Data Preprocessing</h4>
                    <h4 class="subsection-title">1. Area Clipping</h4>
                    <p class="content-text mb-2">
                      The NetCDF file was loaded into QGIS, selecting the lccs_class variable and reprojecting it to WGS84 (EPSG:4326). The layer was styled based on FAO’s 22 land cover classes, and value 0 was treated as NoData. The raster was clipped using the study area boundary with the Clip Raster by Mask Layer tool. Batch processing was applied to handle multiple years.
                    </p>
                    <h4 class="subsection-title">2. Land Cover Simplification</h4>
                    <p class="content-text mb-4">
                      The original ESA CCI Land Cover data includes 22 land cover types. To simplify analysis and visualization, the classification was restructured into six main IPCC-defined categories using the Reclassify by Table tool in QGIS. This involved defining value ranges and assigning new class codes according to the general IPCC schema. </p>

                    <h4 class="subsection-title">3. Resampling for Alignment</h4>
                    <p class="content-text mb-4">
                      To align raster datasets spatially, the CAMS annual average pollutant maps were resampled to match the 300m resolution of ESA CCI Land Cover. This was done using the Wrap (reproject) tool in QGIS, with the CRS set to EPSG:4326. Final outputs were verified to ensure consistent spatial properties. </p>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <!-- Section 3-->
        <div class="content-card mb-16">
          <h2 class="text-3xl font-semibold mb-8">Zonal statistics on urban land
          </h2>
          <div class="flex gap-8 ">
            <!-- Left side - Image -->
            <div class="w-1/2 flex-none pl-8">
              <div class="bg-gray-100 rounded-lg overflow-hidden h-[370px] mr-8">
                <img src="@/assets/zonal.png" alt="Annual Mean Analysis Results" class="w-full h-full object-cover"/>
              </div>
              <p class="text-gray-500 text-sm  text-center">Batch Zonal Statistics for Urban Pollution Analysis</p>
            </div>
            
            <!-- Right side - Text content -->
            <div class="w-1/2 flex-none pr-8 pb-8">
              <div class="flex flex-col gap-6 h-full">
                <div>
                  <h4 class="section-title">Extracting Urban Areas from Land Cover Maps</h4>
                  <p class="content-text mb-4">
                    The urban land cover class (value = 190) was first extracted from the reclassified ESA CCI LC map by converting it into a vector layer using the Polygonize (Raster to Vector) tool. Non-urban areas were removed by inverting the selection. The resulting vector polygons were then dissolved into a single geometry representing the entire built-up area.
                  </p>

                </div>
                <div>
                  <h4 class="section-title mt-4">Computing Zonal Statistics for Pollutant Layers</h4>
                  <p class="content-text mb-4">
                    Next, the Zonal Statistics tool was applied to compute mean and maximum values of each annual pollutant raster (NO₂, PM2.5, PM10) over the urban extent. This was done using the dissolved vector as input and the average pollutant layers from 2013 to 2022 as raster layers.                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Section 4-->
        <div class="content-card  mt-8">
          <h2 class="text-3xl font-semibold mb-8"> Joining Attributes and Plotting
          </h2>
          <div class="flex gap-4 ">


            <!-- left side - Text content -->
            <div class="w-1/2 flex-none pl-8 pb-8 pr-8">
              <div class="flex flex-col gap-6 h-full">
                <div>
                  <h4 class="section-title">1. Attribute Join Procedure</h4>
                  <p class="content-text mb-4">
                    To integrate yearly statistics, vector layers from 2014 to 2022 were joined sequentially to the 2013 vector layer using the Joins panel under Layer Properties. The join was performed by the fid field, resulting in a combined attribute table containing mean and max values for all years.

                  </p>

                </div>
                <div>

                  <h4 class="section-title mt-4">2. Export and Trend Visualization</h4>
                  <p class="content-text mb-4">
                    After the joins were completed, all attribute fields were checked for correctness. The merged layer was then saved as a GeoPackage for further use. Finally, bar charts were created to visualize the trends of annual mean and maximum pollutant values across the urban area from 2013 to 2022.
                  </p>
                </div>

              </div>
            </div>
            <!-- right side - Image -->
            <div class="w-1/2 flex-none pl-8 mt-8">
              <div class="bg-gray-100 rounded-lg overflow-hidden h-[100px] mr-8 mt-8">
                <img src="@/assets/table.png"
                     alt="Joined Attribute Table Showing Annual Mean and Maximum PM2.5 Values"
                     class="w-full h-full object-contain"
                     style="object-position: left top;" />
              </div>
              <p class="text-gray-500 text-sm  text-center mt-4">Joined Attribute Table Showing Annual Mean and Maximum PM2.5 Values</p>
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