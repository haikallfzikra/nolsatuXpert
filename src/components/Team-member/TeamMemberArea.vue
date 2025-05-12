<script setup>
import { ref } from 'vue'
const teamMembers = ref([
  {
    name: 'Acep Ahmad Supriatna',
    role: 'Software Engineer',
    description:
      'Expert in backend architecture & system design with extensive experience in scalable applications.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20software%20developer%20with%20warm%20brown%20skin%20tone%20and%20glasses%20in%20front%20of%20modern%20office%20background%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20professional%20attire&width=400&height=500&seq=team-1-indo&orientation=portrait',
  },
  {
    name: 'Haikal',
    role: 'UI/UX/Front End Developer',
    description:
      'Specializes in creating intuitive user interfaces and seamless user experiences with modern frontend frameworks.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20indonesian%20male%20UI%20UX%20designer%20with%20warm%20brown%20skin%20tone%20in%20creative%20modern%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20casual%20professional%20attire&width=400&height=500&seq=team-2-indo&orientation=portrait',
  },
  {
    name: 'Umar',
    role: 'Stack Developer',
    description:
      'Full-stack developer with expertise in system integration and building comprehensive web solutions.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20full%20stack%20developer%20with%20warm%20brown%20skin%20tone%20in%20modern%20tech%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-3-indo&orientation=portrait',
  },
  {
    name: 'Dendy',
    role: 'Full Stack Developer',
    description:
      'Specializes in database design, API development, and creating robust backend systems.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20full%20stack%20developer%20with%20warm%20brown%20skin%20tone%20and%20modern%20glasses%20in%20tech%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20business%20casual%20attire&width=400&height=500&seq=team-4-indo&orientation=portrait',
  },
  {
    name: 'Erwin',
    role: 'Front End Developer',
    description:
      'Expert in frontend optimization and responsive design, creating beautiful and functional user interfaces.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20front%20end%20developer%20with%20warm%20brown%20skin%20tone%20in%20modern%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-5-indo&orientation=portrait',
  },
  {
    name: 'Seprian',
    role: 'RnD IoT, Microcontroller',
    description:
      'Specializes in IoT architecture and embedded systems, bridging the gap between hardware and software.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20IoT%20engineer%20with%20warm%20brown%20skin%20tone%20with%20electronic%20components%20in%20modern%20lab%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-6-indo&orientation=portrait',
  },
  {
    name: 'Richard',
    role: 'Mobile Apps Developer',
    description:
      'Expert in cross-platform mobile development, creating seamless experiences across iOS and Android.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20mobile%20app%20developer%20with%20warm%20brown%20skin%20tone%20in%20modern%20tech%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20casual%20professional%20attire&width=400&height=500&seq=team-7-indo&orientation=portrait',
  },
])
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A collective of talented professionals with diverse skills and expertise, ready to take on
          your next project.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="team-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <div class="relative overflow-hidden h-64">
            <img
              :src="member.image"
              alt="Team member"
              class="w-full h-full object-cover object-top"
            />
            <div
              class="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <p class="text-white text-center">{{ member.description }}</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
