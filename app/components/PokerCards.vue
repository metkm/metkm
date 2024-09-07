<script setup lang="ts" generic="T extends { id: string | number, image: string }">
const props = defineProps<{
  items: T[]
}>()

const selected = defineModel<T>()

const ITEM_WIDTH = 240 - 20

const container = useTemplateRef('container')
const { width } = useElementSize(container)

const offset = computed(() => {
  const totalWidth = ITEM_WIDTH * props.items.length
  return (width.value - totalWidth) / 2
})
</script>

<template>
  <ol
    ref="container"
    class="relative transition-all mb-2"
  >
    <li
      v-for="(item, index) in items"
      :key="item.id"
      class="absolute bottom-0 move perspective"
      :style="{ transform: `translateX(${ITEM_WIDTH * index + offset}px) rotateZ(${(index - ((items.length - 1) / 2))}deg)` }"
    >
      <PokerCard
        :image="item.image"
        :index="index"
        @click="selected = item"
      />
    </li>
  </ol>
</template>

<style>
.perspective {
  perspective: 200px;
}

.move {
  transition: 500ms ease-in-out all;
}
</style>
