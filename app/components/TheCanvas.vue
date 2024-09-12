<script setup lang="ts">
const width = window.innerWidth
const height = window.innerHeight
</script>

<template>
  <div class="absolute flex items-center inset-0 pointer-events-none -z-50">
    <svg class="absolute -z-50">
      <filter id="grainy">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
        />
      </filter>
    </svg>

    <TresCanvas class="!h-3/4">
      <TresOrthographicCamera
        :args="[width / -2, width / 2, height / 2, height / -2, 1, 1000]"
        :position="[0, 0, 1]"
      />

      <TheNoise />
    </TresCanvas>
  </div>
</template>

<style>
#__nuxt::after {
  content: '';
  inset: 0;
  position: absolute;
  background: #000000;
  opacity: 25%;
  filter: url(#grainy);
  z-index: 50;
  pointer-events: none;
}
</style>
