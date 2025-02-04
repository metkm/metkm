<script setup lang="ts">
import { projects } from './projects'

const selectedProjectIndex = ref(0)
const transitionName = ref<'project-image-fade-right' | 'project-image-fade-left'>('project-image-fade-left')

const project = computed(() => projects[selectedProjectIndex.value]!)

const selectNextProject = () => {
  selectedProjectIndex.value = Math.min(selectedProjectIndex.value + 1, projects.length - 1)
  transitionName.value = 'project-image-fade-left'
}

const selectPrevProject = () => {
  selectedProjectIndex.value = Math.max(selectedProjectIndex.value - 1, 0)
  transitionName.value = 'project-image-fade-right'
}
</script>

<template>
  <main class="bg-background min-h-screen max-h-screen flex p-8">
    <div class="flex flex-col gap-8 max-w-7xl mx-auto">
      <div class="flex items-end justify-between text-text-primary font-bold h-32">
        <p class="text-4xl font-stretch-condensed">
          [ {{ project.title }}. ]
        </p>

        <p class="text-6xl">
          <span class="text-xl">made with</span>
          {{ project.madeWith }}
        </p>
      </div>

      <div class="relative flex-1 overflow-hidden">
        <Transition :name="transitionName">
          <img
            :key="project.image"
            :src="project.image"
            class=" object-cover"
          >
        </Transition>
      </div>

      <div class="flex items-center justify-between h-32">
        <p class="underline underline-offset-8 text-xl font-semibold text-text-description">
          {{ project.description }}
        </p>

        <div class="flex items-center gap-2">
          <UiButton
            icon="mdi:arrow-left"
            @click="selectPrevProject"
          />

          <UiButton
            icon="mdi:arrow-right"
            @click="selectNextProject"
          />
        </div>
      </div>
    </div>
  </main>
</template>
