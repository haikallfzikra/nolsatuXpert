<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

const testimonials = ref([
  {
    quote:
      'The team at nolsatuXpert delivered our project on time and exceeded our expectations. Their technical expertise and attention to detail made all the difference.',
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechVision Inc.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20executive%20in%20modern%20office%20setting%2C%20business%20attire%2C%20confident%20expression%2C%20high%20quality%20portrait%20with%20clean%20background&width=200&height=200&seq=testimonial-1&orientation=squarish',
  },
  {
    quote:
      'Working with nolsatuXpert was a game-changer for our startup. They understood our vision and transformed it into a polished product that our users love.',
    name: 'Michael Chen',
    position: 'Founder',
    company: 'InnovateLab',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20male%20entrepreneur%20in%20modern%20startup%20office%2C%20casual%20business%20attire%2C%20friendly%20smile%2C%20high%20quality%20portrait%20with%20clean%20background&width=200&height=200&seq=testimonial-2&orientation=squarish',
  },
  {
    quote:
      'The IoT solution developed by nolsatuXpert revolutionized our manufacturing process. Their expertise in both hardware and software integration is unmatched.',
    name: 'David Rodriguez',
    position: 'Operations Director',
    company: 'Global Manufacturing',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20latino%20male%20executive%20in%20industrial%20setting%2C%20business%20casual%20attire%2C%20professional%20expression%2C%20high%20quality%20portrait%20with%20clean%20background&width=200&height=200&seq=testimonial-3&orientation=squarish',
  },
  {
    quote:
      "nolsatuXpert's team redesigned our e-commerce platform, resulting in a 40% increase in conversions. Their UI/UX expertise made a significant impact on our business.",
    name: 'Emily Wong',
    position: 'Marketing Director',
    company: 'StyleShop',
    image:
      'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20asian%20female%20marketing%20executive%20in%20creative%20office%20environment%2C%20stylish%20business%20attire%2C%20confident%20smile%2C%20high%20quality%20portrait%20with%20clean%20background&width=200&height=200&seq=testimonial-4&orientation=squarish',
  },
])
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Hear from the businesses and individuals who have experienced our expertise firsthand.
        </p>
      </div>

      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        space-between="30"
        class="testimonial-swiper"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index" class="px-4">
          <div class="bg-white rounded-lg shadow-md p-8 my-4">
            <div class="flex items-center mb-6">
              <div class="text-yellow-400 flex">
                <i class="fas fa-star" v-for="n in 5" :key="n"></i>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">"{{ testimonial.quote }}"</p>
            <div class="flex items-center">
              <img
                :src="testimonial.image"
                alt="Client"
                class="w-12 h-12 rounded-full object-cover object-top mr-4"
              />
              <div>
                <h4 class="font-bold">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">
                  {{ testimonial.position }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
