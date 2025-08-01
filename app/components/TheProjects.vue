<script setup lang="ts">
import { projects } from '~/projects'
</script>

<template>
  <UCarousel
    ref="carousel"
    v-slot="{ item }"
    :items="projects"
    :ui="{ item: 'basis-80 lg:basis-1/3' }"
    :contain-scroll="false"
    class="mx-[calc(var(--spacing)_*_-8)]"
  >
    <a>
      <img
        :src="item.image"
        class="w-full aspect-video rounded-lg object-cover"
        loading="lazy"
      >

      <div class="p-2">
        <a
          :href="item.url"
          target="_blank"
          class="hover:text-primary-400"
        >
          {{ item.title }}
        </a>

        <p class="text-(--ui-text-dimmed)">
          {{ item.description }}
        </p>

        <div class="mt-2 flex gap-2 items-center">
          <UButton
            icon="i-mdi-github"
            :to="item.github"
            target="_blank"
          />

          <div class="w-1 h-5 rounded-full bg-zinc-800" />

          <div class="flex gap-2">
            <UButton
              v-for="tech in item.usedTechnologies"
              :key="tech.icon"
              :icon="tech.icon"
            />
          </div>
        </div>
      </div>
    </a>
  </UCarousel>
</template>
