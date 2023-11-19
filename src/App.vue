<template>
  <header class="fixed z-10 w-full flex justify-center">
    <HeaderComponent />
  </header>

  <main>
    <section class="pt-14 bg-yellow-500 w-full h-full overflow-x-hidden max-w-[99vw]">
      <DraggableSlider />
    </section>

    <section class="mt-36 mb-12">
      <ShopFilter @change="(values) => console.log(values)" />
    </section>

    <section id="shop" class="flex justify-center p-24 mx-12 p-28">
      <ShopGallery class="max-w-7xl" :items="items" />
    </section>
  </main>

  <FooterComponent />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script setup>
import HeaderComponent from './components/header-component.vue'
import ShopFilter from './components/shop-filter.vue'
import ShopGallery from './components/shop-gallery.vue'
import FooterComponent from './components/footer-component.vue'
import DraggableSlider from './components/draggable-slider.vue'
import { items } from './assets/products'
</script>
