<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ChevronLeftIcon } from '@heroicons/vue/24/solid'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import MovieSlide from './MovieSlide.vue'

const modules = ref([Navigation])
const swiperRef = ref()

const router = useRouter()
const handleClick = (id) => {
  router.push(`/movie/${id}`)
}

defineProps({
  items: {
    type: Object,
    requred: true,
    default: () => ({})
  },

  prevButtonClass: {
    type: String,
    default: 'button-prev'
  },
  nextButtonClass: {
    type: String,
    default: 'button-next'
  }
})

</script>

<template>

  <swiper
    ref="swiperRef"
    :speed="800"
    :modules="modules"
    :allowTouchMove="false"
    :navigation="{ prevEl: `.${prevButtonClass}`, nextEl: `.${nextButtonClass}` }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1
      },

      651: {
        slidesPerView: 2,
        spaceBetween: 40,
        allowTouchMove: true,
        slidesPerGroup: 2
      },

      951: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3
      },

      1390: {
        slidesPerView: 4,
        spaceBetween: 80,
        slidesPerGroup: 4
      }
    }"
    class="swiper-container"
    
  >
    <swiper-slide v-for="item in items" :key="item.id" @click="handleClick(item.id)">
      <MovieSlide
        :id="item.id"
        :imgUrl="item.imgUrl"
        :info="item.info"
        :title="item.title"
        :rate="item.rate"
        :teg="item.teg"
        :date="item.date"
        :isSeries="item.isSeries"
      />
    </swiper-slide>
  </swiper>

  <button :class="prevButtonClass + ' absolute top-[250px] -left-[60px] sb:top-[240px] sb:-left-[40px] ss:-left-[20px] z-[2] '">
    <ChevronLeftIcon class="w-[40px] h-[40px] fill-[#6b7280] ss:w-[25px] ss:h-[25px]" />
  </button>

  <button :class="nextButtonClass + ' absolute top-[250px] -right-[60px] sb:top-[240px] sb:-right-[40px] ss:-right-[20px] z-[2] '">
    <ChevronRightIcon class="w-[40px] h-[40px] fill-[#6b7280] ss:w-[25px] ss:h-[25px]" />
  </button>
</template>

<style>
.swiper-button-disabled {
  opacity: 0.3;
}

.swiper-slide {
  height: auto;
}


.swiper.swiper-container {
  position: relative;
  padding-top: 44px;
}


</style>
