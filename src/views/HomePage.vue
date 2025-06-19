<template>
  <div class="home-page">
    <header class="navbar">
      <nav>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/developers">Developers</router-link></li>
          <li><router-link to="/workflow">Workflow</router-link></li>
          <li><router-link to="/results">Results</router-link></li>
          <li><router-link to="/webgis">WebGIS</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="hero-section">
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
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
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
  resetSlideInterval();
};

// Function to move to previous slide
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length;
  resetSlideInterval();
};

// Function to go to a specific slide
const goToSlide = (index) => {
  currentSlide.value = index;
  resetSlideInterval();
};

// Reset the slideshow interval
const resetSlideInterval = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  startSlideshow();
};

// Start automatic slideshow
const startSlideshow = () => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
  }, 5000); // Change slide every 5 seconds
};

// Setup on component mount
onMounted(() => {
  startSlideshow();
});

// Clean up on component unmount
onBeforeUnmount(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>

<style scoped>
.home-page {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(to right, #ff9a9e, #3a4db5);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  z-index: 2;
  flex-shrink: 0; /* Prevent navbar from shrinking */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}

.hero-section {
  height: 80vh; /* Use viewport height directly */
  min-height: 700px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0; /* Prevent hero section from shrinking */
}

.carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
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
  transform: scale(1.05); /* Slightly scale up the image to avoid empty edges */
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-navigation {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 5;
}

.nav-button {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

.carousel-dots {
  display: flex;
  gap: 15px;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dot.active {
  background-color: white;
  transform: scale(1.2);
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  box-sizing: border-box;
}

.content-container {
  max-width: 695px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
}

.hero-content h1 {
  color: white;
  font-size: 3.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  margin-top: 0;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-align: left;
}

.hero-content p {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
}

@media (max-width: 768px) {
  .hero-content {
    padding-left: 3%;
    padding-right: 5%;
  }
  
  .content-container {
    max-width: 90%;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}
</style>



