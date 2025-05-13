<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

const swiperOptions = ref({
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
})

const techCategories = ref([
  {
    name: 'Frontend',
    items: ['React', 'Vue', 'Angular', 'HTML5', 'CSS3', 'Sass', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'PHP', 'Django', 'GoLang', 'Express', 'Laravel', 'FastAPI'],
  },
  {
    name: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
  },
  {
    name: 'IoT & Embedded',
    items: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'Embedded C', 'IoT Protocols'],
  },
])
const technologies = ref([
  { name: 'React', icon: ['fab', 'react'] },
  { name: 'Vue', icon: ['fab', 'vuejs'] },
  { name: 'Angular', icon: ['fab', 'angular'] },
  { name: 'Node.js', icon: ['fab', 'node-js'] },
  { name: 'Python', icon: ['fab', 'python'] },
  { name: 'PHP', icon: ['fab', 'php'] },
  { name: 'Laravel', icon: ['fab', 'laravel'] },
  { name: 'JavaScript', icon: ['fab', 'js'] },
  { name: 'HTML5', icon: ['fab', 'html5'] },
  { name: 'CSS3', icon: ['fab', 'css3-alt'] },
  { name: 'Sass', icon: ['fab', 'sass'] },
  { name: 'Git', icon: ['fab', 'git-alt'] },
  { name: 'AWS', icon: ['fab', 'aws'] },
  { name: 'Docker', icon: ['fab', 'docker'] },
])
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Our team is proficient in a wide range of technologies, frameworks, and tools to deliver
          the best solutions for your needs.
        </p>
      </div>
      <div class="mb-12">
        <swiper
          :modules="[Autoplay]"
          :autoplay="swiperOptions.autoplay"
          :slides-per-view="swiperOptions.slidesPerView"
          :loop="swiperOptions.loop"
          :space-between="swiperOptions.spaceBetween"
          :breakpoints="swiperOptions.breakpoints"
          space-between="20"
          class="my-swiper"
        >
          <SwiperSlide
            v-for="(tech, index) in technologies"
            :key="index"
            class="flex flex-col items-center justify-center text-center px-4 w-36"
          >
            <!-- Kotak putih -->
            <div
              class="bg-white rounded-lg shadow-md flex flex-col items-center justify-center h-24 w-24 mb-2"
            >
              <FontAwesomeIcon :icon="tech.icon" class="text-3xl text-gray-700 mb-1" />
              <span class="text-xs font-medium text-gray-800">{{ tech.name }}</span>
            </div>
          </SwiperSlide>
        </swiper>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(category, index) in techCategories"
          :key="index"
          class="bg-white rounded-lg shadow-md p-6"
        >
          <h3 class="text-lg font-bold mb-4 text-blue-500">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, techIndex) in category.items"
              :key="techIndex"
              class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
              >{{ tech }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
