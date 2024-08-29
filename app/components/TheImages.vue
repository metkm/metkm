<script setup lang="ts">
import gsap from 'gsap'
import type { Group, Intersection, Mesh, MeshBasicMaterial } from 'three'
import { Color, SRGBColorSpace } from 'three'
import ColorThief from 'colorthief'
import { images } from '~/constants'

const { camera, renderer } = useTresContext()
const textures = await useTexture(images)

const group = shallowRef<Group>()
const colorThief = new ColorThief()

textures.forEach((texture) => {
  texture.colorSpace = SRGBColorSpace
})

const handleClick = (event: Intersection & PointerEvent) => {
  if (!camera.value) return

  const timeline = gsap.timeline()

  const mesh = event.object as Mesh
  const material = (Array.isArray(mesh.material) ? mesh.material.at(0) : mesh.material) as MeshBasicMaterial | undefined

  if (material) {
    const image = material.map?.source.data.currentSrc as string

    if (image) {
      const element = new Image()
      element.onload = () => {
        const color = colorThief.getColor(element)

        const currentColor = new Color()
        renderer.value.getClearColor(currentColor)

        timeline.to(currentColor, {
          r: color?.[0],
          g: color?.[1],
          b: color?.[2],
          onUpdate: () => {
            renderer.value.setClearColor(`rgb(${Math.floor(currentColor.r)}, ${Math.floor(currentColor.g)}, ${Math.floor(currentColor.b)})`)
          },
        }, 'start')
      }

      element.src = image
    }
  }

  const otherChildren = group.value?.children.filter((child) => {
    return child.position.z > 0 && child.uuid !== event.object.uuid
  })

  if (otherChildren && otherChildren.length > 0) {
    const objects = otherChildren.map(child => child.position)

    timeline.to(objects, {
      z: 0,
    }, 'start')
  }

  timeline.to(camera.value.position, {
    x: event.object.position.x - 6,
  }, 'start')

  timeline.to(event.object.position, {
    z: 0.5,
  }, 'start')
}
</script>

<template>
  <TresGroup
    ref="group"
    :rotation="[-0.5, 0, 0]"
  >
    <TheImage
      v-for="(texture, index) in textures"
      :key="texture.id"
      :index="index"
      :texture="texture"
      @click="handleClick"
    />
  </TresGroup>
</template>
