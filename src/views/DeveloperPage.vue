<template>
  <div class="developer-page" :class="getSelectedClass()">
    <AppHeader />

    <main class="content-section">
      <h1 class="page-title">Development Team</h1>
      
      <div class="team-container">
        <div 
          class="team-member" 
          v-for="(member, index) in teamMembers" 
          :key="index"
          :class="{ 'selected': selectedIndex === index }"
          @click="handleMemberClick(index, member)"
        >
          <div class="member-avatar">
            <img :src="member.avatar" :alt="member.name" />
            <div class="avatar-overlay">
              <div class="view-details">View Details</div>
            </div>
          </div>
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
          <p class="member-description">{{ member.description }}</p>
          <div class="member-skills-preview">
            <span class="skill-preview" v-for="skill in member.skills.slice(0, 2)" :key="skill">
              {{ skill }}
            </span>
            <span class="skill-more" v-if="member.skills.length > 2">
              +{{ member.skills.length - 2 }} more
            </span>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal for detailed view -->
    <div v-if="selectedMember" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-body">
          <div class="modal-avatar">
            <img :src="selectedMember.avatar" :alt="selectedMember.name" />
            <div class="modal-avatar-glow"></div>
          </div>
          <div class="modal-info">
            <h2 class="modal-name">{{ selectedMember.name }}</h2>
            <h3 class="modal-role">{{ selectedMember.role }}</h3>
            <p class="modal-description">{{ selectedMember.description }}</p>
            <div class="modal-skills">
              <h4>Skills & Expertise</h4>
              <div class="skills-tags">
                <span class="skill-tag" v-for="skill in selectedMember.skills" :key="skill">{{ skill }}</span>
              </div>
            </div>
            <div class="modal-contact">
              <h4>Contact</h4>
              <p><a :href="'mailto:' + selectedMember.email" class="email-link">{{ selectedMember.email }}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

const selectedMember = ref(null);
const selectedIndex = ref(1); // Start with middle person (Emily Johnson)

const teamMembers = ref([
  {
    name: 'Esteban Ceccarelli',
    description: 'Responsible for data analysis for results.',
    avatar: new URL('@/assets/cecca.jpg', import.meta.url).href,
    skills: ['ArcGIS', 'QGIS', 'Python', 'JavaScript', 'GitHub'],
    email: 'esteban.ceccarelli@mail.polimi.it'
  },
  {
    name: 'Sun Yingbo',
    description: 'Responsible for air quality data analysis and webgis visualization',
    avatar: new URL('@/assets/syb.jpg', import.meta.url).href,
    skills: ['Python', 'JavaScript', 'vue.js', 'QGIS'],
    email: 'yingbo.sun@mail.polimi.it'
  },
  {
    name: 'Cen Yiyi',
    description: 'Responsible for air quality data analysis for workflow',
    avatar: new URL('@/assets/cen yiyi.jpg', import.meta.url).href,
    skills: ['Python', 'CSS', 'HTML', 'JavaScript'],
    email: 'yiyi.cen@mail.polimi.it'
  }
  
]);

const getSelectedClass = () => {
  if (selectedIndex.value === 0) return 'selected-john';
  if (selectedIndex.value === 1) return 'selected-emily';
  if (selectedIndex.value === 2) return 'selected-sun';
  return 'selected-emily'; // default
};

const handleMemberClick = (index, member) => {
  // If already selected, open modal
  if (selectedIndex.value === index) {
    openModal(member);
    return;
  }
  
  // Update selected index to rotate the triangle
  selectedIndex.value = index;
};

const openModal = (member) => {
  selectedMember.value = member;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedMember.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.developer-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.content-section {
  flex-grow: 1;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.page-title::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 3px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
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
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;
  position: relative;
  height: 600px;
  perspective: 1000px;
}

.team-member {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  width: 350px;
  height: 480px;
  text-align: center;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: absolute;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -240px;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
  animation-delay: calc(0.2s * var(--member-index));
}

.team-member:nth-child(1) {
  --member-index: 1;
}

.team-member:nth-child(2) {
  --member-index: 2;
}

.team-member:nth-child(3) {
  --member-index: 3;
}

/* Dynamic positioning based on selected index */
/* When Emily (index 1) is selected - default state */
.team-member:nth-child(1):not(.manual-transform) {
  transform: translate(-300px, 50px) scale(0.8);
  z-index: 1;
  opacity: 0.7;
}

.team-member:nth-child(2):not(.manual-transform) {
  transform: translate(0, -50px) scale(1.05);
  z-index: 3;
  opacity: 1;
}

.team-member:nth-child(3):not(.manual-transform) {
  transform: translate(300px, 50px) scale(0.8);
  z-index: 1;
  opacity: 0.7;
}

/* Triangle rotation states */
/* When John (index 0) is selected */
.developer-page.selected-john .team-member:nth-child(1) {
  transform: translate(0, -50px) scale(1.05) !important;
  z-index: 3 !important;
  opacity: 1 !important;
}

.developer-page.selected-john .team-member:nth-child(2) {
  transform: translate(300px, 50px) scale(0.8) !important;
  z-index: 1 !important;
  opacity: 0.7 !important;
}

.developer-page.selected-john .team-member:nth-child(3) {
  transform: translate(-300px, 50px) scale(0.8) !important;
  z-index: 1 !important;
  opacity: 0.7 !important;
}

/* When Emily (index 1) is selected - default */
.developer-page.selected-emily .team-member:nth-child(1) {
  transform: translate(-300px, 50px) scale(0.8) !important;
  z-index: 1 !important;
  opacity: 0.7 !important;
}

.developer-page.selected-emily .team-member:nth-child(2) {
  transform: translate(0, -50px) scale(1.05) !important;
  z-index: 3 !important;
  opacity: 1 !important;
}

.developer-page.selected-emily .team-member:nth-child(3) {
  transform: translate(300px, 50px) scale(0.8) !important;
  z-index: 1 !important;
  opacity: 0.7 !important;
}

/* When Sun (index 2) is selected */
.developer-page.selected-sun .team-member:nth-child(1) {
  transform: translate(300px, 50px) scale(0.8) !important;
  z-index: 1 !important;
  opacity: 0.7 !important;
}

.developer-page.selected-sun .team-member:nth-child(2) {
  transform: translate(-300px, 50px) scale(0.8) !important;
  z-index: 1 !important;
  opacity: 0.7 !important;
}

.developer-page.selected-sun .team-member:nth-child(3) {
  transform: translate(0, -50px) scale(1.05) !important;
  z-index: 3 !important;
  opacity: 1 !important;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
  }
}

.team-member::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.8s ease;
}

.team-member:hover::before {
  left: 100%;
}

.team-member.selected {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.team-member:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.member-avatar {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
  position: relative;
  transition: all 0.5s ease;
}

.team-member.selected .member-avatar {
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
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

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-member:hover .avatar-overlay {
  opacity: 1;
}

.view-details {
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.member-name {
  margin: 0.5rem 0;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.member-role {
  color: rgba(255, 255, 255, 0.8);
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
  background: rgba(255, 255, 255, 0.5);
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.member-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-skills-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill-preview {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-more {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-style: italic;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(-50px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 25px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.2);
  color: #333;
  transform: scale(1.1);
}

.modal-body {
  padding: 3rem;
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.modal-avatar {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #667eea, #764ba2) border-box;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;
}

.modal-avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0.3;
  filter: blur(20px);
  z-index: -1;
}

.modal-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  flex: 1;
}

.modal-name {
  color: #333;
  font-size: 2.2rem;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-role {
  color: #666;
  font-size: 1.3rem;
  margin: 0 0 1.5rem 0;
  font-style: italic;
}

.modal-description {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.modal-skills {
  margin-bottom: 2rem;
}

.modal-skills h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.modal-contact {
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid #667eea;
  backdrop-filter: blur(10px);
}

.modal-contact h4 {
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.modal-contact p {
  color: #666;
  margin: 0;
  font-size: 1rem;
}

.email-link {
  color: #667eea;
  text-decoration: underline;
  word-break: break-all;
  font-weight: 500;
  transition: color 0.2s;
}

.email-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .team-container {
    flex-direction: column;
    align-items: center;
    height: auto;
    perspective: none;
  }
  
  .team-member {
    position: relative;
    left: auto;
    top: auto;
    margin: 2rem auto;
    width: 90%;
    max-width: 400px;
    height: auto;
    min-height: 480px;
    transform: none !important;
    opacity: 1 !important;
    z-index: 1 !important;
  }
  
  .team-member.selected {
    transform: scale(1.05) !important;
  }
  
  .modal-body {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .modal-avatar {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  
  .modal-name {
    font-size: 1.8rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>
