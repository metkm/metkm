<script setup lang="ts">
import { imagesWithIds } from './constants'
import type { Card } from './types/card'

const selected = ref<Card>()
const items = ref(imagesWithIds)
</script>

<template>
  <main
    class="grid grid-rows-[1fr_0fr] lg:grid-cols-[1fr_0fr] max-h-lvh min-h-lvh overflow-hidden transition-all duration-500"
    :class="{ 'lg:grid-cols-[1fr_1fr] lg:!grid-rows-1 !grid-rows-[1fr_1fr]': selected }"
  >
    <TheCanvas />

    <div class="flex flex-col justify-center items-center pt-4 overflow-hidden max-w-screen gap-4 lg:gap-8">
      <TransitionGroup
        move-class="transition-all"
        leave-active-class="absolute"
        leave-to-class="opacity-0"
        enter-to-class="translate-y-0"
      >
        <TheCard
          v-if="selected"
          :key="1"
          :item="selected"
        />

        <TheCards
          :key="2"
          v-model="selected"
          v-model:items="items"
        />
      </TransitionGroup>
    </div>

    <div class="flex items-center min-w-0 min-h-0 transition-all">
      <Transition
        leave-active-class="transition-all"
        enter-active-class="transition-all"
        leave-to-class="opacity-0"
        enter-from-class="opacity-0"
      >
        <section
          v-if="selected"
          class="flex flex-col gap-2 lg:gap-4 justify-between rounded-lg p-2 lg:p-4 w-full aspect-video"
        >
          <div>
            <h1>
              {{ selected.title }}
            </h1>
            <p class="text-neutral-400 text-sm">
              {{ selected.description }}
            </p>
          </div>

          <img
            :src="selected.image"
            class="rounded-lg max-h-full shadow object-cover"
          >

          <a
            :href="selected.url"
            target="_blank"
            class="hover:bg-neutral-200 w-max p-1 rounded-lg"
          >
            <IconGithub />
          </a>
        </section>
      </Transition>
    </div>
  </main>
</template>

<style>
html {
  font-family: Inter;
  background-color: #EADBC8;
  color: white;
}
</style>
