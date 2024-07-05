<script setup>
import { ref, onMounted } from 'vue'
import Swiper from './Swiper.vue'
import Top from './Top.vue'
import { useAllStore } from '@/stores/MovieStore'

const allTopStore = useAllStore()
const all = ref([])
const emit = defineEmits(['loaded'])
const isLoading = ref(false)

onMounted(() => {
  loadPage(1)
})

const loadPage = async (page) => {
  await allTopStore.getAll(page)
  all.value = allTopStore.allTop
  isLoading.value = true
  emit('loaded', isLoading.value)
}
</script>

<template>
  <div
    class="relative mt-main mx-auto max-w-[1250px] w-full px-[15px] sl:max-w-[850px] sb:max-w-[580px] ss:max-w-[270px]"
  >
    <Top title="Top All" link="/topAll" />
    
    <Swiper
      prevButtonClass="all-prev-button"
      nextButtonClass="all-next-button"
      :items="all"
    />
  </div>
</template>
