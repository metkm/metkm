<script setup lang="ts">
import { Vector2 } from 'three'
import commonVertex from '~/shader/common.vert?raw'
import noiseFrag from '~/shader/noise.frag?raw'

const width = window.innerWidth
const height = window.innerHeight

const { onLoop } = useRenderLoop()

const uniforms = {
  resolution: { value: new Vector2(width, height) },
  time: { value: 0 },
}

onLoop(({ elapsed }) => {
  uniforms.time.value = elapsed
})
</script>

<template>
  <TresMesh>
    <TresPlaneGeometry :args="[width, height]" />
    <TresShaderMaterial
      :vertex-shader="commonVertex"
      :fragment-shader="noiseFrag"
      :uniforms="uniforms"
    />
  </TresMesh>
</template>
