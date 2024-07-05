<script setup>
import { ref, onMounted, watch } from 'vue'
import { useSeriesTopStore } from '@/stores/MovieStore'
import AllMovies from '../components/AllMovies.vue'
import Loader from '../components/loader/Loader.vue'

const seriesTop = useSeriesTopStore()
const series = ref([])
const currentSeriesPage = ref(2)
const totalSeriesPages = ref(null)
const allUpdate = ref(false)

const loadSeriesPage = async (page) => {
  await seriesTop.getTop(page)
  series.value = seriesTop.seriesTop
  totalSeriesPages.value = seriesTop.totalPages
  currentSeriesPage.value = page
  allUpdate.value = true
}

onMounted(() => {
  loadSeriesPage(currentSeriesPage.value)
})

watch(
  () => seriesTop.totalPages,
  (newTotalPages) => {
    totalSeriesPages.value = newTotalPages
  }
)
</script>

<template>
  <AllMovies
    v-if="allUpdate"
    :movies="series"
    :currentPage="currentSeriesPage"
    :totalPages="totalSeriesPages"
    :loadPage="loadSeriesPage"
  />

  <div
    v-else
    class="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-white z-50"
  >
    <Loader />
  </div>
</template>
