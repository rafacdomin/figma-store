<template>
  <ul class="grid grid-cols-4 gap-x-8 gap-y-12">
    <li v-for="(item, index) in items.slice(0, 4)" :key="item.title + index">
      <ShopCard v-bind="item" />
    </li>
    <li
      v-for="(item, index) in items.slice(4, 10)"
      :key="item.title + index"
      :class="`${index === 2 || index === 3 ? 'col-span-2 row-span-2' : ''}`"
    >
      <ShopCard v-bind="item" :isBig="index === 2 || index === 3" />
    </li>
    <li v-for="(item, index) in items.slice(10, 14)" :key="item.title + index">
      <ShopCard v-bind="item" />
    </li>
    <li
      v-for="(item, index) in items.slice(14, 20)"
      :key="item.title + index"
      :class="`${index === 2 || index === 3 ? 'col-span-2 row-span-2' : ''}`"
    >
      <ShopCard v-bind="item" :isBig="index === 2 || index === 3" />
    </li>
    <li v-for="(item, index) in items.slice(20)" :key="item.title + index">
      <ShopCard v-bind="item" />
    </li>
  </ul>
</template>

<script setup>
import ShopCard from './shop-card.vue'

defineProps(['items'])
</script>
