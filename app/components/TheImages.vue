<script setup lang="ts">
import type { Group } from 'three'
import { Box3, SRGBColorSpace, Vector3 } from 'three'
import { images } from '~/constants'

const { camera } = useTresContext()
const _textures = await useTexture(images)
const textures = fillArray(_textures, 100)

const group = shallowRef<Group>()

textures.forEach((texture) => {
  texture.colorSpace = SRGBColorSpace
})

const stop = watch(group, () => {
  if (!group.value || !camera.value) return

  const box = new Box3()
  const size = new Vector3()

  box.setFromObject(group.value)
  box.getSize(size)

  const centerX = size.x / 2
  const centerY = -size.y / 2

  camera.value.position.x = centerX
  camera.value.position.y = centerY
  camera.value.position.z = 20

  camera.value.lookAt(centerX, centerY, 0)

  stop()
})
</script>

<template>
  <TresGroup ref="group">
    <TheImage
      v-for="(texture, index) in textures"
      :key="texture.id"
      :index="index"
      :texture="texture"
    />
  </TresGroup>
</template>
