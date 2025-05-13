<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/img/logo2.png'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', link: '#' },
  { name: 'Services', link: '#' },
  { name: 'Team', link: '#' },
  { name: 'Projects', link: '#' },
  { name: 'Testimonials', link: '#' },
  { name: 'Contact', link: '#' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{
      'bg-white shadow-md': scrolled,
      'bg-transparent': !scrolled,
    }"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="logo flex items-center">
        <img :src="logo" alt="" class="w-[200px] mr-2" />
        <!-- <h1
          class="text-2xl font-bold"
          :class="{ 'text-blue-500': scrolled, 'text-white': !scrolled }"
        >
          <span class="font-extrabold">nolsatu</span>Xpert
        </h1> -->
      </div>

      <!-- Navigation (Desktop) -->
      <div class="hidden md:flex items-center space-x-8">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.link"
          class="nav-link text-sm font-medium cursor-pointer whitespace-nowrap"
          :class="{
            'text-gray-800 hover:text-blue-500': scrolled,
            'bg-primary py-2 rounded-full text-white hover:text-gray-200': !scrolled,
          }"
        >
          {{ item.name }}
        </a>
        <button
          class="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
        >
          Hire Our Team
        </button>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden cursor-pointer" @click="toggleMobileMenu">
        <i
          class="fas fa-bars text-2xl"
          :class="{ 'text-gray-800': scrolled, 'text-white': !scrolled }"
        ></i>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg absolute w-full">
      <div class="container mx-auto px-6 py-4">
        <div class="flex flex-col space-y-4">
          <a
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.link"
            class="text-gray-800 hover:text-primary text-sm font-medium cursor-pointer"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
          <button
            class="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
          >
            Hire Our Team
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
/* Tambahkan style tambahan jika diperlukan */
</style>
