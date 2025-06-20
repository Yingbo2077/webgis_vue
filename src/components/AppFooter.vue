<template>
  <footer class="text-gray-800 bg-gradient-to-r from-[#dde5b4] via-[#adc178] to-[#828b6a]">
    <!-- Main Footer Content -->
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Section -->
        <div>
          <h6 class="uppercase font-bold mb-4 border-b border-black border-opacity-30 pb-2">About</h6>
          <p class="text-sm">
            An interactive platform to analyze air quality trends, land use and population exposure in Europe using open data and WebGIS.
          </p>
           <p class="mt-2 text-sm">Use case: Switzerland</p>
        </div>

        <!-- Data Sources Section -->
        <div>
          <h6 class="uppercase font-bold mb-4 border-b border-black border-opacity-30 pb-2">Data Sources</h6>
          <ul class="text-sm">
            <li class="mb-2"><a href="#!" class="hover:underline">CAMS Reanalysis 2013-2022</a></li>
            <li class="mb-2"><a href="#!" class="hover:underline">ESA CCI Land Cover 2022</a></li>
            <li class="mb-2"><a href="#!" class="hover:underline">WorldPop Population 2020</a></li>
            <li><a href="#!" class="hover:underline">WHO AQ Guidelines</a></li>
          </ul>
        </div>

        <!-- Tools Used Section -->
        <div>
          <h6 class="uppercase font-bold mb-4 border-b border-black border-opacity-30 pb-2">Tools Used</h6>
          <ul class="text-sm">
            <li class="mb-2"><a href="#!" class="hover:underline">QGIS, GRASS, SAGA</a></li>
            <li class="mb-2"><a href="#!" class="hover:underline">GeoServer, OpenLayers</a></li>
            <li><a href="#!" class="hover:underline">Vue.js, Tailwind CSS</a></li>
          </ul>
        </div>

        <!-- Team Section -->
        <div>
          <h6 class="uppercase font-bold mb-4 border-b border-black border-opacity-30 pb-2">Team</h6>
          <p class="text-sm mb-4">
            Meet the team behind this project and explore each member's role.
          </p>
          <router-link to="/developers" class="inline-block px-4 py-2 text-sm font-semibold text-gray-800 bg-white bg-opacity-40 rounded-lg shadow-md hover:bg-opacity-60 transition-colors">
            🔗 Meet Our Team
          </router-link>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center p-4 bg-black bg-opacity-10 text-xs">
      © 2025 Air Quality WebGIS Project — For educational use only. Built by students of GIS Lab @PoliMI
    </div>
  </footer>
</template>

<script setup>
// No script needed for this static component
</script>

<style scoped>
/* All styling is now done via Tailwind CSS classes in the template */
</style> 