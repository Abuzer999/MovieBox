<script setup>
import { StarIcon } from '@heroicons/vue/24/outline'
import GridInfo from './GridInfo.vue'

defineProps({
  id: Number,
  imgUrl: String,
  title: String,
  text: String,
  date: Number,
  teg: String,
  rate: [String, Number],
  isSeries: Boolean,
  age: String,
  critics: [Number, String],
  budget: [Number, String],
  time: [Number, String],
  country: String
})
</script>

<template>
  <div
    class="flex gap-movie justify-center mt-[30px] px-[10px] sb:flex-col sb:items-center"
  >
    <img
      :src="imgUrl"
      alt="poster"
      class="max-w-[480px] w-full h-[100%] object-cover"
    />

    <div class="flex flex-col max-w-[600px] w-full">
      <h1
        class="text-[#111827] font-semibold text-name leading-[100%] sb:text-center"
      >
        {{ title }}
      </h1>

      <div class="flex items-center gap-[20px] mt-[10px] sb:justify-center">
        <span class="text-[#111827] font-[400] text-[30px]">{{
          date
        }}</span>

        <div class="flex items-center gap-[5px]">
          <StarIcon class="w-[35px] h-[35px] stroke-orange" />
          <span
            class="text-[30px] text-[#111827] leading-[100%] font-normal font-sans"
            >{{ rate }}</span
          >
        </div>

        <span
          v-if="isSeries"
          class="font-sans font-bold text-[14px] text-[#fcfcfc] rounded-[12px] p-[3px_8px] bg-[#c0123e]"
          >TV SERIES</span
        >
      </div>

      <span class="text-[#9ca3af] text-teg sb:text-center">{{ teg }}</span>

      <span class="mt-[20px] text-[#111827] font-[500] text-[25px] sb:text-center"
        >Описание</span
      >

      <p class="text-[#111827] font-[400] text-[18px] mt-[5px] sb:text-center">
        {{ text }}
      </p>

      <div class="mt-[20px] grid grid-cols-2 gap-[20px] sb:grid-rows-3 sb:text-center">
        <GridInfo
          term="Возрастной рейтинг:"
          :definition="age + '+'"
        />
        <GridInfo term="Бюджет:" :definition="budget" />
        <GridInfo term="Оценка критики:" :definition="critics" />
        <GridInfo term="Время:" :definition="time + ' мин.'" />
        <GridInfo term="Страна:" :definition="country" class="sb:col-span-2 sb:row-span-1" />
      </div>
    </div>
  </div>
</template>
