<script setup lang="ts">
import { Color, Vector2, DoubleSide, PlaneGeometry } from 'three'
import vertex from '~/shader/vertex-gradient2.glsl?raw'
import noise from '~/shader/fragment-gradient2.glsl?raw'

const palette = ['#f2766b', '#586166', '#081b26', '#f2766b', '#586166', '#081b26']
const colors = palette.map(color => new Color(color))

const { onLoop } = useRenderLoop()

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

const handlePlane = (element: Element | globalThis.ComponentPublicInstance | null) => {
  if (!element || !(element instanceof PlaneGeometry)) {
    return
  }

  const degreePerPi = Math.PI * 2 / 360
  element.rotateX(degreePerPi * 90)
}
</script>

<template>
  <TresMesh>
    <TresPlaneGeometry
      :ref="handlePlane"
      :args="[6, 4, 250, 200]"
    />

    <TresShaderMaterial
      :vertex-shader="vertex"
      :fragment-shader="noise"
      :uniforms="uniforms"
      :side="DoubleSide"
    />
  </TresMesh>
</template>
