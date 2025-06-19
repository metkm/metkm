<script setup lang="ts">
import { Vector2, Vector3 } from 'three'
import commonVertex from '~/shader/commonVertex.glsl?raw'
import noiseFrag from '~/shader/noiseFragment.glsl?raw'

const width = window.innerWidth
const height = window.innerHeight

const { onLoop } = useRenderLoop()

const uniforms = {
  resolution: { value: new Vector2(width, height) },
  targetColor: { value: new Vector3(242 / 255, 118 / 255, 107 / 255) },
  backgroundColor: { value: new Vector3(8 / 255, 27 / 255, 38 / 255) },
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
