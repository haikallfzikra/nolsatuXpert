<script setup>
import HeaderArea from '@/components/Header/HeaderArea.vue'
import FooterArea from '@/components/Footer/FooterArea.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#F3F4F6]">
    <header>
      <HeaderArea />
    </header>
    <main>
      <div class="layout-container">
        <router-view />
      </div>
    </main>
    <footer>
      <FooterArea />
    </footer>
  </div>
</template>

<style></style>