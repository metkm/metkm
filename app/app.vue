<script setup lang="ts">
import { AxesHelper } from 'three'

extendTres({
  AxesHelper,
})
</script>

<template>
  <TresCanvas
    window-size
  >
    <TresPerspectiveCamera
      :args="[45, 1, 0.1, 1000]"
      :position="[-6, 0, 8]"
      :look-at="[0, 0, 0]"
    />
    <TresAxesHelper />
    <!-- <TheOrbitControls /> -->

    <Suspense>
      <TheImages
        ref="group"
      />
    </Suspense>
  </TresCanvas>
</template>
