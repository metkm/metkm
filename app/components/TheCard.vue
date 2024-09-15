<script setup lang="tsx">
import type { RGBColor } from 'colorthief'
import type { StyleValue } from 'vue'
import type { Card } from '~/types/card'

const { index = 1, item } = defineProps<{
  item: Card
  index?: number
}>()

const _color = ref<RGBColor | undefined>()
const color = computed({
  get() {
    if (!_color.value) return

    return `rgb(${_color.value?.[0]}, ${_color.value?.[1]}, ${_color.value?.[2]})`
  },
  set(val: RGBColor | undefined) {
    _color.value = val
  },
})

const container = useTemplateRef('container')
const imageElement = useTemplateRef('image')

const { tilt, roll } = useParallax(container)
const { isOutside } = useMouseInElement(container)

const bgColor = useState('bg:color')
const randomY = useState('rand', () => Math.random() * -10)

const style = computed<StyleValue>(() => {
  const aElementStyle: StyleValue | undefined = item.href
    ? {
        backgroundColor: color.value,
        color: 'white',
        border: '1px solid white',
      }
    : undefined

  const baseStyle: StyleValue = {
    transform: `translateY(${randomY.value}px) rotateZ(${index}deg)`,
    ...aElementStyle,
  }

  if (isOutside.value) {
    return baseStyle
  }

  return {
    ...baseStyle,
    transform: `rotateX(${tilt.value * 10}deg) rotateY(${roll.value * 10}deg) rotateZ(${index}deg)`,
  }
})

onMounted(async () => {
  if (!imageElement.value) return
  color.value = await getColor(imageElement.value)
})

const handleClick = () => {
  if (!imageElement.value) return
  bgColor.value = getColor(imageElement.value)
}

const Char = defineComponent(() => {
  return () => (
    <div class="flex flex-col items-center">
      <p>{item.title.at(0)}</p>

      <div class="size-2 lg:size-3 bg-black rotate-45" />
    </div>
  )
})

const Component = defineComponent((props, ctx) => {
  const tag = item.href ? 'a' : 'button'

  return () =>
    h(
      tag,
      tag === 'a'
        ? { ...props, onClick: undefined, href: item.href, target: '_blank' }
        : {
            onClick: handleClick,
            ...props,
          },
      ctx.slots,
    )
})
</script>

<template>
  <component
    :is="Component"
    ref="container"
    class="grid *:col-start-1 *:row-start-1 w-28 md:w-40 lg:w-60 aspect-[2/3] rounded-lg overflow-hidden transition-all ease-linear p-2 lg:p-3 font-serif font-bold text-xs lg:text-2xl bg-primary text-black border-2 border-on-primary drop-shadow-lg"
    :style="style"
  >
    <div class="h-full w-full p-5 lg:p-9">
      <img
        ref="image"
        :src="item.image"
        class="w-full h-full object-cover outline-4 outline outline-black transition-all outline-offset-4"
        :style="{ outlineColor: color }"
      >
    </div>

    <Char class="place-self-start" />
    <Char class="place-self-end rotate-180" />
  </component>
</template>
