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



