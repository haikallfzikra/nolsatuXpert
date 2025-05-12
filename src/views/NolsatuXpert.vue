<script setup>
import { defineAsyncComponent } from 'vue'

const HeroArea = defineAsyncComponent(() => import('@/components/Hero/HeroArea.vue'))
const TeamMemberArea = defineAsyncComponent(
  () => import('@/components/Team-member/TeamMemberArea.vue'),
)
const ServiceArea = defineAsyncComponent(() => import('@/components/Service/ServiceArea.vue'))
const TechCategorieArea = defineAsyncComponent(
  () => import('@/components/Tech-categories/TechCategorieArea.vue'),
)
const TeamDetailArea = defineAsyncComponent(
  () => import('@/components/Team-detail/TeamDetailArea.vue'),
)
const ProjectArea = defineAsyncComponent(() => import('@/components/ProjectArea/ProjectArea.vue'))
const ContactArea = defineAsyncComponent(() => import('@/components/Contact/ContactArea.vue'))
const TestimonialArea = defineAsyncComponent(
  () => import('@/components/Testimonial/TestimonialArea.vue'),
)
</script>

<template>
  <!-- Hero Section -->
  <HeroArea />

  <!-- Team Overview -->
  <TeamMemberArea />

  <!-- Services Section -->
  <ServiceArea />

  <!-- Skills & Technologies -->
  <TechCategorieArea />

  <!-- Team Member Details -->
  <TeamDetailArea />

  <!-- Projects Section -->
  <ProjectArea />

  <!-- Testimonials Section -->
  <TestimonialArea />

  <!-- Contact Section -->
  <ContactArea />
</template>
