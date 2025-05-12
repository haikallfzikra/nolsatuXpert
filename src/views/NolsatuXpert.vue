<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

const services = ref([
    {
        title: 'Web Development',
        icon: 'fas fa-code',
        description: 'We build responsive, scalable web applications using modern frameworks and technologies.',
        technologies: ['React', 'Vue', 'Angular', 'Node.js', 'Django', 'Laravel']
    },
    {
        title: 'Mobile Development',
        icon: 'fas fa-mobile-alt',
        description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
        title: 'UI/UX Design',
        icon: 'fas fa-paint-brush',
        description: 'User-centered design approach to create intuitive and engaging digital experiences.',
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping']
    },
    {
        title: 'Backend Development',
        icon: 'fas fa-server',
        description: 'Robust backend systems with secure APIs and efficient database management.',
        technologies: ['Node.js', 'Python', 'PHP', 'Django', 'GoLang', 'MongoDB', 'PostgreSQL']
    },
    {
        title: 'IoT Solutions',
        icon: 'fas fa-microchip',
        description: 'Connected device solutions and embedded systems for various industries.',
        technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'Embedded C']
    },
    {
        title: 'DevOps & Deployment',
        icon: 'fas fa-cloud',
        description: 'Continuous integration, deployment, and cloud infrastructure management.',
        technologies: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'CI/CD']
    }
])


const teamMembers = ref([
    {
        name: 'Acep Ahmad Supriatna',
        role: 'Software Engineer',
        description: 'Expert in backend architecture & system design with extensive experience in scalable applications.',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20software%20developer%20with%20warm%20brown%20skin%20tone%20and%20glasses%20in%20front%20of%20modern%20office%20background%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20professional%20attire&width=400&height=500&seq=team-1-indo&orientation=portrait'
    },
    {
        name: 'Haikal',
        role: 'UI/UX/Front End Developer',
        description: 'Specializes in creating intuitive user interfaces and seamless user experiences with modern frontend frameworks.',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20indonesian%20male%20UI%20UX%20designer%20with%20warm%20brown%20skin%20tone%20in%20creative%20modern%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20casual%20professional%20attire&width=400&height=500&seq=team-2-indo&orientation=portrait'
    },
    {
        name: 'Umar',
        role: 'Stack Developer',
        description: 'Full-stack developer with expertise in system integration and building comprehensive web solutions.',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20full%20stack%20developer%20with%20warm%20brown%20skin%20tone%20in%20modern%20tech%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-3-indo&orientation=portrait'
    },
    {
        name: 'Dendy',
        role: 'Full Stack Developer',
        description: 'Specializes in database design, API development, and creating robust backend systems.',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20full%20stack%20developer%20with%20warm%20brown%20skin%20tone%20and%20modern%20glasses%20in%20tech%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20business%20casual%20attire&width=400&height=500&seq=team-4-indo&orientation=portrait'
    },
    {
        name: 'Erwin',
        role: 'Front End Developer',
        description: 'Expert in frontend optimization and responsive design, creating beautiful and functional user interfaces.',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20front%20end%20developer%20with%20warm%20brown%20skin%20tone%20in%20modern%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-5-indo&orientation=portrait'
    },
    {
        name: 'Seprian',
        role: 'RnD IoT, Microcontroller',
        description: 'Specializes in IoT architecture and embedded systems, bridging the gap between hardware and software.',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20IoT%20engineer%20with%20warm%20brown%20skin%20tone%20with%20electronic%20components%20in%20modern%20lab%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20smart%20casual%20attire&width=400&height=500&seq=team-6-indo&orientation=portrait'
    },
    {
        name: 'Richard',
        role: 'Mobile Apps Developer',
        description: 'Expert in cross-platform mobile development, creating seamless experiences across iOS and Android.',
        image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20indonesian%20male%20mobile%20app%20developer%20with%20warm%20brown%20skin%20tone%20in%20modern%20tech%20office%2C%20traditional%20indonesian%20facial%20features%2C%20professional%20lighting%2C%20high%20quality%20portrait%2C%20clean%20background%2C%20casual%20professional%20attire&width=400&height=500&seq=team-7-indo&orientation=portrait'
    }
])

const techCategories = ref([
    {
        name: 'Frontend',
        items: ['React', 'Vue', 'Angular', 'HTML5', 'CSS3', 'Sass', 'JavaScript', 'TypeScript']
    },
    {
        name: 'Backend',
        items: ['Node.js', 'Python', 'PHP', 'Django', 'GoLang', 'Express', 'Laravel', 'FastAPI']
    },
    {
        name: 'Mobile',
        items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
    },
    {
        name: 'IoT & Embedded',
        items: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'Embedded C', 'IoT Protocols']
    }
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
    { name: 'Docker', icon: 'fab fa-docker' }
])

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

</script>

<template>
<!-- Hero Section -->
<section
  class="hero-section relative h-screen flex items-center bg-cover bg-center"
  style="background-image: url('https://readdy.ai/api/search-image?query=elegant%20modern%20software%20interface%20with%20sleek%20dark%20theme%20design%2C%20futuristic%203D%20geometric%20elements%2C%20subtle%20blue%20gradient%20accents%2C%20minimalist%20UI%20components%2C%20abstract%20technology%20visualization%2C%20premium%20render%20quality%20with%20depth%20and%20sophistication%2C%20clean%20professional%20aesthetic%20without%20people%20or%20charts%2C%208k%20quality&width=1440&height=800&seq=hero-bg-3&orientation=landscape')"
>
  <!-- Gradient Overlay -->
  <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-85"></div>

  <!-- Content -->
  <div class="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 text-white mb-12 md:mb-0">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
        <span class="font-extrabold">nolsatu</span>Xpert
      </h1>
      <p class="text-xl md:text-2xl font-light mb-8">
        Elite Development & Design Team
      </p>
      <p class="text-gray-300 mb-10 max-w-lg">
        We are a team of passionate developers and designers dedicated to
        creating exceptional digital experiences. Our expertise spans across
        web, mobile, and IoT solutions.
      </p>
      <button
        class="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-dark transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
      >
        Hire Our Team
        <i class="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>

  <!-- Particle JS Background -->
  <div id="particles-js" class="absolute inset-0 z-0"></div>
</section>


<!-- Team Overview -->
<section class="py-20 bg-gray-50">
<div class="container mx-auto px-6">
    <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">A collective of talented professionals with diverse skills and expertise, ready to take on your next project.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div class="relative overflow-hidden h-64">
                <img :src="member.image" alt="Team member" class="w-full h-full object-cover object-top">
                <div class="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
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


<!-- Services Section -->
<section class="py-20">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Expertise & Services</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">We deliver comprehensive solutions across multiple domains, leveraging cutting-edge technologies to solve complex problems.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(service, index) in services" :key="index" class="service-card bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl">
                <div class="text-primary text-4xl mb-6">
                    <i :class="service.icon"></i>
                </div>
                <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
                <p class="text-gray-600 mb-6">{{ service.description }}</p>
                <div class="flex flex-wrap gap-2">
                    <span v-for="(tech, techIndex) in service.technologies" :key="techIndex" class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{{ tech }}</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills & Technologies -->
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">Our team is proficient in a wide range of technologies, frameworks, and tools to deliver the best solutions for your needs.</p>
        </div>
        <div class="mb-12">
            <swiper :modules="[Autoplay]" :autoplay="swiperOptions.autoplay" :slides-per-view="swiperOptions.slidesPerView"
                :loop="swiperOptions.loop" :space-between="swiperOptions.spaceBetween" :breakpoints="swiperOptions.breakpoints">
                <SwiperSlide
                  v-for="(tech, index) in technologies"
                  :key="index"
                  class="flex flex-col items-center"
                >
                  <div class="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-24 w-24 mb-4">
                    <i :class="tech.icon + ' text-3xl text-gray-700'"></i>
                  </div>
                  <p class="text-sm text-center font-medium">{{ tech.name }}</p>
                </SwiperSlide>
            </swiper>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(category, index) in techCategories" :key="index" class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-lg font-bold mb-4 text-primary">{{ category.name }}</h3>
                <div class="flex flex-wrap gap-2">
                    <span v-for="(tech, techIndex) in category.items" :key="techIndex" class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{{ tech }}</span>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<style>
    
</style>