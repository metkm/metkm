<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  icon?: string
  href?: string
}>()

const Component = defineComponent((_props, _ctx) => {
  const tag = props.href ? 'a' : 'button'

  return () => {
    return h(
      tag,
      props.href ? { target: '_blank', href: _props.href, ...props } : { ...props },
      _ctx.slots,
    )
  }
})
</script>

<template>
  <component
    :is="Component"
    class="hover:bg-black/10 active:scale-110 transition-all"
  >
    <Icon
      v-if="icon"
      :icon="icon"
      ssr
      width="38"
    />
  </component>
</template>
