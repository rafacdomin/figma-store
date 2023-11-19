<template>
  <a class="flex flex-col max-h-[42rem]" href="">
    <div
      @mouseenter="onHover"
      @mouseleave="onHover"
      class="relative rounded-3xl mb-2 overflow-hidden [&>*]:duration-300 [&>*]:transition-all [&>*]:hover:opacity-100"
    >
      <img :class="`object-cover w-full ${isBig ? '' : 'max-h-96'}`" :src="image" :alt="title" />

      <img
        class="absolute inset-0 object-cover h-full w-full rounded-3xl border-2 border-black opacity-0 pointer-events-none"
        :src="background"
        alt=""
        aria-hidden="true"
      />

      <img
        class="absolute inset-0 object-cover h-full w-full opacity-0 pointer-events-none"
        :src="detailImage"
        alt=""
        aria-hidden="true"
      />
    </div>

    <div class="flex justify-between items-start text-xl gap-x-2">
      <div>
        <span v-if="isNew" class="text-emerald-500">New!</span>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>
      <span class="font-medium">{{ price }}</span>
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue'

defineProps(['image', 'background', 'detailImage', 'isNew', 'title', 'price', 'isBig'])

const hidden = ref(true)

const onHover = () => {
  hidden.value = !hidden.value
}
</script>
