<script setup lang="ts">
import { defaultBackground } from '~/constants'
import type { Card } from '~/types/card'

const modelValue = defineModel<Card>()
const modelValueItems = defineModel<Card[]>('items', { default: [] })

const bgColor = useState('bg:color')

const updateImage = (url: string) => {
  const img = new Image()
  img.src = url

  img.addEventListener('load', async () => {
    if (!modelValue.value) {
      bgColor.value = defaultBackground
    }
    else {
      bgColor.value = (await getColor(img))?.value
    }
  }, {
    once: true,
  })
}

const handleSelect = (item: Card) => {
  updateImage(item.image)

  if (modelValue.value) {
    modelValueItems.value.push(modelValue.value)
    modelValue.value = undefined

    bgColor.value = defaultBackground
    return
  }

  const index = modelValueItems.value.findIndex(i => i.id === item.id)
  if (index !== -1) {
    modelValueItems.value.splice(index, 1)
  }

  modelValue.value = item
}
</script>

<template>
  <ol
    class="flex px-8 p-4 duration-500 transition-all"
    :class="{ 'mx-auto w-full lg:w-max overflow-x-auto lg:overflow-x-visible': !modelValue }"
  >
    <li
      v-for="(item, index) in modelValueItems"
      :key="item.id"
      class="flex justify-center perspective grow-1 w-20 md:w-24 lg:w-32 overflow-visible duration-500 transition-all"
      :class="{ '!w-1': modelValue }"
    >
      <TheCard
        :key="index"
        :item="item"
        :index="index - (modelValueItems.length / 2)"
        class="mx-auto shrink-0"
        @click="item.href ? undefined : handleSelect(item)"
      />
    </li>
  </ol>
</template>

<style>
.perspective {
  perspective: 300px;
}
</style>
