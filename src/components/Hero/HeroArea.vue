<script setup></script>

<template>
  <section
    class="hero-section relative h-screen flex items-center bg-cover bg-center"
    style="
      background-image: url('https://readdy.ai/api/search-image?query=elegant%20modern%20software%20interface%20with%20sleek%20dark%20theme%20design%2C%20futuristic%203D%20geometric%20elements%2C%20subtle%20blue%20gradient%20accents%2C%20minimalist%20UI%20components%2C%20abstract%20technology%20visualization%2C%20premium%20render%20quality%20with%20depth%20and%20sophistication%2C%20clean%20professional%20aesthetic%20without%20people%20or%20charts%2C%208k%20quality&width=1440&height=800&seq=hero-bg-3&orientation=landscape');
    "
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-85"></div>

    <!-- Content -->
    <div class="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 text-white mb-12 md:mb-0">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
          <span class="font-extrabold">nolsatu</span>Xpert
        </h1>
        <p class="text-xl md:text-2xl font-light mb-8">Elite Development & Design Team</p>
        <p class="text-gray-300 mb-10 max-w-lg">
          We are a team of passionate developers and designers dedicated to creating exceptional
          digital experiences. Our expertise spans across web, mobile, and IoT solutions.
        </p>
        <button
          class="bg-blue-500 text-center text-white px-8 py-3 rounded text-lg font-medium hover:bg-primary-dark transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
        >
          Hire Our Team
          <FontAwesomeIcon icon="fas fa-arrow-right" class="ml-2" />
        </button>
      </div>
    </div>

    <!-- Particle JS Background -->
    <div id="particles-js" class="absolute inset-0 z-0"></div>
  </section>
</template>

<style></style>
