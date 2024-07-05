<script setup>
import SwiperMovie from '../components/SwiperMovie.vue'
import SwiperSeries from '../components/SwiperSeries.vue'
import SwiperAll from '../components/SwiperAll.vue'
import Loader from '../components/loader/Loader.vue'
import { ref, computed } from 'vue'

const isAllLoaded = ref(false)
const isMovieLoaded = ref(false)
const isSeriesLoaded = ref(false)

const allLoaded = () => {
  isAllLoaded.value = true
}

const movieLoaded = () => {
  isMovieLoaded.value = true
}

const seriesLoaded = () => {
  isSeriesLoaded.value = true
}

const isLoading = computed(() => {
  return !(isAllLoaded.value && isMovieLoaded.value && isSeriesLoaded.value)
})

</script>

<template>
    <div
    v-if="isLoading"
    class="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-white z-50"
  >
    <Loader />
  </div>

  <section>
    <SwiperAll @loaded="allLoaded"/>
    <SwiperMovie @loaded="movieLoaded"/>
    <SwiperSeries @loaded="seriesLoaded"/>
  </section>

</template>
