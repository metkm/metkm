<script setup lang="ts">
import { breakpointsTailwind, type UseElementBoundingReturn } from '@vueuse/core'
import ColorThief from 'colorthief'
import type { Card } from '~/types/card'

const { targetBounds } = defineProps<{
  targetBounds: UseElementBoundingReturn
}>()

const modelValue = defineModel<Card>()
const modelValueItems = defineModel<Card[]>('items', { default: [] })

const bgColor = useState('bg:color')

const modelValueElement = shallowRef<HTMLElement>()
const modelValueElementAnimatedFromBounds = shallowRef({
  left: 0,
  top: 0,
})

const container = useTemplateRef('container')
const { width } = useWindowSize()
const { width: containerWidth } = useElementSize(container)
const breakpoints = useBreakpoints(breakpointsTailwind)

const ITEM_WIDTH = computed(() => (breakpoints.greater('md').value ? 240 - 30 : 96 - 30))
const colorThief = new ColorThief()

const modelValueIndex = computed(() => {
  const i = modelValueItems.value.findIndex(item => item.id === modelValue.value?.id)

  return i === -1 ? undefined : i
})

const offset = computed(() => {
  const len = modelValue.value ? modelValueItems.value.length - 1 : modelValueItems.value.length
  const wid = ITEM_WIDTH.value * len

  // 16 is Padding
  return ((width.value - wid) / 2) - (breakpoints.isSmaller('md') ? 16 : 0)
})

const toHtmlElement = (el: Element | EventTarget | null) => {
  return el as HTMLElement
}

const applyPosition = (el: HTMLElement, left: number, top: number) => {
  el.style.left = `${left}px`
  el.style.top = `${top}px`
}

const handleSelect = async (event: Event, item: Card) => {
  if (modelValue.value && modelValueElement.value) {
    applyPosition(modelValueElement.value, modelValueElementAnimatedFromBounds.value.left, modelValueElementAnimatedFromBounds.value.top)

    modelValue.value = undefined
    modelValueElement.value = undefined
    return
  }

  const imgElement = event.target as HTMLImageElement
  bgColor.value = colorThief.getColor(imgElement)

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

const getIndexOffset = (index: number) => {
  return modelValueIndex.value !== undefined && modelValueIndex.value < index ? index - 1 : index
}

watch(width, () => {
  if (!modelValueElement.value) return
  applyPosition(modelValueElement.value, targetBounds.left.value, targetBounds.top.value)
}, {
  flush: 'post',
})
</script>

<template>
  <ol
    ref="container"
    class="h-40 md:h-96 overflow-hidden overflow-x-auto"
  >
    <li
      v-for="(item, index) in modelValueItems"
      :key="item.id"
      class="flex absolute transition-all ease-out duration-300 perspective"
      :style="{
        left: `${!modelValue ? getIndexOffset(index) * ITEM_WIDTH + offset : (containerWidth / 2 - ITEM_WIDTH / 2)}px`,
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
