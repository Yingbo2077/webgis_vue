<template>
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
</template>

<script setup>
</script>

<style scoped>
.navbar {
  height: 64px;
  padding: 0 2rem; 
  display: flex;
  align-items: center; 
  justify-content: center;
  background: linear-gradient(to right, #ff9a9e, #3a4db5);
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
</style> 