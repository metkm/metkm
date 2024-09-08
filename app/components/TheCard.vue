<script setup lang="ts">
import type { Card } from '~/types/card'

defineProps<{
  item: Card
}>()
</script>

<template>
  <button class="w-60 aspect-[2/3] rounded-lg overflow-hidden">
    <img
      :src="item.image"
      class="w-full h-full object-cover"
    >
  </button>
</template>
