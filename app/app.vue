<script setup lang="ts">
</script>

<template>
  <TresCanvas
    window-size
    clear-color="black"
  >
    <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />

    <Suspense>
      <TheImages ref="group" />
    </Suspense>
  </TresCanvas>
</template>
