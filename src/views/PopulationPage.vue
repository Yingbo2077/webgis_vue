<template>
  <div class="detail-page">
    <AppHeader />
    
    <!-- Hero Section -->
    <div class="hero-section  py-16">
      <div class="container mx-auto px-8">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Population Exposure Analysis and Visualization</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Assessment of population exposure to air pollution in Switzerland using 2020 WorldPop data,
          creating detailed bivariate maps and exposure distribution analyses.
        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content-section bg-gray-50 py-12">
      <div class="container mx-auto px-8 ">

        <!-- Section 1-->
        <div class="content-card mb-16">
          <h2 class="text-3xl font-semibold mb-6">Data Sources</h2>
          <div class="flex gap-8 ">
            <!-- Left side - Image -->
            <div class="w-1/2 flex-none pl-8">
              <div class="bg-gray-100 rounded-lg overflow-hidden h-[300px] mr-8">
                <img src="@/assets/population.png" alt="Annual Mean Analysis Results" class="w-full h-full object-cover"
                     style="object-position: left top;"/>
              </div>
              <p class="text-gray-500 text-sm  text-center mt-4">WorldPop Population Download Interface</p>
            </div>

            <!-- Right side - Text content -->
            <div class="w-1/2 flex-none pr-8 pb-8">
              <div class="flex flex-col gap-6 h-full">
                <div>
                  <h4 class="section-title">Population Data</h4>
                  <p class="content-text mb-4">
                    Population count data for the year 2020 was obtained from <a href="https://hub.worldpop.org/geodata/listing?id=29" target="_blank" class="text-blue-600 hover:text-blue-800 underline">WorldPop</a>, using the 100m resolution “Population Counts” dataset filtered by country.                  </p>

                </div>
                <div>

                  <h4 class="section-title mt-4">Administrative Boundaries</h4>
                  <p class="content-text mb-4">
                    Administrative boundary data was based on GAUL Level 2, specific to Europe. The country-level boundaries were selected in QGIS using field value filtering and exported as GeoPackage format.                </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- Section 2: Data Acquisition -->
        <div class="mb-20">
          <div class="grid grid-cols-1 gap-16">

            <div class="content-card">
              <h2 class="text-3xl font-semibold mb-8">Population Exposure and Bivariate Mapping of Pollution Risk
              </h2>
              <div class="flex gap-8 mb-8 px-8 justify-start overflow-x-auto">
                <div class="w-[400px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/Rules.png" alt="Mesh Calculator Interface" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">Generating Recode Rules Using r.quantile in QGIS

                  </p>
                </div>
                <div class="w-[400px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/bivariate.png" alt="Rasterization Process" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">Creating a Bivariate Field Using Field Calculator
                  </p>
                </div>
                <div class="w-[380px] flex-none">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[350px]">
                    <img src="@/assets/color.png" alt="Analysis Results" class="w-full h-full object-contain object-left-top"/>
                  </div>
                  <p class="text-gray-500 text-sm mt-2 text-center">5×5 Bivariate Color Legend for Population and Pollution
                  </p>
                </div>
              </div>

              <div class="text-content pl-8 pr-16">
                <div class="flex flex-col gap-6">
                  <div>
                    <h4 class="section-title">Part I: Population Data Processing and Spatial Classification
                    </h4>
                    <h4 class="subsection-title">Quantile classification and recode rule generation</h4>
                    <p class="content-text mb-4">
                      The 2020 WorldPop population raster was loaded into QGIS and classified using the quantile method, targeting 5 population classes. The r.quantiles tool was used to generate recode rules for further processing.
                    </p>
                    <h4 class="subsection-title">Apply recode rules to generate population class raster</h4>
                    <p class="content-text mb-4">
                      The original population raster was reclassified using the “Reclassify by Table” tool to produce a raster with values from 1 to 5, representing increasing population density.
                    </p>
                  </div>

                  <div >
                    <h4 class="section-title">Part II: Bivariate Map Construction and Regional Statistics
                    </h4>
                    <h4 class="subsection-title">Zonal statistics using GAUL L2 administrative boundaries</h4>
                    <p class="content-text mb-4">
                      Zonal statistics were performed using GAUL Level 2 boundaries: median values were extracted from the population raster and maximum values from the pollutant raster, and results were saved.
                    </p>
                    <h4 class="subsection-title">Compute bivariate class index</h4>
                    <p class="content-text mb-4">
                      A new attribute field named bivariate was created in the attribute table using the expression pol_class_max * 10 + pop_class_median to generate unique bivariate codes (from 11 to 55) for each region.
                    </p>
                    <h4 class="subsection-title"> Style and render the bivariate map</h4>
                    <p class="content-text mb-2">
                      A predefined 5×5 QML style was applied to the vector layer. Each color square represents a unique population-pollution combination, revealing spatial patterns such as overlaps of high pollution and high population.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3-->
        <div class="content-card mb-16">
          <h2 class="text-3xl font-semibold mb-8">Visualization of Population Exposure via Pie Charts
          </h2>
          <div class="flex gap-6 ">
            <!-- Left side - Image -->
            <div class="w-1/2 flex-none pl-8">
              <div class="bg-gray-100 rounded-lg overflow-hidden w-[600px] h-[400px] mr-8">
                <img src="@/assets/chart.png" alt="Pie Chart Settings for Population Exposure by Pollutant Class
" class="w-full h-full object-cover"
                     style="object-position: left top;"/>
              </div>
              <p class="text-gray-500 text-sm  text-center mt-2">Pie Chart Settings for Population Exposure by Pollutant Class
              </p>
            </div>
            
            <!-- Right side - Text content -->
            <div class="w-1/2 flex-none pr-8 pb-8">
              <div class="flex flex-col gap-6 h-full">
                <div>
                  <h4 class="section-title">1. Dissolve by Pollutant Classes and Recompute Zonal Statistics
                  </h4>
                  <p class="content-text ">
                    Using the pollutant bivariate vector layer, the layer was dissolved by the pol_class_max field using the Vector → Geoprocessing Tools → Dissolve tool. This step ensures that each resulting feature represents one pollution class only (maximum of 5 features). Then, the Zonal Statistics tool was used with the dissolved layer as input and the original population raster as the statistical source. The output field prefix was set to pop_, and the statistic computed was the sum, resulting in a new attribute pop_sum.
                  </p>

                </div>
                <div>

                  <h4 class="section-title mt-2">2. Create Pie Charts and Export Final Layer
                  </h4>
                  <p class="content-text mb-4">
                    Using the dissolved vector layer with pop_sum and pol_class_max, a pie chart was created via DataPlotly. The chart visualized the proportion of the population exposed to each pollutant concentration level. For submission, the resulting layer containing the population sum and pollution class was saved as a GeoPackage file, following the required naming format, e.g., Italy_pm2p5_2020_chart.gpkg.
                  </p>
                </div>

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