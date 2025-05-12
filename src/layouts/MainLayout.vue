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

<style>
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html {
  scroll-behavior: smooth;
}
</style>
