<script setup lang="ts">
import { Vector2, Vector3 } from 'three'
import commonVertex from '~/shader/commonVertex.glsl?raw'
import noiseFrag from '~/shader/noiseFragment.glsl?raw'

const width = window.innerWidth
const height = window.innerHeight

const { onLoop } = useRenderLoop()
const bgColor = useState('bg:color', () => [217 / 255, 207 / 255, 193 / 255])

const uniforms = {
  resolution: { value: new Vector2(width, height) },
  targetColor: { value: new Vector3(...bgColor.value) },
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
