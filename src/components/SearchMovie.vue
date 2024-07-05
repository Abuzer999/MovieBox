<script setup>
import { StarIcon } from '@heroicons/vue/24/outline'


defineProps({
  id: Number,
  title: String,
  rate: [String, Number],
  year: String,
  imgUrl: String,
  genres: String,
  type: Boolean
})


</script>

<template>
  <router-link
    :to="'/Movie/' + id"
    class="grid grid-cols-[100px_1fr] border-b-[1px] border-[#999898] pb-[20px] last:border-none ss:grid-cols-[50px_1fr]"
  >
    <img
      :src="imgUrl"
      alt="poster"
      class="w-[100px] h-[150px] object-cover ss:h-[100px]"
    />

    <div>
      <h1 class="text-[#111827] text-[20px] font-bold ss:text-[13px]">
        {{ title }}
      </h1>
      <div>
        <div class="relative flex items-center gap-[5px] my-[12px] ss:my-[6px]">
          <StarIcon class="w-[20px] h-[20px] stroke-orange" />
          <span
            class="text-[16px] text-[#111827] leading-[100%] font-normal font-sans"
            >{{ rate }}</span
          >

          <span
            class="ml-[10px] font-sans font-bold text-[14px] text-[#ffffff] rounded-[12px] p-[3px_8px] bg-[#c0123e] ss:p-[3px_5px] ss:text-[10px]"
            v-if="type"
            >TV SERIES</span
          >
        </div>
      </div>
      <span
        class="text-[14px] font-[600] text-[#9ca3af] leading-[100%] font-sans ss:text-[10px]"
        >{{ genres }}</span
      >
    </div>
  </router-link>
</template>
