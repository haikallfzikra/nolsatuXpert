<script setup>
import HeroArea from '@/components/Hero/HeroArea.vue'
import TeamMemberArea from '@/components/Team-member/TeamMemberArea.vue'
import ServiceArea from '@/components/Service/ServiceArea.vue'
import TechCategorieArea from '@/components/Tech-categories/TechCategorieArea.vue'
import TeamDetailArea from '@/components/Team-detail/TeamDetailArea.vue'
import ProjectArea from '@/components/ProjectArea/ProjectArea.vue'
import ContactArea from '@/components/Contact/ContactArea.vue'
import TestimonialArea from '@/components/Testimonial/TestimonialArea.vue'
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

<style></style>
