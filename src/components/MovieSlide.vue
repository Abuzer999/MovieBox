<script setup>
import Series from './icons/Series.vue'
import { StarIcon } from '@heroicons/vue/24/outline'


defineProps({
  id: Number,
  imgUrl: String,
  date: Number,
  info: String,
  title: String,
  rate: [String, Number],
  teg: String,
  isSeries: Boolean
})

</script>

<template>
  <router-link :to="'/Movie/' + id" class="relative flex flex-col max-w-[250px] w-full h-full cursor-pointer group">
    <div class="relative top-0 transition-all ease-in-out duration-[.3s] group-hover:top-[-10px] group-hover:shadow-xl">
      <Series v-if="isSeries"/>
      <img :src="imgUrl" alt="poster" class="object-cover h-[370px] w-full" />
    </div>

    <span class="text-[12px] font-bold text-[#9ca3af] mt-[12px]"
      >{{ info }}, {{ date }}</span
    >
    <h3 class="mt-[12px] text-[18px] text-[#111827] font-bold">{{ title }}</h3>

    <div class="flex items-center gap-[5px] mt-[12px]">
      <StarIcon class="w-[20px] h-[20px] stroke-orange" />
      <span class="text-[16px] text-[#111827] leading-[100%] font-normal font-sans">{{
        rate
      }}</span>
    </div>

    <p class="text-[#9ca3af] text-[14px] mt-[12px]">{{ teg }}</p>
  </router-link>
</template>