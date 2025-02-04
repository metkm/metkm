<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  icon?: string
}>()
</script>

<template>
  <button class="hover:bg-black/10 active:scale-110 transition-all">
    <Icon
      v-if="icon"
      :icon="icon"
      ssr
      width="38"
    />
  </button>
</template>
