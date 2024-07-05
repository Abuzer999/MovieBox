<script setup>
import MovieScreen from './MovieScreen.vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ChevronLeftIcon } from '@heroicons/vue/24/solid'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
const modules = ref([Navigation])
const swiper = ref(null)
defineProps({
  items: {
    type: Object,
    requred: true,
    default: () => ({})
  }
})
</script>

<template>
  <div class="relative px-[15px] mx-[auto]">
    <Swiper
      ref="swiper"
      :grabCursor="true"
      :modules="modules"
      :speed="800"
      :navigation="{ prevEl: '.prevStill', nextEl: '.nextStill' }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        951: {
          slidesPerView: 2,
          spaceBetween: 40,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }"
      class="relative h-full"
    >
      <swiper-slide v-for="item in items" :key="item.id">
        <MovieScreen :imgUrl="item.imgUrl" />
      </swiper-slide>
    </Swiper>

    <button
      class="prevStill absolute top-[120px] left-[-30px] z-10 ss:hidden"
    >
      <ChevronLeftIcon
        class="w-[40px] h-[40px] fill-[#6b7280] ss:w-[25px] ss:h-[25px]"
      />
    </button>

    <button
      class="nextStill absolute top-[120px] right-[-30px] z-10 ss:hidden"
    >
      <ChevronRightIcon
        class="w-[40px] h-[40px] fill-[#6b7280] ss:w-[25px] ss:h-[25px]"
      />
    </button>
  </div>
</template>

<style>

</style>
