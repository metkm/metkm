<script setup lang="ts">
import type { Mesh } from 'three'
import { Color, Vector2 } from 'three'
import vertex from '~/shader/vertex-gradient.glsl?raw'
import noise from '~/shader/fragment-gradient.glsl?raw'

const palette = ['#f2766b', '#586166', '#081b26', '#f2766b', '#586166', '#081b26']
const colors = palette.map(color => new Color(color))

const { onLoop } = useRenderLoop()
const mesh = shallowRef<Mesh>()

const uniforms = {
  resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
  colors: { value: colors },
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
  })
})
</script>

<template>
  <TresMesh ref="mesh">
    <TresPlaneGeometry
      :args="[3.5, 2, 200, 200]"
    />

    <TresShaderMaterial
      :vertex-shader="vertex"
      :fragment-shader="noise"
      :uniforms="uniforms"
    />
  </TresMesh>
</template>
