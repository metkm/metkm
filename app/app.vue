<script setup lang="ts">
import type { RGBColor } from 'colorthief'
import { imagesWithIds } from './constants'
import type { Card } from './types/card'

const selected = ref<Card>()
const items = ref(imagesWithIds)

const bgColor = useState<RGBColor | undefined>('bg:color')

const cardPlaceholder = useTemplateRef('card:placeholder')
const placeholderBounds = useElementBounding(cardPlaceholder)
</script>

<template>
  <main class="flex overflow-hidden h-screen">
    <div
      class="relative flex flex-col justify-between p-4 h-full w-screen shrink-0 transition-all duration-700"
      :class="{ '!w-1/4': selected }"
    >
      <div
        class="absolute size-1/2  blur-[200px] -translate-x-1/2 -translate-y-1/2 left-0 top-0"
        :style="{ backgroundColor: `rgb(${bgColor?.[0]}, ${bgColor?.[1]}, ${bgColor?.[2]})` }"
      />

      <div
        ref="card:placeholder"
        class="rounded-lg mx-auto bg-neutral-200 w-60 aspect-[2/3]"
      />

      <TheCards
        v-model="selected"
        v-model:items="items"
        :target-bounds="placeholderBounds"
      />
    </div>

    <div class="bg-red-500 h-full w-screen shrink-0">
      <p>hello</p>
    </div>
  </main>
</template>
