<script setup>
import { ref, onMounted, watch } from 'vue'
import { useMovieTopStore } from '@/stores/MovieStore'
import AllMovies from '../components/AllMovies.vue'
import Loader from '../components/loader/Loader.vue'

const top = useMovieTopStore()
const movies = ref([])
const currentPage = ref(2)
const totalPagesMovie = ref(null)
const allUpdate = ref(false)

const loadPage = async (page) => {
  await top.getTop(page)
  movies.value = top.moviesTop
  totalPagesMovie.value = top.totalPages
  currentPage.value = page
  allUpdate.value = true
}

onMounted(() => {
  loadPage(currentPage.value)
})

watch(
  () => top.totalPages,
  (newTotalPages) => {
    totalPagesMovie.value = newTotalPages
  }
)
</script>

<template>
  <AllMovies
    v-if="allUpdate"
    :movies="movies"
    :currentPage="currentPage"
    :totalPages="totalPagesMovie"
    :loadPage="loadPage"
  />

  <div
    v-else
    class="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-white z-50"
  >
    <Loader />
  </div>
</template>
