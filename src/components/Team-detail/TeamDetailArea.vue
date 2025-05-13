<script setup>
import { ref } from 'vue'
const teamDetails = ref([
  {
    name: 'Acep Ahmad Supriatna',
    role: 'Software Engineer',
    description:
      'Specializes in backend architecture & system design with a focus on scalable, maintainable solutions.',
    skills: [
      'System Architecture',
      'API Design',
      'Database Optimization',
      'Cloud Infrastructure',
      'Security',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20software%20developer%20with%20glasses%20in%20front%20of%20modern%20office%20background%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20professional%20attire&width=400&height=500&seq=team-1&orientation=portrait',
  },
  {
    name: 'Haikal',
    role: 'UI/UX/Front End Developer',
    description:
      'Creates intuitive user interfaces with a focus on user experience and modern design principles.',
    skills: [
      'UI Design',
      'UX Research',
      'Frontend Development',
      'Responsive Design',
      'Design Systems',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20UI%20UX%20designer%20in%20creative%20modern%20office%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20casual%20professional%20attire&width=400&height=500&seq=team-2&orientation=portrait',
  },
  {
    name: 'Umar',
    role: 'Stack Developer',
    description:
      'Full-stack expert with a talent for system integration and building comprehensive web solutions.',
    skills: [
      'Full-Stack Development',
      'System Integration',
      'DevOps',
      'Cloud Services',
      'Performance Optimization',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20full%20stack%20developer%20in%20modern%20tech%20office%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-3&orientation=portrait',
  },
  {
    name: 'Dendy',
    role: 'Full Stack Developer',
    description:
      'Specializes in database design, API development, and creating robust backend systems.',
    skills: [
      'Database Design',
      'API Development',
      'Backend Systems',
      'Security',
      'Performance Tuning',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20full%20stack%20developer%20with%20modern%20glasses%20in%20tech%20office%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20business%20casual%20attire&width=400&height=500&seq=team-4&orientation=portrait',
  },
  {
    name: 'Erwin',
    role: 'Front End Developer',
    description:
      'Expert in frontend optimization and responsive design, creating beautiful and functional user interfaces.',
    skills: [
      'Frontend Frameworks',
      'Responsive Design',
      'CSS Architecture',
      'Performance Optimization',
      'Accessibility',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20front%20end%20developer%20in%20modern%20office%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-5&orientation=portrait',
  },
  {
    name: 'Seprian',
    role: 'RnD IoT, Microcontroller',
    description:
      'Specializes in IoT architecture and embedded systems, bridging the gap between hardware and software.',
    skills: [
      'IoT Architecture',
      'Embedded Systems',
      'Hardware Design',
      'Sensor Integration',
      'Real-time Systems',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20IoT%20engineer%20with%20electronic%20components%20in%20modern%20lab%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-6&orientation=portrait',
  },
  {
    name: 'Richard',
    role: 'Mobile Apps Developer',
    description:
      'Expert in cross-platform mobile development, creating seamless experiences across iOS and Android.',
    skills: [
      'Mobile App Development',
      'Cross-Platform',
      'Native Development',
      'UI/UX for Mobile',
      'App Performance',
    ],
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20mobile%20app%20developer%20in%20modern%20tech%20office%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20casual%20professional%20attire&width=400&height=500&seq=team-7&orientation=portrait',
  },
])
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Team's Expertise</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Discover the specialized skills and knowledge each team member brings to the table.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(member, index) in teamDetails"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden min-h-[300px]"
        >
          <div class="flex flex-col md:flex-row h-full items-stretch">
            <div class="md:w-1/3 bg-blue-500 p-6 flex items-center justify-center">
              <img
                :src="member.image"
                alt="Team member"
                class="w-24 h-24 rounded-full object-cover object-top"
              />
            </div>
            <div class="md:w-2/3 p-6">
              <h3 class="text-xl font-bold mb-2">{{ member.name }}</h3>
              <p class="text-gray-600 mb-4">{{ member.role }}</p>
              <p class="text-gray-700 mb-4">{{ member.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(skill, skillIndex) in member.skills"
                  :key="skillIndex"
                  class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >{{ skill }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
