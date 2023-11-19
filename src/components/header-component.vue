<template>
  <div
    class="flex justify-between items-center w-full max-w-screen-2xl px-16 py-6 bg-transparent text-sm font-medium"
  >
    <ul class="flex gap-3">
      <li
        class="flex items-center rounded-full border-2 border-black transition-all duration-300 hover:bg-black hover:text-white"
      >
        <a class="px-5" href="#shop"> SHOP </a>
      </li>
      <li
        class="flex items-center rounded-full border-2 border-black transition-all duration-300 hover:bg-black hover:text-white"
      >
        <a class="px-5" href=""> ABOUT </a>
      </li>
      <li>
        <button class="flex py-1 px-5 transition-all duration-300 hover:opacity-40">
          <img
            src="https://store.figma.com/cdn/shop/t/9/assets/icon-search.static.svg?v=50573694897280823451678219731"
            alt="search"
          />
        </button>
      </li>
    </ul>

    <h1 class="text-2xl font-bold">THE FIGMA STORE</h1>

    <ul class="flex gap-3">
      <li>
        <select
          class="rounded-full border-2 border-black pl-4 pr-10 py-1 bg-transparent w-full cursor-pointer transition-all duration-300 active:bg-black active:text-white"
          name="location"
        >
          <option value="US" selected>UNITED STATES</option>
          <option value="JP">JAPAN</option>
          <option value="BR">BRAZIL</option>
        </select>
      </li>
      <li
        class="flex items-center rounded-full border-2 border-black transition-all duration-300 hover:bg-black hover:text-white"
      >
        <a class="px-5" href=""> CART 0 </a>
      </li>
    </ul>
  </div>
</template>

<style></style>

<script setup></script>
