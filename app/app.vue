<script setup lang="ts">
import { cardsWithIds } from './constants'
import type { Card } from './types/card'

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

const selected = ref<Card>()
const items = ref(cardsWithIds)
</script>

<template>
  <main class="flex flex-col justify-center grow h-screen">
    <div class="absolute inset-0 flex flex-col justify-center pointer-events-none">
      <div class="bg-[#2f2015] h-[70%]" />
    </div>
    <div class="absolute inset-0 z-50 pointer-events-none">
      <div class="absolute inset-0 w-full h-full pattern opacity-40" />
      <div class="absolute inset-0 w-full h-full dark-round-overlay" />
    </div>

    <ul class="flex items-center mx-auto z-40">
      <li
        :style="{
          backgroundImage: `url(https://pbs.twimg.com/media/GaPo3bpbUAMt74u?format=jpg&name=large)`,
        }"
        class="aspect-[1.1/2] h-[calc(100vh*0.85)] bg-center bg-cover shadow-glow rounded-lg transition-all hover:saturate-150"
      >
        <p>content</p>
      </li>
    </ul>
  </main>
</template>

<style>
html {
  font-family: Inter;
  background-color: #ffcaa1;
  min-height: 100vh;
}

html,
body,
#__nuxt {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.pattern {
  background-image: url("./assets/pattern.png");
  background-repeat: repeat;
  backdrop-filter: blur(5px) saturate(3);
}

.dark-round-overlay {
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.8));
}

.shadow-glow {
  box-shadow: 0 0 200px rgba(82, 18, 18, 0.5);
}
</style>
