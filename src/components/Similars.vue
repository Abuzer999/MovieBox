<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import Similar from './Similar.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <Swiper
      :speed="800"
      :slidesPerView="5"
      :slidesPerGroup="1"
      :space-between="40"
      :breakpoints="{
        0: {
          slidesPerView: 1
        },
        400: {
          slidesPerView: 2
        },
        651: {
          slidesPerView: 3
        },
        950: {
          slidesPerView: 4
        },
        1100: {
          slidesPerView: 5
        }
      }"
      class="swiper w-full"
    >
      <SwiperSlide v-for="(item, id) in items" :key="id">
        <Similar
          :id="item.id"
          :title="item.title"
          :imgUrl="item.imgUrl"
          :isSeries="item.isSeries"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper {
  overflow: visible;
  margin-left: 0;
}
</style>
