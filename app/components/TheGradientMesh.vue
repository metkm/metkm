<script setup lang="ts">
import { Color, Vector2, DoubleSide, PlaneGeometry } from 'three'
import vertex from '~/shader/vertex-gradient2.glsl?raw'
import noise from '~/shader/fragment-gradient2.glsl?raw'

const _colors = [
  ['#f2766b', '#586166', '#081b26'],
  ['#BFA7F3', '#BC316A', '#160C40'],
  ['#d08dd8', '#075056', '#2b160e'],
  ['#b2d98b', '#7a572c', '#231c1a'],
]
const _color = _colors[Math.floor(Math.random() * _colors.length)]!

const palette = [..._color]

const colors = palette.map(color => new Color(color))
console.log(colors)

const { onLoop } = useRenderLoop()

const uniforms = {
  resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
  color1: { value: colors[0] },
  color2: { value: colors[1] },
  color3: { value: colors[2] },
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

  const degreePerPi = (Math.PI * 2) / 360
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
