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
const modelValueElementAnimatedFrom = shallowRef({
  left: 0,
  top: 0,
})

const { width } = useWindowSize()

const offset = computed(() => (width.value - ITEM_WIDTH * modelValueItems.value?.length) / 2)

const toHtmlElement = (el: Element | EventTarget | null) => {
  return el as HTMLElement
}

const applyPosition = (el: HTMLElement, left: number, top: number) => {
  el.style.left = `${left}px`
  el.style.top = `${top}px`
}

const handleSelect = (event: Event, item: Card) => {
  const target = toHtmlElement(event.currentTarget)
  const { left, top } = target.getBoundingClientRect()

  if (modelValueElement.value) {
    applyPosition(modelValueElement.value, targetBounds.left.value, targetBounds.top.value)

    requestAnimationFrame(() => {
      applyPosition(
        modelValueElement.value!,
        modelValueElementAnimatedFrom.value.left,
        modelValueElementAnimatedFrom.value.top,
      )

      modelValueElement.value = target

      const animatedFrom = target.getBoundingClientRect()
      modelValueElementAnimatedFrom.value = {
        left: animatedFrom.left,
        top: animatedFrom.top,
      }
    })
  }
  else {
    modelValueElement.value = target
    const animatedFrom = target.getBoundingClientRect()
    modelValueElementAnimatedFrom.value = {
      left: animatedFrom.left,
      top: animatedFrom.top,
    }
  }

  applyPosition(target, left, top)

  requestAnimationFrame(() => {
    applyPosition(target, targetBounds.left.value, targetBounds.top.value)
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
      class="transition-all absolute"
      :style="{
        left: `${offset + index * ITEM_WIDTH}px`,
      }"
      @click="handleSelect($event, item)"
    >
      <TheCard :item="item" />
    </li>
  </ol>
</template>
