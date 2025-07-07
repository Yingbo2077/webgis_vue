<template>
  <div class="result-page">
    <AppHeader />
    
    <div class="hero-section relative h-[600px]">
      <div 
        class="absolute inset-0 w-full h-full bg-cover bg-center"
        :style="{
          backgroundImage: `url(${workflow1Bg})`,
          opacity: '0.7'
        }"
      >
    </div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 class="text-7xl font-bold text-gray-800 mb-4">Results</h1>
        <p class="text-2xl text-gray-700">Air Quality Analysis</p>
      </div>
    </div>

    <main class="content-section" style="background-color: rgba(210,228,255,0.3)">


      <div class="filter-section">
        
        <div class="filter-group">
          <label for="pollutant-select" >Pollutant:</label>
          <select id="pollutant-select" v-model="selectedPollutant">
            <option v-for="pollutant in pollutants" :key="pollutant.value" :value="pollutant.value">
              {{ pollutant.label }}
            </option>
          </select>
        </div>
      </div>
      
      <div class="results-container">

        <div class="table-container">
          <h2 class="text-2xl font-semibold mb-4">Annual Concentration</h2>

          <h3>Annual concentration of {{ selectedPollutantLabel }} contaminant</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Minimum</th>
                <th>Maximum</th>
                <th>Mean</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              <p v-if="selectedPollutantLabel === 'NO₂'"></p>
              <p v-else-if="selectedPollutantLabel === 'PM2.5'"></p>
              <p v-else-if="selectedPollutantLabel === 'PM10'"></p>
              <tr v-for="(item, index) in tableData" :key="index">
                <td>{{ item.year }}</td>
                <td>{{ item.minimum }}</td>
                <td>{{ item.maximum }}</td>
                <td>{{ item.mean }}</td>
                <td>
                    <span class="status-badge" :class="item.statusClass">
                  {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div class="table-container">
          <h2 class="text-2xl font-semibold mb-4">ESA CCI Land Cover</h2>

          <h3>Reclassification schema according to ESA CCI Land Cover classification system</h3>
          <div class="flex w-full">
            <div class="w-1/2">
              <!-- 左边内容 -->
              <img :src="LC" alt="LC" class="image-rowrow"/>
            </div>
            <div class="w-1/2  p-6 rounded-lg   leading-relaxed mt-20 mr-4 ml-4">
              <ul class="list-disc list-inside space-y-5 ">
                <li>
                  <strong>Settlements</strong> (red areas, class 5) are densely concentrated in the Swiss Plateau (central north), indicating strong urbanization in that region.
                </li>
                <li>
                  <strong>Forests and Shrublands</strong> (orange–brown tones, class 2 & 6) dominate the alpine and pre-alpine zones, reflecting the mountainous terrain.
                </li>
                <li>
                  <strong>Agricultural lands</strong> (light orange, class 1) are mostly distributed in flatter lowland areas, especially in the western and northern parts.
                </li>
                <li>
                  <strong>Water bodies</strong> (blue, base area class) are clearly visible in central Switzerland (e.g., Lake Geneva, Lake Neuchâtel, Lake Zurich).
                </li>
              </ul>
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Row</th>
                <th>IPCC Classes</th>
                <th>LCC Legend</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tableDataClass" :key="index">
                <td>{{ item.Class }}</td>
                <td>{{ item.IPCC }}</td>
                <td>{{ item.Legend }}</td>
              </tr>
            </tbody>
          </table>


        </div>

        <div class="chart-container">
          <h2 class="text-2xl font-semibold mb-4">Maximum and mean concentration</h2>
          <h3>Comparison of maximum and mean concentration value per year and contaminant</h3>
            <img :src="Step6Max" alt="Step6Max" class="image-rowrow"/>
            <img :src="Step6Mean" alt="Step6Mean" class="image-rowrow"/>
          <div>
            <h4 class="section-title ">Trend Analysis of Air Pollutant Concentrations (2013–2022)</h4>

            <p class="content-text mb-4">
              The charts illustrate the yearly maximum (left) and mean (right) concentrations of NO₂, PM₂.₅, and PM₁₀ from 2013 to 2022. Overall, there is a decreasing trend for all three pollutants, especially for NO₂, which dropped significantly after peaking in 2015. A sharp decline in 2020 aligns with the COVID-19 lockdowns and reduced anthropogenic emissions.                    </p>
            <p class="content-text mb-6">
              PM₂.₅ shows a relatively stable pattern with a slight decline, while PM₁₀ remains more variable and even records a high mean value again in 2022, indicating persistent issues in particulate matter control. Among the three, PM₁₀ generally exhibits the highest concentration values, underscoring its importance in air quality policy.
            </p>
          </div>




        </div>







         <div class="chart-container">
           <h2 class="text-2xl font-semibold mb-8">Bivariate map and legend (Year 2020)</h2>
           <div v-if="selectedPollutantLabel === 'PM2.5'">
             <div class="content-card">
               <div class="flex gap-12 mb-8 px-8 justify-start overflow-x-auto">
                 <div class="w-[600px] flex-none ml-8">
                   <div class="bg-gray-100 rounded-lg overflow-hidden h-[320px]">
                     <img :src="bivariate_PM2P5" alt="bivariate_PM2P5" class="w-full h-full object-center object-left-top"/>
                   </div>
                   <p class="text-gray-500 text-sm mt-2 text-center">Bivariate Map of PM2.5 Exposure and Population Distribution</p>
                 </div>
                 <div class="w-[370px] flex-none ml-16">
                   <div class="bg-gray-100 rounded-lg overflow-hidden h-[340px]">
                     <img :src="bivariate" alt="bivariate" class="w-full h-full object-contain object-left-top"/>
                   </div>
                   <p class="text-gray-500 text-sm mt-2 text-center">Bivariate Color Legend
                   </p>
                 </div>

               </div>

               <div class="text-content pl-8 pr-16 mb-4">
                 <div class="flex flex-col gap-6">
                   <div>
                     <h4 class="section-title ">Spatial Correlation of PM2.5 Exposure and Population Density in Switzerland</h4>

                     <p class="content-text mb-4">
                       The map reveals that many regions in northern and central Switzerland are marked in dark purples and grays, indicating areas with both high PM2.5 concentration and high population density. This suggests significant overlap between pollution exposure and population clusters, likely corresponding to more urbanized zones.                     </p>
                     <p class="content-text mb-4">
                       In contrast, the southern and alpine regions are mostly shown in light blue or pink, representing low pollution and low population. Overall, the map highlights a spatial correlation between pollution burden and population distribution in Switzerland.
                     </p>
                   </div>



                 </div>
               </div>
             </div>
           </div>


           <div v-if="selectedPollutantLabel === 'NO₂'">
             <div class="content-card">
               <div class="flex gap-12 mb-8 px-8 justify-start overflow-x-auto">
                 <div class="w-[600px] flex-none ml-8">
                   <div class="bg-gray-100 rounded-lg overflow-hidden h-[320px]">
                     <img :src="bivariate_NO2" alt="bivariate_NO2" class="w-full h-full object-center object-left-top"/>
                   </div>
                   <p class="text-gray-500 text-sm mt-2 text-center">Bivariate Map of NO₂ Exposure and Population Distribution</p>
                 </div>
                 <div class="w-[370px] flex-none ml-16">
                   <div class="bg-gray-100 rounded-lg overflow-hidden h-[340px]">
                     <img :src="bivariate" alt="bivariate" class="w-full h-full object-contain object-left-top"/>
                   </div>
                   <p class="text-gray-500 text-sm mt-2 text-center">Bivariate Color Legend
                   </p>
                 </div>

               </div>

               <div class="text-content pl-8 pr-16 mb-4">
                 <div class="flex flex-col gap-6">
                   <div>
                     <h4 class="section-title ">Spatial Correlation of NO₂ Exposure and Population Density in Switzerland</h4>

                     <p class="content-text mb-4">
                       This bivariate map visualizes the spatial overlap between NO₂ concentration and population density in Switzerland. Darker areas, notably in the north, center, and northwest—such as around Zurich and Bern—indicate regions with both high pollution and high population, suggesting elevated exposure risks.                     </p>
                     <p class="content-text mb-4">
                       In contrast, the southern and southeastern areas appear lighter, reflecting both lower pollution and population levels. Overall, the map highlights key zones where pollution and population intersect, offering valuable guidance for environmental and public health strategies.
                     </p>
                   </div>

                 </div>
               </div>
             </div>
           </div>


           <div v-else-if="selectedPollutantLabel === 'PM10'">
             <div class="content-card">
               <div class="flex gap-12 mb-8 px-8 justify-start overflow-x-auto">
                 <div class="w-[600px] flex-none ml-8">
                   <div class="bg-gray-100 rounded-lg overflow-hidden h-[320px]">
                     <img :src="bivariate_PM10" alt="bivariate_PM10" class="w-full h-full object-center object-left-top"/>
                   </div>
                   <p class="text-gray-500 text-sm mt-2 text-center">Bivariate Map of PM10 Exposure and Population Distribution</p>
                 </div>
                 <div class="w-[370px] flex-none ml-16">
                   <div class="bg-gray-100 rounded-lg overflow-hidden h-[340px]">
                     <img :src="bivariate" alt="bivariate" class="w-full h-full object-contain object-left-top"/>
                   </div>
                   <p class="text-gray-500 text-sm mt-2 text-center">Bivariate Color Legend
                   </p>
                 </div>

               </div>

               <div class="text-content pl-8 pr-16 mb-4">
                 <div class="flex flex-col gap-6">
                   <div>
                     <h4 class="section-title ">Spatial Correlation of PM10 Exposure and Population Density in Switzerland</h4>

                     <p class="content-text mb-4">
                       This map illustrates the spatial intersection between PM₁₀ concentration and population density across Switzerland. Most areas appear in light to medium red shades, suggesting moderate pollution and population levels. However, darker red patches are visible in the north, around Zurich, and some eastern regions—indicating both high pollution and high population density and thus higher exposure risk.
                     </p>
                     <p class="content-text mb-4">
                       In contrast, southern mountainous areas, such as the southern part of Ticino, show high pollution but low population, resulting in lower overall exposure concern.                      </p>
                   </div>



                 </div>
               </div>
             </div>
           </div>




        </div>



       <div class="chart-container">
         <h2 class="text-2xl font-semibold mb-8">Pie charts (Year 2020)</h2>
          <div v-if="selectedPollutantLabel === 'NO₂'" >
            <div class="flex  ">
              <div class="w-1/2 flex-none ">
                <div class="flex flex-col items-center  ">
                  <div class="bg-gray-100 rounded-lg overflow-hidden h-[320px] w-[380px] max-w-[400px]">
                    <img :src="piechart_NO2" alt="piechart_NO2"
                         class="w-full h-full object-center"/>
                  </div>
                  <p class="text-gray-500 text-sm text-center mt-2">
                    Pie Chart of Population Exposure to NO₂ Levels (2020)
                  </p>
                </div>
              </div>
              <div class="w-1/2 flex-none pr-8 pb-8 mt-12">
                <div class="flex flex-col gap-6 h-full">
                  <div>
                    <h4 class="section-title">Population Exposure Distribution to NO₂ Pollution in 2020
                    </h4>
                    <p class="content-text mb-4 pr-24">
                      This pie chart shows the proportion of the Swiss population exposed to two different NO₂ concentration levels in 2020. Approximately 59.9% of the population was exposed to class 2 (moderate level), while 40.1% experienced class 1 (lower level). This indicates that nearly half of the population lived in areas with relatively low nitrogen dioxide pollution, and the other half in areas with moderate pollution, with no high exposure zones (class 3) present in this dataset.

                    </p>

                  </div>
                </div>
              </div>

            </div>


          </div>

         <div v-else-if="selectedPollutantLabel === 'PM2.5'" >
           <div class="flex  ">
             <div class="w-1/2 flex-none ">
               <div class="flex flex-col items-center  ">
                 <div class="bg-gray-100 rounded-lg overflow-hidden h-[320px] w-[380px] max-w-[400px]">
                   <img :src="piechart_PM2P5" alt="piechart_PM2P5"
                        class="w-full h-full object-center"/>
                 </div>
                 <p class="text-gray-500 text-sm text-center mt-2">
                   Pie Chart of Population Exposure to PM2.5 Levels (2020)
                 </p>
               </div>
             </div>
             <div class="w-1/2 flex-none pr-8 pb-8 mt-12">
               <div class="flex flex-col gap-6 h-full">
                 <div>
                   <h4 class="section-title">Pie Chart of Population Exposure to PM2.5 Levels (2020)
                   </h4>
                   <p class="content-text mb-4 pr-24">
                     This pie chart illustrates the distribution of population exposure to different PM2.5 concentration classes in Switzerland in 2020. Class 2 accounts for the overwhelming majority, with 96% of the population exposed to this concentration level. Only 3.37% and 0.63% are exposed to class 3 and class 1, respectively. This suggests that most of the population resides in areas with moderate PM2.5 pollution, while high exposure (class 3) is relatively rare, and very low exposure (class 1) is minimal.
                   </p>

                 </div>
               </div>
             </div>

           </div>

         </div>

         <div v-else-if="selectedPollutantLabel === 'PM10'" >
           <div class="flex  ">
             <div class="w-1/2 flex-none ">
               <div class="flex flex-col items-center  ">
                 <div class="bg-gray-100 rounded-lg overflow-hidden h-[320px] w-[380px] max-w-[400px]">
                   <img :src="piechart_PM10" alt="piechart_PM10"
                        class="w-full h-full object-center"/>
                 </div>
                 <p class="text-gray-500 text-sm text-center mt-2">
                   Pie Chart of Population Exposure to PM10 Levels (2020)
                 </p>
               </div>
             </div>
             <div class="w-1/2 flex-none pr-8 pb-8 mt-12">
               <div class="flex flex-col gap-6 h-full">
                 <div>
                   <h4 class="section-title">Pie Chart of Population Exposure to PM10 Levels (2020)
                   </h4>
                   <p class="content-text mb-4 pr-24">
                     This pie chart shows the distribution of population exposed to different levels of PM₁₀ concentration in 2020. The vast majority of the population (97.6%) was exposed to level 2 concentration, while only 2.4% experienced level 1 and a negligible 0.6% experienced level 3. This suggests that PM₁₀ levels in Switzerland were relatively uniform and generally moderate, with very limited population exposure to high or very low pollutant levels.
                   </p>

                 </div>
               </div>
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
import { ref, computed } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import Step6Max from '@/assets/Step6_max.svg';
import Step6Mean from '@/assets/Step6_mean.svg';
import bivariate from '@/assets/bivariate.png';
import piechart_NO2 from '@/assets/piechart_NO2.png';
import piechart_PM10 from '@/assets/piechart_PM10.png';
import piechart_PM2P5 from '@/assets/piechart_PM2P5.png';
import bivariate_NO2 from '@/assets/bivariate_NO2.png';
import bivariate_PM10 from '@/assets/bivariate_PM10.png';
import bivariate_PM2P5 from '@/assets/bivariate_PM2P5.png';
import workflow1Bg from '@/assets/瑞士2.jpg';
import LC from '@/assets/LC.png';

// Sample data
const pollutants = ref([
  { value: 'pm25', label: 'PM2.5' },
  { value: 'pm10', label: 'PM10' },
  { value: 'no2', label: 'NO₂' },
]);
const selectedPollutant = ref('pm25');


// Computed properties

const selectedPollutantLabel = computed(() => {
  const found = pollutants.value.find(p => p.value === selectedPollutant.value);
  return found ? found.label : '';
});


// Sample table data
const dataNO2 = ref([
  {year: '2013', minimum: '1.89', maximum: '19.39', mean: '7.04', statusClass: 'good', status:'2'},
  {year: '2014', minimum: '1.92', maximum: '18.76', mean: '7.01', statusClass: 'good', status:'2'},
  {year: '2015', minimum: '3.58', maximum: '23.50', mean: '9.72', statusClass: 'good', status:'2'},
  {year: '2016', minimum: '2.94', maximum: '21.13', mean: '9.06', statusClass: 'good', status:'2'},
  {year: '2017', minimum: '3.04', maximum: '20.86', mean: '8.71', statusClass: 'good', status:'2'},
  {year: '2018', minimum: '1.77', maximum: '17.21', mean: '6.40', statusClass: 'good', status:'2'},
  {year: '2019', minimum: '1.51', maximum: '18.89', mean: '5.93', statusClass: 'good', status:'2'},
  {year: '2020', minimum: '1.27', maximum: '16.09', mean: '5.64', statusClass: 'good', status:'2'},
  {year: '2021', minimum: '1.61', maximum: '16.77', mean: '6.00', statusClass: 'good', status:'2'},
  {year: '2022', minimum: '1.59', maximum: '18.76', mean: '6.20', statusClass: 'good', status:'2'}]);

const dataPM25 = ref([
  {year: '2013', minimum: '3.72', maximum: '17.51', mean: '8.87', statusClass: 'moderate', status: '3'},
  {year: '2014', minimum: '3.62', maximum: '12.52', mean: '7.15', statusClass: 'moderate', status: '3'},
  {year: '2015', minimum: '5.72', maximum: '16.99', mean: '10.29', statusClass: 'moderate', status: '3'},
  {year: '2016', minimum: '4.79', maximum: '16.88', mean: '9.61', statusClass: 'moderate', status: '3'},
  {year: '2017', minimum: '4.96', maximum: '14.64', mean: '8.24', statusClass: 'moderate', status: '3'},
  {year: '2018', minimum: '3.55', maximum: '12.33', mean: '7.50', statusClass: 'moderate', status: '3'},
  {year: '2019', minimum: '3.70', maximum: '15.82', mean: '6.81', statusClass: 'moderate', status: '3'},
  {year: '2020', minimum: '3.54', maximum: '17.46', mean: '6.48', statusClass: 'moderate', status: '3'},
  {year: '2021', minimum: '4.26', maximum: '18.14', mean: '6.85', statusClass: 'moderate', status: '3'},
  {year: '2022', minimum: '3.40', maximum: '15.90', mean: '7.32', statusClass: 'moderate', status: '3'}]);

const dataPM10 = ref([
  {year: '2013', minimum: '8.38', maximum: '20.83', mean: '13.67', statusClass: 'good', status: '2'},
  {year: '2014', minimum: '6.05', maximum: '16.31', mean: '10.44', statusClass: 'good', status: '2'},
  {year: '2015', minimum: '7.51', maximum: '20.41', mean: '13.02', statusClass: 'good', status: '2'},
  {year: '2016', minimum: '6.52', maximum: '19.82', mean: '12.00', statusClass: 'good', status: '2'},
  {year: '2017', minimum: '6.40', maximum: '17.86', mean: '10.73',statusClass: 'good', status: '2'},
  {year: '2018', minimum: '4.91', maximum: '16.15', mean: '9.87', statusClass: 'good', status: '2'},
  {year: '2019', minimum: '5.11', maximum: '18.90', mean: '9.49', statusClass: 'good', status: '2'},
  {year: '2020', minimum: '4.87', maximum: '20.27', mean: '8.63', statusClass: 'good', status: '2'},
  {year: '2021', minimum: '6.32', maximum: '23.36', mean: '9.97', statusClass: 'good', status: '2'},
  {year: '2022', minimum: '4.40', maximum: '20.88', mean: '10.52', statusClass: 'good', status: '2'}]);

  
const tableData = computed(() => {
  if (selectedPollutant.value === 'no2') return dataNO2.value
  if (selectedPollutant.value === 'pm25') return dataPM25.value
  if (selectedPollutant.value === 'pm10') return dataPM10.value
  return []});

const tableDataClass = ref([
  {Class: '1', IPCC: '1 - Agriculture', Legend: '10, 11, 12, 20, 30, 40'},
  {Class: '2', IPCC: '2 - Forest', Legend: '50, 60, 61, 62, 70, 71, 72, 80, 81, 82, 90, 100'},
  {Class: '3', IPCC: '3 - Grassland', Legend: '110'},
  {Class: '4', IPCC: '6 - Shrubland', Legend: '120, 121, 122'},
  {Class: '5', IPCC: '3 - Grassland', Legend: '130'},
  {Class: '6', IPCC: '6 - Sparse vegetation', Legend: '140, 150, 151, 152, 153'},
  {Class: '7', IPCC: '2 - Forest', Legend: '160, 170'},
  {Class: '8', IPCC: '4 - Wetland', Legend: '180'},
  {Class: '9', IPCC: '5 - Settlement', Legend: '190'},
  {Class: '10', IPCC: '6 - Base area', Legend: '200, 201, 202, 210, 220'}]);


</script>




<style scoped>
.result-page {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

.content-section {
  padding: 4rem 6rem;
  flex-grow: 1;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.filter-section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: bold;
  color: #555;
}

.filter-group select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.results-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.chart-container {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chart-container h3 {
  margin-top: 0;
  color: #333;
  margin-bottom: 1rem;
}

.chart-placeholder {
  height: 300px;
  border: 1px dashed #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-mock {
  width: 100%;
  height: 80%;
  position: relative;
}

.chart-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff9a9e 0%, #3a4db5 100%);
  animation: pulse 2s infinite;
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

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

.chart-labels {
  position: absolute;
  bottom: -25px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.8rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.stat-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon.average {
  background-color: #e3f2fd;
}

.stat-icon.maximum {
  background-color: #ffebee;
}

.stat-icon.days {
  background-color: #e8f5e9;
}

.stat-icon.aqi {
  background-color: #fff8e1;
}

.stat-content {
  flex: 1;
}

.stat-title {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.stat-value {
  margin: 0.3rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.stat-change {
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}

.stat-change.positive {
  color: #4caf50;
}

.stat-change.negative {
  color: #f44336;
}

.stat-change.neutral {
  color: #ff9800;
}

.trend-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 5px;
}

.positive .trend-arrow {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #4caf50;
}

.negative .trend-arrow {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #f44336;
}

.table-container {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

.table-container h3 {
  margin-top: 0;
  color: #333;
  margin-bottom: 1rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 0.4rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.data-table th {
  background-color: #f9f9f9;
  font-weight: bold;
  color: #555;
}

.data-table tr:hover {
  background-color: #f5f5f5;
}

.status-badge {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.status-badge.good {
  background-color: #A9C6EE;
  color: #5B94DF;
}

.status-badge.moderate {
  background-color: #F4C990;
  color: #EB9D35;
}

.status-badge.unhealthy {
  background-color: #ffebee;
  color: #c62828;
}

@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .filter-section {
    flex-direction: column;
    align-items: stretch;
  }
}

.image-row {
  max-width: 400px;
  margin: 1rem;
  display: inline-block;
  justify-content: center;
  align-items: center;
  gap: 2rem; /* espacio entre imágenes */
  flex-wrap: wrap; /* por si en pantallas pequeñas se apilan */
  margin-bottom: 2rem;
}

.image-rowrow {
  max-width: 700px;
  margin: 1rem;
  display: inline-block;
  justify-content: center;
  align-items: center;
  gap: 2rem; /* espacio entre imágenes */
  flex-wrap: wrap; /* por si en pantallas pequeñas se apilan */
  margin-bottom: 2rem;
}
.section-title {
  @apply text-xl font-semibold mb-4;
}

.subsection-title {
  @apply text-lg font-medium mb-2;
}
</style>