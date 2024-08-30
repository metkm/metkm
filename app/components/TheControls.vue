<script setup lang="ts">
import { extend } from '@tresjs/core'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { EffectComposer, RenderPass, SAOPass, SSAARenderPass, SSRPass } from 'three/examples/jsm/Addons.js'

const { renderer, scene, camera } = useTresContext()
const { render } = useLoop()

extend({ OrbitControls })

const composer = new EffectComposer(renderer.value)
composer.addPass(new RenderPass(scene.value, camera.value!))
composer.addPass(new SSAARenderPass(
  scene.value,
  camera.value!,
))
composer.addPass(new SAOPass(scene.value, camera.value!))
composer.addPass(new SSRPass({
  camera: camera.value!,
  renderer: renderer.value,
  scene: scene.value,
  isPerspectiveCamera: true,
  selects: null,
  groundReflector: null,
}))

render(() => {
  composer.render()
})
</script>

<template>
  <TresOrbitControls
    v-if="renderer"
    :args="[camera, renderer?.domElement]"
  />
</template>
