<script setup>
import { ref } from 'vue'
const services = ref([
  {
    title: 'Web Development',
    icon: 'fas fa-code',
    description:
      'We build responsive, scalable web applications using modern frameworks and technologies.',
    technologies: ['React', 'Vue', 'Angular', 'Node.js', 'Django', 'Laravel'],
  },
  {
    title: 'Mobile Development',
    icon: 'fas fa-mobile-alt',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    title: 'UI/UX Design',
    icon: 'fas fa-paint-brush',
    description:
      'User-centered design approach to create intuitive and engaging digital experiences.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping'],
  },
  {
    title: 'Backend Development',
    icon: 'fas fa-server',
    description: 'Robust backend systems with secure APIs and efficient database management.',
    technologies: ['Node.js', 'Python', 'PHP', 'Django', 'GoLang', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'IoT Solutions',
    icon: 'fas fa-microchip',
    description: 'Connected device solutions and embedded systems for various industries.',
    technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'Embedded C'],
  },
  {
    title: 'DevOps & Deployment',
    icon: 'fas fa-cloud',
    description: 'Continuous integration, deployment, and cloud infrastructure management.',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'CI/CD'],
  },
])
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Expertise & Services</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          We deliver comprehensive solutions across multiple domains, leveraging cutting-edge
          technologies to solve complex problems.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card h-full items-stretch bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl"
        >
          <div class="text-blue-500 text-4xl mb-6">
            <FontAwesomeIcon :icon="service.icon" />
          </div>
          <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6">{{ service.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, techIndex) in service.technologies"
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
