<script setup lang="ts">
// import { imagesWithIds } from './constants'
import { imagesWithIds } from './constants'
import type { Card } from './types/card'

const selected = ref<Card>()
const items = ref(imagesWithIds)

const cardPlaceholder = useTemplateRef('card:placeholder')
const placeholderBounds = useElementBounding(cardPlaceholder)
</script>

<template>
  <main class="relative flex flex-col p-4 justify-between h-screen">
    <div
      ref="card:placeholder"
      class="rounded-lg mx-auto bg-neutral-400 w-60 aspect-[2/3]"
    />

    <TheCards
      v-model="selected"
      v-model:items="items"
      :target-bounds="placeholderBounds"
    />

    <!-- <PokerCards
      v-model="selected"
      v-model:items="imagesWithIds"
      :target-bound="placeholderBound"
    /> -->
  </main>
</template>
