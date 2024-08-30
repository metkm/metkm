<script setup lang="ts">
import { extend, vLightHelper } from '@tresjs/core'
import { AxesHelper, DoubleSide } from 'three'

extend({ AxesHelper })
</script>

<template>
  <TresCanvas
    window-size
    shadows
  >
    <TresPerspectiveCamera
      :position="[5, 0, -10]"
      :look-at="[0, 0, 0]"
      :args="[45, 1, 0.1, 1000]"
    />

    <TheControls />
    <TresAxesHelper />

    <TresSpotLight
      v-light-helper
      :args="['#213159']"
      :position="[0, 12, -12]"
      :power="20_000"
      :intensity="15_000"
      :angle="0.5"
      :shadow-bias="-0.005"
      cast-shadow
      color="#213159"
    />

    <TresMesh
      receive-shadow
      cast-shadow
      :position="[0, 0, 0]"
    >
      <TresSphereGeometry :args="[1.5]" />
      <TresMeshStandardMaterial :shadow-side="DoubleSide" />
    </TresMesh>

    <TresMesh
      receive-shadow
      cast-shadow
      :position="[0, -3, 0]"
      :rotation="[-Math.PI / 2, 0, 0]"
    >
      <TresPlaneGeometry :args="[10, 10, 10, 10]" />
      <TresMeshStandardMaterial
        color="#f7f7f7"
        :side="DoubleSide"
      />
    </TresMesh>

    <!-- <TresMesh receive-shadow>
      <TresSphereGeometry :args="[20]" />
      <TresMeshStandardMaterial :side="DoubleSide" />
    </TresMesh> -->
  </TresCanvas>
</template>

<style>
html,
body,
#__nuxt {
  font-family: "Inter", sans-serif;
}
</style>
