<script setup lang="ts">
import type { PerspectiveCamera } from 'three'

const { onBeforeRender } = useLoop()

const cameraRef = shallowRef<PerspectiveCamera>()
</script>

<template>
  <TresPerspectiveCamera
    ref="cameraRef"
    :position="[0, 0, 10]"
  />
</template>
