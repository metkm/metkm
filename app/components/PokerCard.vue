<script setup lang="ts">
import type { StyleValue } from 'vue'

defineProps<{
  image?: string
}>()

const container = useTemplateRef(`container`)
const { isOutside } = useMouseInElement(container)
const { tilt, roll } = useParallax(container)

const random = Math.floor(Math.random() * 20)

const baseStyle: StyleValue = {
  translate: `0px ${random}px`,
}

const style = computed<StyleValue>(() => {
  if (isOutside.value) {
    return baseStyle
  }

  return {
    ...baseStyle,
    transform: `rotateX(${roll.value * 10}deg) rotateY(${tilt.value * 10}deg)`,
  }
})
</script>

<template>
  <button
    ref="container"
    class="w-60 aspect-[2/3] rounded-lg overflow-hidden shadow-lg trans"
    :style="style"
  >
    <img
      v-if="image"
      :src="image"
      class="w-full h-full object-cover"
    >
  </button>
</template>

<style>
.trans {
  transition: 300ms ease-out all;
}
</style>
