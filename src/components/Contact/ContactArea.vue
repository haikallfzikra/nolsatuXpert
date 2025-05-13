<script setup>
import { ref, onMounted } from 'vue'

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  alert('Form submitted successfully!')
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}

const initParticles = () => {
  console.log('Particles initialized')
}

onMounted(() => {
  initParticles()
})
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p class="text-gray-600 mb-8">
            Ready to bring your ideas to life? Get in touch with our team and let's start building
            something amazing together.
          </p>
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon="fa-solid fa-user" class="text-white" />
              </div>
              <div>
                <h4 class="font-bold">Email</h4>
                <p class="text-gray-600">contact@nolsatuxpert.com</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon="fa-solid fa-phone" class="text-white" />
              </div>
              <div>
                <h4 class="font-bold">Phone</h4>
                <p class="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon="fa-solid fa-map-marker-alt" class="text-white" />
              </div>
              <div>
                <h4 class="font-bold">Location</h4>
                <p class="text-gray-600">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-8">
          <h3 class="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                v-model="contactForm.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                v-model="contactForm.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div class="mb-4">
              <label for="subject" class="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="contactForm.subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div class="mb-6">
              <label for="message" class="block text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
            >
              Let's Talk
              <i class="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
