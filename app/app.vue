<script setup lang="ts">
import { projects } from './projects'

useSeoMeta({
  title: 'Metin Korkmaz',
  description: 'Metin\'s portfolio',
  ogTitle: 'Metin Korkmaz',
  // ogImage: '/preview.webp',
  ogDescription: 'Metin\'s portfolio',
  ogUrl: 'https://metkm.win/',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Metin Korkmaz',
  twitterDescription: 'Metin\'s portfolio',
  twitterImage: '/preview.webp',
})

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
  <main class="bg-background min-h-screen max-h-screen flex">
    <svg
      class="absolute inset-0 z-50"
    >
      <filter id="grainy">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
        />
        <feComposite
          operator="in"
          in2="SourceGraphic"
          result="monoNoise"
        />
      </filter>
    </svg>

    <div class="flex flex-col w-full gap-8 z-10 p-12 px-28">
      <div class="flex flex-wrap items-end justify-between text-text-primary font-bold p-8 pb-0">
        <p class="text-lg lg:text-4xl font-stretch-condensed bg-black/20 lg:bg-transparent px-2 lg:px-0">
          [ {{ project.title }}. ]
        </p>

        <p class="text-2xl lg:text-6xl">
          <span class="text-xl">made with</span>
          {{ project.madeWith }}
        </p>
      </div>

      <div class="relative flex-1 overflow-hidden w-full">
        <Transition :name="transitionName">
          <img
            :key="project.image"
            :src="project.image"
            class=" object-cover h-full w-full"
          >
        </Transition>
      </div>

      <div class="flex flex-wrap gap-8 items-center justify-between p-8 pt-0">
        <p class="underline underline-offset-8 lg:text-xl font-semibold text-text-description">
          {{ project.description }}
        </p>

        <div class="flex items-center gap-2">
          <UiButton
            icon="mdi:github"
            href="https://github.com/metkm"
          />

          <UiButton
            icon="mdi:linkedin"
            href="https://www.linkedin.com/in/metkm/"
          />

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

    <TresCanvas class="!absolute inset-0">
      <TresOrthographicCamera
        :position="[0, 0, 1]"
      />

      <TheNoise />
    </TresCanvas>
  </main>
</template>
