<script setup>
import { ArrowLongLeftIcon } from '@heroicons/vue/24/solid'
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'


const props = defineProps({
  currentPage: Number,
  totalPages: Number,
  loadPage: Function,
});

const prev = () => {
  if (props.currentPage > 2) {
    props.loadPage(props.currentPage - 1);
    window.scrollTo({top: 0})
  }
};

const next = () => {
  if (props.currentPage < props.totalPages) {
    props.loadPage(props.currentPage + 1);
    window.scrollTo({top: 0 })
  }
};


</script>

<template>
  <div
    class="flex justify-between mt-[50px]"
    :style="{
      justifyContent: props.currentPage === 2 ? 'flex-end' : 'space-between'
    }"
  >
    <div v-if="props.currentPage > 2" @click="prev" class="flex items-center cursor-pointer">
      <ArrowLongLeftIcon class="w-[50px] h-[40px]" />
      <button class="font-sans font-bold text-[20px]">Back</button>
    </div>

    <div v-if="!(props.totalPages === currentPage)" @click="next" class="flex items-center cursor-pointer">
      <button class="font-sans font-bold text-[20px]">Next</button>
      <ArrowLongRightIcon class="w-[50px] h-[40px]" />
    </div>
  </div>
</template>
