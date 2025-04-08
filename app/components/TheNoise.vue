<script setup lang="ts">
import { Vector2, Vector3 } from 'three'
import commonVertex from '~/shader/commonVertex.glsl?raw'
import noiseFrag from '~/shader/noiseFragment.glsl?raw'

const width = window.innerWidth
const height = window.innerHeight

const { onLoop } = useRenderLoop()

const uniforms = {
  resolution: { value: new Vector2(width, height) },
  targetColor: { value: new Vector3(0, 0, 0) },
  time: { value: 0 },
}

onLoop(({ elapsed }) => {
  uniforms.time.value = elapsed / 5
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
