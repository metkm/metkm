<script setup lang="ts">
import { imagesWithIds } from './constants'

const selectedCard = shallowRef<typeof imagesWithIds[number]>()
const cards = ref(imagesWithIds)

const removeRandom = () => {
  cards.value.splice(2, 1)
}
</script>

<template>
  <main class="flex flex-col justify-between relative min-h-screen p-4">
    <div>
      <p>main content</p>
      <button @click="removeRandom">
        remove random
      </button>
    </div>

    <PokerCards
      v-model="selectedCard"
      :items="cards"
    />
  </main>
</template>
