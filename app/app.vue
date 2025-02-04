<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { projects } from './projects'
</script>

<template>
  <main class="bg-background min-h-screen max-h-screen flex p-8">
    <div
      v-for="project in projects"
      :key="project.id"
      class="flex flex-col gap-8 max-w-7xl mx-auto"
    >
      <div class="flex items-end justify-between text-text-primary font-bold h-32">
        <p class="text-4xl font-stretch-condensed">
          [ {{ project.title }}. ]
        </p>

        <p class="text-6xl">
          <span class="text-xl">made with</span>
          {{ project.madeWith }}
        </p>
      </div>

      <img
        :src="project.image"
        class="flex-1 overflow-hidden object-cover"
      >

      <div class="flex items-center h-32">
        <p class="underline underline-offset-8 text-xl font-semibold text-text-description">
          {{ project.description }}
        </p>

        <Icon icon="mdi:home" />
      </div>
    </div>
  </main>
</template>
