<template>
  <div class="result-page">
    <AppHeader />

    <main class="content-section">
      <h1 class="page-title">Air Quality Analysis Results</h1>
      <div class="filter-section">
        
        <div class="filter-group">
          <label for="pollutant-select">Pollutant:</label>
          <select id="pollutant-select" v-model="selectedPollutant">
            <option v-for="pollutant in pollutants" :key="pollutant.value" :value="pollutant.value">
              {{ pollutant.label }}
            </option>
          </select>
        </div>
      </div>
      
      <div class="results-container">

        <div class="table-container">
          <h3>{{ selectedPollutantLabel }} Annual Concentration</h3>
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
          <h3>Reclassification schema according to ESA CCI Land Cover classifications system.</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>Class</th>
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
          <h3>Maximum and mean concentration value per year and contaminant:</h3>
            <img :src="Step6Max" alt="Step6Max" class="image-row"/>
            <img :src="Step6Mean" alt="Step6Mean" class="image-row"/>
        </div>
        
        <div class="stats-container">
          <div class="stat-card" v-for="(stat, index) in statsData" :key="index">
            <div class="stat-icon" :class="stat.type"></div>
            <div class="stat-content">
              <h4 class="stat-title">{{ stat.title }}</h4>
              <p class="stat-value">{{ stat.value }}</p>
              <p class="stat-change" :class="stat.trend">
                {{ stat.change }}
                <span class="trend-arrow"></span>
              </p>
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

// Sample statistics data
const statsData = ref([
  {
    title: 'Average Concentration',
    value: '18.3 µg/m³',
    change: '5.2% decrease from last week',
    trend: 'positive',
    type: 'average'
  },
  {
    title: 'Maximum Concentration',
    value: '42.7 µg/m³',
    change: '2.1% increase from last week',
    trend: 'negative',
    type: 'maximum'
  },
  {
    title: 'Exceedance Days',
    value: '3 days',
    change: '2 days less than last month',
    trend: 'positive',
    type: 'days'
  },
  {
    title: 'Air Quality Index',
    value: '65',
    change: 'Moderate',
    trend: 'neutral',
    type: 'aqi'
  }
]);

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
  padding: 4rem 2rem;
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
  gap: 2rem;
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
  padding: 0.8rem;
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
  max-width: 600px;
  margin: 1rem;
  display: inline-block;
  justify-content: center;
  align-items: center;
  gap: 2rem; /* espacio entre imágenes */
  flex-wrap: wrap; /* por si en pantallas pequeñas se apilan */
  margin-bottom: 2rem;
}
</style>