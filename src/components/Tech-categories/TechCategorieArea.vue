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
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Vue', icon: 'fab fa-vuejs' },
  { name: 'Angular', icon: 'fab fa-angular' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'PHP', icon: 'fab fa-php' },
  { name: 'Laravel', icon: 'fab fa-laravel' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'Sass', icon: 'fab fa-sass' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Docker', icon: 'fab fa-docker' },
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
        >
          <SwiperSlide
            v-for="(tech, index) in technologies"
            :key="index"
            class="flex flex-col items-center"
          >
            <div
              class="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-24 w-24 mb-4"
            >
              <i :class="tech.icon + ' text-3xl text-gray-700'"></i>
            </div>
            <p class="text-sm text-center font-medium">{{ tech.name }}</p>
          </SwiperSlide>
        </swiper>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(category, index) in techCategories"
          :key="index"
          class="bg-white rounded-lg shadow-md p-6"
        >
          <h3 class="text-lg font-bold mb-4 text-primary">{{ category.name }}</h3>
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
