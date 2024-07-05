<script setup>
import { ref, onMounted } from 'vue'
import Swiper from './Swiper.vue'
import Top from './Top.vue'
import { useMovieTopStore } from '@/stores/MovieStore'

const MovieTop = useMovieTopStore()

const movies = ref([])
const isLoading = ref(false)
const emit = defineEmits(['loaded'])

onMounted(() => {
  loadPage(1)
})

const loadPage = async (page) => {
  await MovieTop.getTop(page)
  movies.value = MovieTop.moviesTop
  isLoading.value = true
  emit('loaded', isLoading.value)
}
</script>

<template>
  <div
    class="relative mt-main mx-auto max-w-[1250px] w-full px-[15px] sl:max-w-[850px] sb:max-w-[580px] ss:max-w-[270px]"
  >
    <Top title="Best Movie" link="/topMovies" />

    <Swiper
      :items="movies"
      prevButtonClass="movie-prev-button"
      nextButtonClass="movie-next-button"
    />
  </div>
</template>
