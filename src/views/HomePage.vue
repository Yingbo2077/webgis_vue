<template>
  <div class="home-page">
    <AppHeader />

    <div class="hero-section">
      <div class="carousel">
        <div class="carousel-container">
          <div 
            v-for="(image, index) in carouselImages" 
            :key="index" 
            class="carousel-slide" 
            :class="{ active: currentSlide === index }"
            :style="{ backgroundImage: `url(${image})` }"
          ></div>
        </div>
        
        <div class="carousel-navigation">
          <button class="nav-button prev" @click="prevSlide">&#10094;</button>
          <div class="carousel-dots">
            <span 
              v-for="(image, index) in carouselImages" 
              :key="index" 
              class="dot" 
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"
            ></span>
          </div>
          <button class="nav-button next" @click="nextSlide">&#10095;</button>
        </div>
      </div>
      
      
      <div class="hero-content">
        <div class="content-container">
          <h1>Air quality in Switzerland</h1>
          <p>Our WebGIS project focuses on air quality in Switzerland, analyzing trends of pollutants like NO₂ and PMs from 2013 to 2022. Using open data and tools like QGIS and GeoServer, we explored their relationship with land cover and population exposure. Results are presented through an interactive WebGIS and website highlighting health guideline exceedances.</p>
        </div>
      </div>

      <div class="hero-main-title">
        <p class="text-7xl font-bold tracking-wide">
          <span class="font-normal">-</span>
             SWITZERLAND
          <span class="font-normal">-</span>
        </p>        
        <p class="text-2xl font-bold tracking-wide ml-2">Group 17</p>
      </div>
    </div>

    <!-- Combined Sections Container with shared background -->
    <div class="relative">
      <!-- Background Image -->
      <div 
        class="absolute inset-0 w-full h-full" 
        :style="{
          backgroundImage: `url(${switzerland2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: '0.2'
        }"
      ></div>

      <!-- Core Modules Section -->
      <div class="relative py-32 px-24 h-[730px] bg-transparent ">
        <div class="flex flex-row justify-between items-center">
          <!-- Text Content -->
          <div class="w-1/3  mr-8 backdrop-blur-sm bg-white/30 p-8 rounded-lg">
            <h2 class="text-4xl font-serif font-bold mb-4">Explore Our 
              <br/>Website</h2>
            <p class="text-gray-600 mb-8">
              Explore the key components of our project. Each module offers a unique perspective on our air quality analysis, from the development process to the final interactive map.
            </p>
            <a href="#" class="inline-block bg-white/50 text-gray-800 font-bold py-2 px-6 border border-gray-300 rounded-md hover:bg-white/70 transition-colors">
              SEE MORE
            </a>
          </div>

          <!-- Scrollable Cards -->
          <div class="w-2/3">
            <div class="flex overflow-x-auto space-x-8 pt-3 pb-4 pl-4">
              <!-- Card 1: Developers -->
              <router-link to="/developers" :class="cardClasses">
                <div :class="cardImageClasses" :style="{ backgroundImage: `url(${developerBg})` }"></div>
                <div :class="cardOverlayClasses"></div>
                <div :class="cardTextClasses">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm pb-4">
                    <p class="underline pb-1 text-base">Meet the people behind the platform.</p>
                    <p class="text-sm">This page showcases each member's role, technical expertise, and contact information.</p>
                  </div>
                  <p class="font-bold text-xl pb-8">Developers</p>
                </div>
              </router-link>

              <!-- Card 2: Workflow -->
              <router-link to="/workflow" :class="cardClasses">
                <div :class="cardImageClasses" :style="{ backgroundImage: `url(${workflowBg})` }"></div>
                <div :class="cardOverlayClasses"></div>
                <div :class="cardTextClasses">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300  pb-4">
                    <p class="underline pb-1 text-base">Explore our development journey.</p>
                    <p class="text-sm">Discover the methodologies, tools, and processes we used to create this platform.</p>
                  </div>
                  <p class="font-bold text-xl pb-8">Workflow</p>
                </div>
              </router-link>

              <!-- Card 3: Results -->
              <router-link to="/results" :class="cardClasses">
                <div :class="cardImageClasses" :style="{ backgroundImage: `url(${resultBg})` }"></div>
                <div :class="cardOverlayClasses"></div>
                <div :class="cardTextClasses">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm pb-4">
                    <p class="underline pb-1 text-base">Explore our findings.</p>
                    <p class="text-sm">View comprehensive analysis and insights from our air quality research in Switzerland.</p>
                  </div>
                  <p class="font-bold text-xl pb-8">Results</p>
                </div>
              </router-link>

              <!-- Card 4: WebGIS -->
              <router-link to="/webgis" :class="cardClasses">
                <div :class="cardImageClasses" :style="{ backgroundImage: `url(${webgisBg})` }"></div>
                <div :class="cardOverlayClasses"></div>
                <div :class="cardTextClasses">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm pb-4">
                    <p class="underline pb-1 text-base">Interactive mapping platform.</p>
                    <p class="text-sm">Explore our interactive WebGIS platform for detailed air quality visualization.</p>
                  </div>
                  <p class="font-bold text-xl pb-8 ">WebGIS</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Findings Section -->
      <div class="relative flex items-center justify-center px-32 pt-8 pb-16 mb-16 bg-transparent">
        <div class="flex flex-col items-center justify-center h-full  ">
          <!-- Text Content -->
          <div class="backdrop-blur-sm bg-white/50 p-12 rounded-lg w-[1200px] max-w-[90vw] mx-auto">            <div class="text-center">
              <p class="text-[#90a955] text-lg mb-4">KEY FINDINGS</p>
              <h2 class="text-5xl font-serif mb-8">
                <span class="italic">What We Discovered</span></h2>
              
              <!-- Decorative Line -->
              <div class="flex items-center justify-center gap-4 mb-8">
                <div class="h-[1px] w-48 bg-gray-300"></div>
                <div class="w-2 h-2 rounded-full bg-gray-400"></div>
                <div class="h-[1px] w-64 bg-gray-300"></div>
              </div>

              <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                Through comprehensive analysis of air quality data across Switzerland from 2013 to 2022, we've uncovered significant patterns and trends in pollutant concentrations and their impact on public health.
              </p>
            <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bivariate maps show that regions like Zürich and Basel combine higher pollution and population levels, making them key zones of concern. In contrast, alpine and southern regions face much lower exposure.
            </p>
            <ul class="list-disc list-inside text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed space-y-2">
              <li><strong>PM2.5:</strong> Over 96% of the population is exposed to low or moderate concentrations, with minimal high-level exposure.</li>
              <li><strong>NO₂:</strong> Exposure is split between low and medium levels, suggesting wider urban impact.</li>
              <li><strong>PM10:</strong> Exposure is overwhelmingly low, indicating relatively minor risk from this pollutant.</li>
            </ul>
              <p class="text-gray-600 max-w-2xl mx-auto mb-4">
                Temporal Trends (2013–2022): All three pollutants show a gradual decrease in both maximum and average concentrations, especially NO₂, likely reflecting improved air quality measures.
              </p>
            <p class="text-gray-600 max-w-2xl mx-auto ">
              Explore our detailed findings through interactive visualizations and comprehensive reports. Our analysis provides valuable insights for policymakers, researchers, and citizens interested in understanding and improving air quality in Switzerland.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />

    
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

// Import all images
import switzerland1 from '@/assets/瑞士1.jpg';
import switzerland2 from '@/assets/瑞士2.jpg';
import switzerland3 from '@/assets/瑞士3.jpg';
import switzerland4 from '@/assets/瑞士4.jpg';
// Import card background images
import developerBg from '@/assets/developer.jpg';
import workflowBg from '@/assets/workflow.jpg';
import resultBg from '@/assets/result.jpg';
import webgisBg from '@/assets/webgis.jpg';

// Reusable classes for cards
const cardClasses = 'group relative flex-shrink-0 w-96 h-[450px] bg-gray-300 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300';
const cardImageClasses = 'absolute inset-0 bg-cover bg-center pointer-events-none will-change-transform';
const cardOverlayClasses = 'absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 pointer-events-none will-change-transform';
const cardTextClasses = 'absolute bottom-0 left-0 p-6 text-white z-10';

const carouselImages = [
  switzerland1,
  switzerland2,
  switzerland3,
  switzerland4
];

const currentSlide = ref(0);
let slideInterval = null;

// Function to move to next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
};

// Function to move to previous slide
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length;
};

// Function to go to a specific slide
const goToSlide = (index) => {
  currentSlide.value = index;
};

// Setup on component mount
onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Clean up on component unmount
onBeforeUnmount(() => {
  clearInterval(slideInterval);
});
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

.hero-section {
  height: 850px; 
  position: relative;
  overflow: hidden;
}

.carousel {
  width: 100%;
  height: 100%;
}

.carousel-container {
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.hero-content {
  position: absolute;
  bottom: 20%;
  left: 8%;
  z-index: 2;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 15px;
  width: 40%;
  max-width: 600px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.content-container h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.content-container p {
  font-size: 1rem;
  line-height: 1.6;
}

.carousel-navigation {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 5;
}

.nav-button {
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.carousel-dots {
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: white;
}

.hero-main-title {
  position: absolute;
  bottom: 30%;
  right: 10%;
  color: white;
  z-index: 2;
  text-align: left;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

</style>



