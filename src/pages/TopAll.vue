<script setup>
import { ref, onMounted, watch } from 'vue'
import { useAllStore } from '@/stores/MovieStore'
import AllMovies from '../components/AllMovies.vue'
import Loader from '../components/loader/Loader.vue'

const topAll = useAllStore()
const all = ref([])
const currentAllPage = ref(2)
const totalAllPages = ref(null)
const allUpdate = ref(false)

const loadAllPage = async (page) => {
  await topAll.getAll(page)
  all.value = topAll.allTop
  totalAllPages.value = topAll.totalPages
  currentAllPage.value = page
  allUpdate.value = true
}

onMounted(() => {
  loadAllPage(currentAllPage.value)
})

watch(
  () => topAll.totalPages,
  (newTotalPages) => {
    totalAllPages.value = newTotalPages
  }
)
</script>

<template>
  <AllMovies
    v-if="allUpdate"
    :movies="all"
    :currentPage="currentAllPage"
    :totalPages="totalAllPages"
    :loadPage="loadAllPage"
  />

  <div
    v-else
    class="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-white z-50"
  >
    <Loader />
  </div>
</template>
