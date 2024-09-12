<script setup lang="ts">
import type { RGBColor } from 'colorthief'
import { imagesWithIds } from './constants'
import type { Card } from './types/card'

const selected = ref<Card>()
const items = ref(imagesWithIds)

const bgColor = useState<RGBColor | undefined>('bg:color')

const bgShadowColor = computed(() => `0 20px 25px -5px rgba(${bgColor.value?.join(',')}, 0.2), 0 8px 10px -6px rgba(${bgColor.value?.join(',')}, 0.2)`)

const cardPlaceholder = useTemplateRef('card:placeholder')
const placeholderBounds = useElementBounding(cardPlaceholder)
</script>

<template>
  <main class="flex flex-col md:flex-row overflow-hidden min-h-screen">
    <svg class="absolute -z-50">
      <filter id="grainy">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
        />
      </filter>
    </svg>

    <TheCanvas />

    <div
      class="relative flex flex-col gap-8 overflow-hidden justify-between p-4 pt-8 w-screen shrink-0 transition-all duration-700"
      :class="{ 'md:!w-1/4': selected }"
    >
      <div
        ref="card:placeholder"
        class="rounded-lg mx-auto bg-white/20 w-24 md:w-60 aspect-[2/3]"
      />
      <!-- :style="{ boxShadow: bgShadowColor }" -->

      <TheCards
        v-model="selected"
        v-model:items="items"
        :target-bounds="placeholderBounds"
      />
    </div>

    <div class="flex items-center p-4 md:pr-8 md:h-full md:w-[calc(100vw-25%)] aspect-video shrink-0">
      <Transition
        leave-active-class="transition-all"
        enter-active-class="transition-all"
        leave-to-class="opacity-0"
        enter-from-class="opacity-0"
      >
        <section
          v-if="selected"
          class="flex flex-col gap-4 justify-between rounded-lg p-4 w-full aspect-video"
          :style="{
            boxShadow: bgShadowColor,
          }"
        >
          <div>
            <h1>
              {{ selected.title }}
            </h1>
            <p class="text-neutral-400 text-sm">
              {{ selected.description }}
            </p>
          </div>

          <img
            :src="selected.image"
            class="rounded-lg max-h-full shadow object-cover"
          >

          <a
            :href="selected.url"
            target="_blank"
            class="hover:bg-neutral-200 w-max p-1 rounded-lg"
          >
            <IconGithub />
          </a>
        </section>
      </Transition>
    </div>
  </main>
</template>

<style>
html {
  font-family: Inter;
  background-color: #EADBC8;
  color: white;
}

#__nuxt::after {
  content: '';
  inset: 0;
  position: absolute;
  background: #000000;
  opacity: 25%;
  filter: url(#grainy);
  z-index: 50;
  pointer-events: none;
}
</style>
