<template>
  <h2
    @mouseenter="() => onHover(true)"
    @mouseleave="() => onHover(false)"
    class="text-5xl font-bold flex flex-col gap-3 flex-wrap items-center justify-center text-center"
  >
    <span
      :class="`flex gap-3 flex-wrap [&>*]:duration-300 [&>*]:transition-all ${
        transparent ? '[&>*]:opacity-50' : ''
      }`"
    >
      <span>FIGMA'S</span>
      <img
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-burst.static.svg?v=34745811441670751621678219731"
        alt=""
      />
      <span>COLLECTION</span>
      <img
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-hourglass.static.svg?v=133626873782927219541678219731"
        alt=""
      />
      <span>OF</span>
    </span>
    <span class="flex gap-3 items-center flex-wrap [&>*]:duration-300 [&>*]:transition-all">
      <button
        @click="() => setSelected('layers')"
        :class="`underline ${
          transparent && !selected.find((val) => val === 'layers') ? 'opacity-50' : ''
        }`"
      >
        LAYERS
      </button>
      <img
        :class="`${transparent ? 'opacity-50' : ''}`"
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-zag.static.svg?v=102718930007740203771678219731"
        alt=""
      />
      <span :class="`${transparent ? 'opacity-50' : ''}`">AND</span>
      <img
        :class="`${transparent ? 'opacity-50' : ''}`"
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-dots.static.svg?v=39142388321885661271678219731"
        alt=""
      />
      <button
        @click="() => setSelected('components')"
        :class="`underline ${
          transparent && !selected.find((val) => val === 'components') ? 'opacity-50' : ''
        }`"
      >
        COMPONENTS
      </button>
      <img
        :class="`${transparent ? 'opacity-50' : ''}`"
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-sun.static.svg?v=163357932534391307201678219731"
        alt=""
      />
      <span :class="`${transparent ? 'opacity-50' : ''}`">FOR</span>
    </span>
    <span
      :class="`flex gap-3 flex-wrap [&>*]:duration-300 [&>*]:transition-all ${
        transparent ? '[&>*]:opacity-50' : ''
      }`"
    >
      <span>YOU</span>
      <img
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-comet.static.svg?v=16892712658856357451678219731"
        alt=""
      />
      <span>AND</span>
      <img
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-snake.static.svg?v=34100567131936571961678219731"
        alt=""
      />
      <span>YOUR</span>
      <img
        src="https://store.figma.com/cdn/shop/t/9/assets/word-symbol-tri.static.svg?v=32742515804419710851678219731"
        alt=""
      />
      <span>FRIENDS</span>
    </span>
  </h2>
</template>

<style scoped></style>

<script setup>
import { ref } from 'vue'

const { onChange } = defineProps(['onChange'])
const transparent = ref(false)
const selected = ref(['layers', 'components'])

const onHover = (state) => {
  transparent.value = state
}

const setSelected = (select) => {
  if (selected.value.length === 2) {
    selected.value = [select]
    onChange(selected.value)
    return
  }

  const unselect = selected.value.findIndex((value) => value === select)

  if (unselect === -1) {
    selected.value = [select]
  } else {
    selected.value = ['layers', 'components']
  }

  onChange(selected.value)
}
</script>
