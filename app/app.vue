<script setup lang="ts">
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

extendTres({ OrbitControls })
</script>

<template>
  <TresCanvas
    window-size
    clear-color="black"
  >
    <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
    <TheOrbitControls />

    <Suspense>
      <TheImages ref="group" />
    </Suspense>
  </TresCanvas>
</template>
