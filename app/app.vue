<script setup lang="ts"></script>

<template>
  <main class="p-8 py-12 min-h-screen">
    <div class="flex items-center group transition-all gap-2 max-w-xl mx-auto mb-8 slide-enter">
      <h1 class="font-bold text-4xl">
        Metin
      </h1>
      <p class="group-hover:scale-100 scale-0 transition-all">
        metkm
      </p>
      <h1 class="font-bold text-4xl -ml-14 group-hover:ml-0 transition-all">
        Korkmaz
      </h1>
    </div>

    <article class="max-w-xl mx-auto slide-enter">
      <p class="my-6">
        Hello! I'm someone who's passionate about working with a variety of technologies. I enjoy
        exploring how others build things and diving deep into how everything works under the hood,
        including systems like the Windows API.
      </p>
      <p class="my-6">
        I also have a strong interest in high-performance, compiled languages like Rust, and I love
        making micro-optimizations that push performance to make apps a little bit faster!
      </p>

      <div class="flex flex-col gap-4 my-6">
        <div>
          <p class="mb-2">
            Technologies I mainly use and still do
          </p>

          <div class="flex flex-wrap gap-2">
            <UButton
              icon="i-material-icon-theme:vue"
              to="https://vuejs.org/"
              target="_blank"
            >
              Vue
            </UButton>
            <UButton
              icon="i-material-icon-theme:react"
              to="https://react.dev/"
              target="_blank"
            >
              React
            </UButton>
            <UButton
              icon="i-material-icon-theme:typescript"
              to="https://www.typescriptlang.org/"
              target="_blank"
            >
              Typescript
            </UButton>
            <UButton
              icon="i-material-icon-theme:tailwindcss"
              to="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwindcss
            </UButton>
            <UButton
              icon="i-material-icon-theme:nodejs"
              to="https://nodejs.org/en"
              target="_blank"
            >
              NodeJs
            </UButton>
            <UButton
              icon="i-material-icon-theme:next"
              to="https://nextjs.org/"
              target="_blank"
            >
              NextJs
            </UButton>
            <UButton
              icon="i-material-icon-theme:nuxt"
              to="https://nuxt.com/"
              target="_blank"
            >
              NuxtJs
            </UButton>
          </div>
        </div>

        <div>
          <p class="mb-2">
            Technologies I've used before and comfortable
          </p>

          <div class="flex flex-wrap gap-2">
            <UButton
              icon="i-material-icon-theme:tauri"
              to="https://v2.tauri.app/"
              target="_blank"
            >
              Tauri
            </UButton>
            <UButton
              icon="i-devicon-electron"
              to="https://www.electronjs.org/"
              target="_blank"
            >
              Electron
            </UButton>
            <UButton
              icon="i-material-icon-theme:rust"
              to="https://www.rust-lang.org/"
              target="_blank"
            >
              Rust
            </UButton>
            <UButton
              icon="i-devicon-postgresql"
              to="https://www.postgresql.org/"
              target="_blank"
            >
              Postgres
            </UButton>
            <UButton
              icon="i-devicon-mongodb"
              to="https://www.mongodb.com/"
              target="_blank"
            >
              MongoDb
            </UButton>
          </div>
        </div>
      </div>

      <div>
        <p class="mb-2">
          Links
        </p>

        <div class="flex gap-2">
          <UButton
            icon="i-mdi-linkedin"
            href="https://github.com/metkm"
            target="_blank"
          >
            Linkedin
          </UButton>

          <UButton
            icon="i-mdi-github"
            href="https://www.linkedin.com/in/metkm/"
            target="_blank"
          >
            Linkedin
          </UButton>
        </div>
      </div>
    </article>

    <div class="absolute inset-0 !pointer-events-none">
      <TresCanvas class="h-full w-full !pointer-events-none">
        <TresOrthographicCamera
          :position="[0, 0, 1]"
        />

        <TheNoise />
      </TresCanvas>
    </div>
  </main>
</template>

<!-- <script setup lang="ts">
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
      <div class="flex flex-wrap gap-4 items-end max-w-7xl w-full mx-auto justify-between text-text-primary font-bold p-8 pb-0">
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
          item: 'h-full basis-[90%] relative',
          container: 'h-full',
          viewport: 'h-full',
        }"
      >
        <div class="flex pr-8 pb-8 before:absolute before:bg-text-primary before:left-1/12 before:top-1/12 before:right-0 before:bottom-0 before:flex h-full">
          <img
            :src="item.image"
            class="h-full w-full object-cover z-10"
          >
        </div>
      </UCarousel>

      <div class="flex flex-wrap gap-4 items-center justify-between p-8 pt-0 max-w-7xl w-full mx-auto">
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
</template> -->
