<script setup lang="ts">
import type { StyleValue } from 'vue'
import type { Card } from '~/types/card'

const { index } = defineProps<{
  item: Card
  index: number
}>()

const container = useTemplateRef('container')
const { tilt, roll } = useParallax(container)
const { isOutside } = useMouseInElement(container)

const randomY = Math.random() * -10

const style = computed<StyleValue>(() => {
  const baseStyle: StyleValue = {
    transform: `translateY(${randomY}px) rotateZ(${index}deg)`,
  }

  if (isOutside.value) {
    return baseStyle
  }

  return {
    ...baseStyle,
    transform: `rotateX(${tilt.value * 10}deg) rotateY(${roll.value * 10}deg) rotateZ(${index}deg) translateY(${randomY}px)`,
  }
})
</script>

<template>
  <button
    ref="container"
    class="w-24 md:w-60 aspect-[2/3] rounded-lg overflow-hidden transition-all ease-linear drop-shadow"
    :style="style"
  >
    <img
      :src="item.image"
      class="w-full h-full object-cover"
    >
  </button>
</template>
