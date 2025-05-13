<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'E-Commerce Platform',
    description:
      'A comprehensive e-commerce solution with advanced search, payment integration, and inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image:
      'https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20on%20laptop%20screen%2C%20professional%20product%20display%20with%20clean%20minimal%20design%2C%20high%20quality%20render%20with%20soft%20lighting%20and%20clean%20background&width=600&height=400&seq=project-1&orientation=landscape',
  },
  {
    title: 'Healthcare Management System',
    description:
      'A secure platform for healthcare providers to manage patient records, appointments, and billing.',
    technologies: ['Vue', 'Django', 'PostgreSQL', 'Docker'],
    image:
      'https://readdy.ai/api/search-image?query=healthcare%20management%20dashboard%20interface%20on%20computer%20screen%2C%20medical%20data%20visualization%20with%20clean%20design%2C%20professional%20medical%20software%20UI%20with%20charts%20and%20patient%20data%2C%20high%20quality%20render&width=600&height=400&seq=project-2&orientation=landscape',
  },
  {
    title: 'Smart Home IoT Solution',
    description:
      'An integrated system for controlling and monitoring smart home devices through a mobile application.',
    technologies: ['React Native', 'Node.js', 'MQTT', 'ESP32'],
    image:
      'https://readdy.ai/api/search-image?query=smart%20home%20control%20app%20interface%20on%20smartphone%20with%20connected%20IoT%20devices%20in%20background%2C%20modern%20home%20automation%20system%20with%20clean%20UI%20design%2C%20high%20quality%20render%20with%20soft%20lighting&width=600&height=400&seq=project-3&orientation=landscape',
  },
  {
    title: 'Financial Analytics Dashboard',
    description:
      'A comprehensive dashboard for financial data visualization and analysis with real-time updates.',
    technologies: ['Angular', 'Express', 'D3.js', 'MongoDB'],
    image:
      'https://readdy.ai/api/search-image?query=financial%20analytics%20dashboard%20with%20charts%20and%20graphs%20on%20computer%20screen%2C%20professional%20data%20visualization%20interface%20with%20stock%20market%20data%2C%20clean%20modern%20UI%20design%2C%20high%20quality%20render&width=600&height=400&seq=project-4&orientation=landscape',
  },
  {
    title: 'Supply Chain Management System',
    description:
      'An end-to-end solution for tracking inventory, managing suppliers, and optimizing logistics.',
    technologies: ['React', 'GoLang', 'PostgreSQL', 'Docker'],
    image:
      'https://readdy.ai/api/search-image?query=supply%20chain%20management%20software%20interface%20on%20laptop%20screen%2C%20logistics%20tracking%20dashboard%20with%20warehouse%20visualization%2C%20professional%20enterprise%20software%20UI%2C%20high%20quality%20render&width=600&height=400&seq=project-5&orientation=landscape',
  },
  {
    title: 'Educational Learning Platform',
    description:
      'An interactive platform for online learning with course management, video lectures, and assessments.',
    technologies: ['Vue', 'Laravel', 'MySQL', 'AWS'],
    image:
      'https://readdy.ai/api/search-image?query=online%20learning%20platform%20interface%20on%20tablet%20device%2C%20educational%20course%20dashboard%20with%20video%20player%20and%20learning%20materials%2C%20clean%20modern%20e-learning%20UI%20design%2C%20high%20quality%20render&width=600&height=400&seq=project-6&orientation=landscape',
  },
])
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A showcase of our recent work and successful collaborations.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
          <div class="h-48 overflow-hidden">
            <img
              :src="project.image"
              alt="Project"
              class="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, techIndex) in project.technologies"
                :key="techIndex"
                class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >{{ tech }}</span
              >
            </div>
            <a href="#" class="text-blue-500 font-medium hover:text-primary-dark cursor-pointer"
              >View Project <FontAwesomeIcon icon="fas fa-arrow-right" class="ml-1"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
