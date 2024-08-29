<script setup lang="ts" generic="T">
import type { StyleValue } from 'vue'

const props = defineProps<{
  items: T[]
}>()

const withId = props.items.map((item) => {
  return {
    id: crypto.randomUUID(),
    item,
  }
})

const _items = ref(withId)
const container = ref<HTMLElement>()

const leftOffset = ref(0)

const getNewItems = () => {
  return _items.value.map((item) => {
    return {
      id: crypto.randomUUID(),
      item: item.item,
    }
  })
}

let startOffset = 0
const { distanceX } = usePointerSwipe(container, {
  threshold: 0,
  disableTextSelect: true,
  onSwipe: () => {
    const result = -distanceX.value + startOffset

    leftOffset.value = Math.min(
      0,
      Math.max(result, -(container.value?.clientWidth || 2000) + window.innerWidth),
    )
  },
  onSwipeEnd: () => {
    startOffset = leftOffset.value
  },
})

const style = computed<StyleValue>(() => {
  return {
    transform: `translateX(${leftOffset.value}px)`,
  }
})

onMounted(async () => {
  // Checks for infinite scrolling, Initialization
  if (!container.value) return

  while (window.innerWidth > container.value.clientWidth) {
    _items.value.push(...getNewItems())
    await nextTick()
  }
})
</script>

<template>
  <div class="flex items-center w-screen overflow-x-hidden h-full">
    <ol
      ref="container"
      class="flex w-max gap-4 shrink-0 px-4 h-3/4"
      :style="style"
    >
      <li
        v-for="item in _items"
        :key="item.id"
        class="shrink-0"
      >
        <slot :item="item" />
      </li>
    </ol>
  </div>
</template>
