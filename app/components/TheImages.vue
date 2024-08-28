<script setup lang="ts">
import { SRGBColorSpace } from 'three'
import { images } from '~/constants'

const _textures = await useTexture(images)
const textures = fillArray(_textures, 100)

textures.forEach((texture) => {
  texture.colorSpace = SRGBColorSpace
})
</script>

<template>
  <TresGroup>
    <TheImage
      v-for="(texture, index) in textures"
      :key="texture.id"
      :index="index"
      :texture="texture"
    />
    <!-- <TresMesh
      v-for="(texture, index) in textures"
      :key="texture.id"
      :position="[
        (index * 4) - (Math.floor(index / 10) * (10 * 4)),
        -Math.floor(index / 10) * 4,
        0,
      ]"
      @pointer-enter="handlePointerEnter"
      @pointer-leave="handlePointerLeave"
    >
      <TresBoxGeometry :args="[4, 4, 0]" />
      <TresMeshBasicMaterial :map="texture" />
    </TresMesh> -->
  </TresGroup>
</template>
