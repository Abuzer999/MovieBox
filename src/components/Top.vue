<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

defineProps({
    title: String,
    link: String
})
</script>


<template>
    <div class="flex justify-between items-center ss:min-w-[260px]">
      <h2 class="font-sans font-bold text-movie text-[#000] ss:-indent-[20px]">{{ title }}</h2>
      <RouterLink 
        :to="link"
        class="flex items-center gap-text font-sans font-normal leading-[133%] text-link text-[#be123c] group"
        >See more
        <ChevronRightIcon class="relative right-0 w-[22px] h-[20px] group-hover:w-[22px] group-hover:h-[22px] group-hover:right-[10px] transition-all ease-in-out duration-[.3s]" />
      </RouterLink>
    </div>
</template>