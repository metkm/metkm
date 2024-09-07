<script setup lang="ts">
import { imagesWithIds } from './constants'
</script>

<template>
  <main class="min-h-screen">
    <PokerCards :items="imagesWithIds" />
  </main>
</template>
