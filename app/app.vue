<script setup lang="ts">
import { images } from './constants'

const selectedItem = ref()

const radius = 240

const getTranslate = (index: number) => {
  const radians = 45 * Math.PI / 180

  const x = Math.cos(index * radians) * radius
  const y = Math.sin(index * radians) * radius

  return `translate(${x}px, ${y}px)`
}
</script>

<template>
  <main class="grid place-content-center h-screen w-screen overflow-hidden">
    <ol class="relative rounded-full size-80 bg-neutral-200/40 m-auto">
      <li
        v-for="(image, index) in images"
        :key="image"
        class="absolute inset-0 m-auto size-28 transition-all"
        :style="{ transform: getTranslate(index) }"
        :class="{ '!translate-x-0 !translate-y-0 !size-80': image === selectedItem }"
      >
        <button
          class="w-full h-full"
          @click="selectedItem = image"
        >
          <img
            :src="image"
            class="h-full w-full object-cover rounded-full"
          >
        </button>
      </li>
    </ol>
  </main>
</template>

<style>
html,
body,
#__nuxt {
  font-family: "Inter", sans-serif;
}
</style>
