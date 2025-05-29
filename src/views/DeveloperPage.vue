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
      <!-- 空白区域，留给你后续开发 -->
    </main>
  </div>
</template>

<style scoped>
.developer-page {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.navbar {
  background-color: rgb(60, 41, 67);
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
  min-height: calc(100vh - 80px); /* 占满剩余空间 */
}
</style>
