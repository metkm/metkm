<script setup lang="ts">
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

extendTres({ OrbitControls })
</script>

<template>
  <TresCanvas
    window-size
    clear-color="black"
  >
    <TheCamera />
    <TheOrbitControls />

    <Suspense>
      <TheImages />
    </Suspense>
  </TresCanvas>
</template>
