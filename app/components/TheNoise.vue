<script setup lang="ts">
import { Vector2, Vector3 } from 'three'
import { defaultBackground } from '~/constants'
import commonVertex from '~/shader/common.vert?raw'
import noiseFrag from '~/shader/noise.frag?raw'

const width = window.innerWidth
const height = window.innerHeight

const { onLoop } = useRenderLoop()
const bgColor = useState<number[]>('bg:color', () => defaultBackground)

const output = useTransition(bgColor)

const uniforms = {
  resolution: { value: new Vector2(width, height) },
  targetColor: { value: new Vector3(...bgColor.value) },
  time: { value: 0 },
}

onLoop(({ elapsed }) => {
  uniforms.time.value = elapsed
})

watch(output, async () => {
  const [r, g, b] = output.value
  uniforms.targetColor.value.set(r! / 255, g! / 255, b! / 255)
}, {
  immediate: true,
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
