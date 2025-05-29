// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import WebgisPage from '@/views/WebgisPage.vue'
import DeveloperPage from '@/views/DeveloperPage.vue'
import WorkflowPage from '@/views/WorkflowPage.vue'
import ResultsPage from '@/views/ResultPage.vue'

const routes = [
  { path: '/',component: HomePage },
  { path: '/developers', component:DeveloperPage },
  { path: '/workflow', component:WorkflowPage },
  { path: '/results', component: ResultsPage },
  { path: '/webgis', component: WebgisPage}
]




export default createRouter({
  history: createWebHistory(),
  routes
})
