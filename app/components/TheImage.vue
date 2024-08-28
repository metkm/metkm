<script setup lang="ts">
import type { Texture, Intersection } from 'three'
import gsap from 'gsap'

defineProps<{
  texture: Texture
  index: number
}>()

const { camera } = useTresContext()

let animating = false

const handlePointerEnter = ({ object }: Intersection & PointerEvent) => {
  if (animating) return

  const timeline = gsap.timeline({
    onComplete: () => {
      animating = false
    },
  })

  timeline.to(
    object.position,
    {
      z: 1,
    },
    'start',
  )

  timeline.to(
    object.scale,
    {
      z: 20,
    },
    'start',
  )

  animating = true
}

const handlePointerLeave = ({ object }: Intersection & PointerEvent) => {
  if (!animating) return

  const timeline = gsap.timeline()

  timeline.to(
    object.position,
    {
      z: 0,
    },
    'start',
  )

  timeline.to(
    object.scale,
    {
      z: 0.1,
    },
    'start',
  )

  animating = false
}

const handleClick = (event: Intersection & PointerEvent) => {
  if (!camera.value) return

  gsap.to(camera.value.position, { x: event.object.position.x, y: event.object.position.y })
}
</script>

<template>
  <TresMesh
    :position="[index * 4 - Math.floor(index / 10) * (10 * 4), -Math.floor(index / 10) * 4, 0]"
    @click="handleClick"
    @pointer-enter="handlePointerEnter"
    @pointer-leave="handlePointerLeave"
  >
    <TresBoxGeometry :args="[4, 4, 0.1]" />
    <TresMeshBasicMaterial :map="texture" />
  </TresMesh>
</template>
