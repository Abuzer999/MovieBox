<script setup>
import { ref, onMounted } from 'vue'
import Swiper from './Swiper.vue'
import Top from './Top.vue'
import { useSeriesTopStore } from '@/stores/MovieStore'

const seriesStore = useSeriesTopStore()
const series = ref([])
const isLoading = ref(false)
const emit = defineEmits(['loaded'])

onMounted(() => {
  loadPage(1)
})

const loadPage = async (page) => {
  await seriesStore.getTop(page)
  series.value = seriesStore.seriesTop
  isLoading.value = true
  emit('loaded', isLoading.value)
}
</script>

<template>
  <div
    class="relative mt-main mx-auto max-w-[1250px] w-full px-[15px] sl:max-w-[850px] sb:max-w-[580px] ss:max-w-[270px]"
  >
    <Top title="Best Series" link="/topSeries" />

    <Swiper
      :items="series"
      prevButtonClass="series-prev-button"
      nextButtonClass="series-next-button"
    />
  </div>
</template>
