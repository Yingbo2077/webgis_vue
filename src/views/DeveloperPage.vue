<template>
  <div class="developer-page">
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

    <main class="content-section">
      <h1 class="page-title">Development Team</h1>
      
      <div class="team-container">
        <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
          <div class="member-avatar">
            <img :src="member.avatar" :alt="member.name" />
          </div>
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
          <p class="member-description">{{ member.description }}</p>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppFooter from '@/components/AppFooter.vue';

const teamMembers = ref([
  {
    name: 'John Smith',
    role: 'GIS Developer',
    description: 'Responsible for core WebGIS functionality development, focusing on spatial data processing and map interaction features.',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: 'Emily Johnson',
    role: 'Frontend Developer',
    description: 'Responsible for user interface design and implementation, ensuring a good user experience for the WebGIS application.',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    name: 'Michael Chen',
    role: 'Data Scientist',
    description: 'Responsible for air quality data analysis and visualization, developing prediction models.',
    avatar: 'https://via.placeholder.com/150'
  }
]);
</script>

<style scoped>
.developer-page {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(to right, #ff9a9e, #3a4db5);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  z-index: 2;
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

.content-section {
  padding: 4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  position: relative;
  display: inline-block;
}

.page-title::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 3px;
  background: linear-gradient(to right, #ff9a9e, #3a4db5);
  bottom: -10px;
  left: 25%;
  transform: scaleX(0);
  animation: titleUnderline 1.5s ease-in-out forwards;
}

@keyframes titleUnderline {
  to {
    transform: scaleX(1);
  }
}

.team-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
}

.team-member {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s forwards;
  animation-delay: calc(0.2s * var(--index));
}

.team-member:nth-child(1) {
  --index: 1;
}

.team-member:nth-child(2) {
  --index: 2;
}

.team-member:nth-child(3) {
  --index: 3;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-member:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.member-avatar {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #ff9a9e, #3a4db5) border-box;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(58, 77, 181, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(58, 77, 181, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(58, 77, 181, 0);
  }
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-member:hover .member-avatar img {
  transform: scale(1.1);
}

.member-name {
  margin: 0.5rem 0;
  color: #333;
  font-size: 1.4rem;
}

.member-role {
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.member-role::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: linear-gradient(to right, #ff9a9e, #3a4db5);
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.member-description {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: 1.5rem;
}

@media (max-width: 992px) {
  .team-container {
    flex-direction: column;
    align-items: center;
  }
  
  .team-member {
    width: 80%;
    max-width: 350px;
  }
}
</style>
