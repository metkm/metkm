<script setup lang="ts">
import { Vector2, Vector3 } from 'three'
import commonVertex from '~/shader/commonVertex.glsl?raw'
import noiseFrag from '~/shader/noiseFragment.glsl?raw'

const width = ref(window.innerWidth)
const height = ref(window.innerHeight)

const { onLoop } = useRenderLoop()

const uniforms = {
  resolution: { value: new Vector2(width.value, height.value) },
  targetColor: { value: new Vector3(0, 0, 0) },
  time: { value: 0 },
}

onLoop(({ elapsed }) => {
  uniforms.time.value = elapsed / 5
})

onMounted(() => {
  window.addEventListener('resize', () => {
    const val = uniforms.resolution.value as Vector2

    const w = window.innerWidth
    const h = window.innerHeight

    val.set(w, h)
    width.value = w
    height.value = h
  })
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
