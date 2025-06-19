<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-section about">
        <h3>About WebGIS</h3>
        <p>A comprehensive platform for monitoring and analyzing air quality in Switzerland using advanced geospatial technologies and real-time data visualization.</p>
        <div class="social-links">
          <a href="#" class="social-link" title="Instagram">
            <i class="social-icon instagram"></i>
          </a>
        </div>
      </div>
      
      <div class="footer-section resources">
        <h3>Resources</h3>
        <ul>
          <li><a href="https://www.bafu.admin.ch/air" target="_blank">Swiss Air Quality Data</a></li>
          <li><a href="https://openlayers.org/" target="_blank">OpenLayers Documentation</a></li>
          <li><a href="https://vuejs.org/" target="_blank">Vue.js Framework</a></li>
          <li><a href="https://www.who.int/health-topics/air-pollution" target="_blank">WHO Guidelines</a></li>
        </ul>
      </div>
      
      <div class="footer-section contact-section">
        <h3>Get in Touch</h3>
        <p>Have questions about our project or want to collaborate?</p>
        <router-link to="/developers" class="contact-button">
          <div class="question-mark">?</div>
          <span class="contact-text">Meet Our Team</span>
        </router-link>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Air Quality WebGIS Project. All rights reserved.</p>
      <p>Built with OpenLayers, Vue.js & Modern Web Technologies</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #1a2a38 50%, #34495e 100%);
  color: #f8f9fa;
  padding: 0;
  font-family: Arial, sans-serif;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.app-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #ff9a9e, transparent);
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
  padding: 0 1rem;
  text-align: center;
}

.footer-section h3 {
  color: #ff9a9e;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 0.8rem;
  display: inline-block;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #ff9a9e, #3a4db5);
  transform: scaleX(0);
  animation: titleUnderline 1s ease-in-out forwards;
}

@keyframes titleUnderline {
  to {
    transform: scaleX(1);
  }
}

.about p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9a9e, #3a4db5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 5px 15px rgba(255, 154, 158, 0.4);
}

.social-icon {
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
}

.social-icon.instagram {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E");
}

.resources ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  padding-left: 0;
}

.resources li {
  margin-bottom: 0.8rem;
  padding-left: 0;
}

.resources a {
  color: #f8f9fa;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 0;
}

.resources a::before {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background: linear-gradient(to right, #ff9a9e, #3a4db5);
  transition: width 0.3s ease;
}

.resources a:hover {
  color: #ff9a9e;
  transform: translateX(5px);
}

.resources a:hover::before {
  width: 100%;
}

.contact-section p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: left;
}

.contact-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 0 auto;
}

.question-mark {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9a9e, #3a4db5);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.question-mark::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.contact-button:hover .question-mark::before {
  left: 100%;
}

.contact-text {
  color: #f8f9fa;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.contact-button:hover .question-mark {
  transform: scale(1.2) rotate(10deg);
  box-shadow: 0 6px 20px rgba(255, 154, 158, 0.4);
}

.contact-button:hover .contact-text {
  color: #ff9a9e;
  opacity: 1;
}

.footer-bottom {
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
  position: relative;
}

.footer-bottom::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #ff9a9e, transparent);
}

.footer-bottom p {
  margin: 0.3rem 0;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: 2rem;
  }
  
  .about p,
  .resources ul,
  .contact-section p {
    text-align: center;
  }
}
</style> 