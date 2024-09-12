<script setup lang="ts">
const width = window.innerWidth
const height = window.innerHeight
</script>

<template>
  <TresCanvas
    window-size
    class="absolute inset-0 -z-10"
  >
    <TresOrthographicCamera
      :args="[width / -2, width / 2, height / 2, height / -2, 1, 1000]"
      :position="[0, 0, 1]"
    />

    <TheNoise />
  </TresCanvas>
</template>
