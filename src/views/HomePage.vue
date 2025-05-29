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
      <h1>Air quality in Switzerland</h1>
    </main>
  </div>
</template>

<style scoped>
.home-page {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.navbar {
  background-color:rgb(60, 41, 67);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  z-index: 2; /* ✅ 确保导航条在背景图之上 */
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
  height: calc(100vh - 80px);
  background-image: url('@/assets/bg.jpg'); /* 背景图放在 public/bg.jpg */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-section h1 {
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}
</style>



