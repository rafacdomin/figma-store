<template>
  <footer :class="`max-w-full flex flex-col items-center ${bgColor}`">
    <div class="m-12 grid grid-cols-4 grid-rows-2 gap-24">
      <div class="row-span-2">
        <LogoComponent :random="random" />
      </div>

      <span class="text-3xl font-bold">OBJECTS <br />THAT INSPIRE.</span>

      <ul class="col-span-2 flex flex-col text-sm gap-4">
        <li>
          <a :href="privacy">Privacy & Terms</a>
        </li>
        <li>
          <a :href="contact">Contact Us</a>
        </li>
      </ul>

      <ul class="flex gap-8 col-span-2 text-2xl">
        <li>
          <a :href="figma">FIGMA</a>
        </li>
        <li>
          <a :href="twitter">TWITTER</a>
        </li>
        <li>
          <a :href="instagram">INSTAGRAM</a>
        </li>
        <li>
          <a :href="youtube">YOUTUBE</a>
        </li>
      </ul>

      <div class="flex justify-center items-start">
        <a href="#">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM26.136 37.416H23.064L23.064 18.792C22.168 19.72 21.304 20.584 20.408 21.48L17.144 24.776L15 22.6L24.6 13L34.2 22.6L32.056 24.776L28.824 21.48C28.5254 21.1814 28.2267 20.8863 27.9281 20.5912C27.3307 20.0009 26.7334 19.4107 26.136 18.792V37.416Z"
              fill="black"
            ></path>
          </svg>
        </a>
      </div>
    </div>

    <span class="max-w-full">
      <FooterTicker />
    </span>
  </footer>
</template>

<script setup>
import LogoComponent from './logo-component.vue'
import FooterTicker from './footer-ticker.vue'
import { computed } from 'vue'

defineProps(['figma', 'twitter', 'instagram', 'youtube', 'privacy', 'contact'])

const getRandomInt = (max) => Math.floor(Math.random() * max)

const random = computed(() => getRandomInt(8))
const bgColor = computed(() => {
  switch (random.value) {
    case 0:
      return 'bg-yellow-300'
    case 2:
      return 'bg-red-300'
    case 4:
      return 'bg-red-300'
    case 5:
      return 'bg-yellow-300'
    case 6:
      return 'bg-yellow-300'
    default:
      return 'bg-violet-300'
  }
})
</script>
