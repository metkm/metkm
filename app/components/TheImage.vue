<script setup lang="ts">
import type { Texture } from 'three'

const props = defineProps<{
  texture: Texture
  index: number
}>()

const width = 8
const height = 4.5
const maxPerLine = 50

const position = [
  props.index * width - Math.floor(props.index / maxPerLine) * (maxPerLine * width),
  -Math.floor(props.index / maxPerLine) * height,
  0,
]
</script>

<template>
  <TresMesh
    :position="position"
  >
    <!-- :rotation="[-0.5, 0.5, 0.5]" -->
    <TresBoxGeometry :args="[width, height, 0.1]" />
    <TresMeshBasicMaterial :map="texture" />
  </TresMesh>
</template>
