<script setup lang="ts" generic="T extends { id: string | number, image: string }">
defineProps<{
  items: T[]
}>()
</script>

<template>
  <div class="fixed bottom-0 inset-x-0">
    <ol class="flex mx-auto max-w-max overflow-x-auto pl-14 pr-4">
      <li
        v-for="item in items"
        :key="item.id"
        class="flex shrink-0 -ml-14 perspective overflow-hidden p-4"
      >
        <PokerCard
          :image="item.image"
        />
      </li>
    </ol>
  </div>
</template>

<style>
.perspective {
  perspective: 200px;
}
</style>
