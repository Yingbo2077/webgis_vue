// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import WebgisPage from '@/views/WebgisPage.vue'
import DeveloperPage from '@/views/DeveloperPage.vue'
import WorkflowPage from '@/views/WorkflowPage.vue'
import ResultsPage from '@/views/ResultPage.vue'
import AirPollutantPage from '@/views/AirPollutantPage.vue'
import LandCoverPage from '@/views/LandCoverPage.vue'
import PopulationPage from '@/views/PopulationPage.vue'

const routes = [
  { path: '/',component: HomePage },
  { path: '/developers', component:DeveloperPage },
  { path: '/workflow', component:WorkflowPage },
  { path: '/results', component: ResultsPage },
  { path: '/webgis', component: WebgisPage},
  { path: '/workflow/air-pollutant', component: AirPollutantPage },
  { path: '/workflow/land-cover', component: LandCoverPage },
  { path: '/workflow/population', component: PopulationPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
