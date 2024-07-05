<script setup>
import { ref, onBeforeUnmount, watch } from 'vue'
import SearchList from './SearchList.vue'
import { vAutoAnimate } from '@formkit/auto-animate'
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'
import { useSearchStore } from '@/stores/SearchStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchUse = useSearchStore()
const inpValue = ref('')
const completedSearch = ref([])
const isOpen = ref(false)

const submit = async () => {
  if (!inpValue.value || inpValue.value.trim() === '') {
    isOpen.value = false
    return
  }
  
  await searchUse.getSearch(inpValue.value)
  completedSearch.value = searchUse.search 
  isOpen.value = true 
}

const close = () => {
  isOpen.value = false
  inpValue.value = '' 
}

const closeout = () => {
  isOpen.value = false 
}

watch(() => searchUse.search, (newSearch) => {
  completedSearch.value = newSearch
})


onBeforeUnmount(() => {
  close()
})

router.beforeEach(() => {
  close()
})
</script>

<template>
  <div
    v-click-out-side="closeout"
    v-auto-animate="{ duration: 200, easing: 'linear' }"
    class="relative max-w-search w-full"
  >
    <form
      class="flex items-center gap-[20px] py-[6px] px-[10px] border-[2px] border-solid border-[#111827] rounded-[6px] activeFocus"
      @submit.prevent="submit"
    >
      <input
        class="max-w-[470px] w-full text-[16px] text-[#111827] font-normal font-jost leading-[150%] placeholder-[#111827] ss:text-[15px]"
        type="text"
        placeholder="Введите название фильма"
        v-model="inpValue"
      />
      <img
        class="w-[14px] h-[14px] cursor-pointer"
        src="/header/loup.svg"
        alt="loup"
        @click="submit"
      />
    </form>

    <SearchList
      v-if="isOpen && completedSearch.length > 0 && !searchUse.isLoading"
      :items="completedSearch"
      class="absolute top-[42px] left-0 -z-[1] w-full"
    />

    <div
      v-else-if="isOpen && completedSearch.length === 0 && !searchUse.isLoading"
      class="absolute top-[42px] left-0 -z-[1] w-full bg-[#f5f5f5] py-[20px] rounded-b-lg border-[2px] border-[#111827] text-center"
    >
      <p>ничего не найдено</p>
    </div>

  </div>
</template>
