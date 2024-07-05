<template>
  <div class="container">
    <div class="flex gap-[40px] justify-center flex-wrap mt-[70px]">
      <MovieSlide
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :imgUrl="movie.imgUrl"
        :date="movie.date"
        :info="movie.info"
        :title="movie.title"
        :rate="movie.rate"
        :teg="movie.teg"
        :isSeries="movie.isSeries"
      />
    </div>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :loadPage="loadPage"
    />
  </div>
</template>

<script setup>
import MovieSlide from './MovieSlide.vue'
import Pagination from './Pagination.vue'
defineProps(['movies', 'currentPage', 'totalPages', 'loadPage'])
</script>
