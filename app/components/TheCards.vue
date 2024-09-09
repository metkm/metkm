<script setup lang="ts">
import type { UseElementBoundingReturn } from '@vueuse/core'
import type { Card } from '~/types/card'

const { targetBounds } = defineProps<{
  targetBounds: UseElementBoundingReturn
}>()

const modelValue = defineModel<Card>()
const modelValueItems = defineModel<Card[]>('items', { default: [] })

const ITEM_WIDTH = 240 - 40

const modelValueElement = shallowRef<HTMLElement>()
const modelValueElementAnimatedFromBounds = shallowRef({
  left: 0,
  top: 0,
})

const { width } = useWindowSize()

const modelValueIndex = computed(() => {
  const i = modelValueItems.value.findIndex(item => item.id === modelValue.value?.id)

  return i === -1 ? undefined : i
})

const offset = computed(() => {
  const len = modelValue.value ? modelValueItems.value.length - 1 : modelValueItems.value.length
  const wid = ITEM_WIDTH * len

  return (width.value - wid) / 2
})

const toHtmlElement = (el: Element | EventTarget | null) => {
  return el as HTMLElement
}

const applyPosition = (el: HTMLElement, left: number, top: number) => {
  el.style.left = `${left}px`
  el.style.top = `${top}px`
}

const handleSelect = async (event: Event, item: Card) => {
  const target = toHtmlElement(event.currentTarget)
  const { left, top } = target.getBoundingClientRect()

  modelValueElementAnimatedFromBounds.value = {
    left,
    top,
  }

  if (modelValueElement.value) {
    applyPosition(modelValueElement.value, left, top)
  }

  applyPosition(target, left, top)
  requestAnimationFrame(() => {
    applyPosition(target, targetBounds.left.value, targetBounds.top.value)
    modelValueElement.value = target
  })

  modelValue.value = item
}
</script>

<template>
  <ol
    ref="container"
    class="h-96"
  >
    <li
      v-for="(item, index) in modelValueItems"
      :key="item.id"
      class="transition-all absolute perspective"
      :style="{
        left: `${(modelValueIndex !== undefined && modelValueIndex < index ? index - 1 : index) * ITEM_WIDTH + offset}px`,
      }"
      @click="handleSelect($event, item)"
    >
      <TheCard
        :item="item"
        :index="index - (modelValueItems.length / 2)"
      />
    </li>
  </ol>
</template>

<style>
.perspective {
  perspective: 300px;
}
</style>
