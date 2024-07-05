<script setup>
import Simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import SearchMovie from './SearchMovie.vue'


defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
})

</script>

<template>
  <div
    class="bg-[#f5f5f5] py-[20px] rounded-b-lg border-[2px] border-[#111827]"
  >
    <Simplebar class="custom-scrollbar">
      <div
        class="flex flex-col gap-[20px] bg-[#f5f5f5] px-[20px] max-h-[555px] h-700:max-h-[370px] ss:px-[15px] ss:max-h-[450px] h-600:max-h-[280px]"
      >
        <SearchMovie
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :imgUrl="item.imgUrl"
          :rate="item.rate"
          :year="item.year"
          :genres="item.genres"
          :type="item.type"
          class="flex gap-[20px]"
        />
      </div>
    </Simplebar>
  </div>
</template>

<style>
.custom-scrollbar {
  max-height: 555px;
  overflow: auto;

  @media((width > 650px) and (height < 700px)) {
    max-height: 370px;
  }

  @media(max-width: 650px) {
    max-height: 420px;
  }

  @media((width < 650px) and (height < 550px)) {
    max-height: 280px;
  }
}

.custom-scrollbar .simplebar-scrollbar:before {
  top: 0;
  left: 0;
  right: 10px;
  bottom: 0;
  opacity: 0;
  width: 8px;
  background-color: #c0123e;
  border-radius: 5px;
}

.custom-scrollbar.simplebar-track.simplebar-vertical
  .simplebar-scrollbar:before {
  top: 0;
  bottom: 0;
}

.custom-scrollbar .simplebar-scrollbar.simplebar-visible:before {
  opacity: 1;
}
</style>
