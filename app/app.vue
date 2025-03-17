<script setup lang="ts">
import { projects } from './projects'

useSeoMeta({
  title: 'Metin Korkmaz',
  description: 'Metin\'s portfolio',
  ogTitle: 'Metin Korkmaz',
  ogImage: '/preview.webp',
  ogDescription: 'Metin\'s portfolio',
  ogUrl: 'https://metkm.win/',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Metin Korkmaz',
  twitterDescription: 'Metin\'s portfolio',
  twitterImage: '/preview.webp',
})

const carousel = useTemplateRef('carousel')

const selectedProjectIndex = ref(0)

const project = computed(() => projects[selectedProjectIndex.value]!)

const selectNextProject = () => {
  carousel.value?.emblaApi?.scrollNext()
}

const selectPrevProject = () => {
  carousel.value?.emblaApi?.scrollPrev()
}

const onCarouselSelect = () => {
  const selectedIndex = carousel.value?.emblaApi?.selectedScrollSnap()
  if (selectedIndex === undefined) return

  selectedProjectIndex.value = selectedIndex
}

onMounted(() => {
  carousel.value?.emblaApi?.on('select', onCarouselSelect)
})
</script>

<template>
  <main class="flex bg-background">
    <svg class="absolute inset-0 z-50 pointer-events-none">
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

    <div class="flex flex-col gap-4 min-h-screen max-h-screen h-screen overflow-hidden z-10">
      <div class="flex flex-wrap gap-4 items-end justify-between text-text-primary font-bold p-8 pb-0">
        <p class="text-lg lg:text-4xl font-stretch-condensed bg-black/20 lg:bg-transparent px-2 lg:px-0">
          [ {{ project.title }}. ]
        </p>

        <p class="text-2xl lg:text-6xl">
          <span class="text-xl">made with</span>
          {{ project.madeWith }}
        </p>
      </div>

      <UCarousel
        ref="carousel"
        v-slot="{ item }"
        :items="projects"
        class="max-h-full flex-1 overflow-hidden"
        :contain-scroll="false"
        :ui="{
          item: 'h-full basis-[90%]',
          container: 'h-full',
          viewport: 'h-full',
        }"
      >
        <img
          :src="item.image"
          class="h-full w-full object-cover"
        >
      </UCarousel>

      <div class="flex flex-wrap gap-4 items-center justify-between p-8 pt-0">
        <p class="underline underline-offset-8 lg:text-xl font-semibold text-text-description">
          {{ project.description }}
        </p>

        <div class="flex items-center gap-2  text-black">
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

    <TresCanvas class="!absolute inset-0 pointer-events-none">
      <TresOrthographicCamera
        :position="[0, 0, 1]"
      />

      <TheNoise />
    </TresCanvas>
  </main>
</template>
