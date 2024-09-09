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
  <main class="flex overflow-hidden h-screen">
    <div
      class="relative flex flex-col justify-between p-4 pt-8 h-full w-screen shrink-0 transition-all duration-700"
      :class="{ '!w-1/4': selected }"
    >
      <div
        ref="card:placeholder"
        class="rounded-lg mx-auto bg-neutral-200 w-60 aspect-[2/3]"
        :style="{ boxShadow: bgShadowColor }"
      />

      <TheCards
        v-model="selected"
        v-model:items="items"
        :target-bounds="placeholderBounds"
      />
    </div>

    <div class="flex items-center p-4 pr-8 h-full w-[calc(100vw-25%)] shrink-0">
      <section
        class="border rounded-lg p-4 w-full shadow-xl shadow-red-500 aspect-video"
        :style="{
          boxShadow: bgShadowColor,
        }"
      >
        <h1>Main Content will be here.</h1>
        <p>some fancy description</p>
      </section>
    </div>
  </main>
</template>
