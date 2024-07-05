<script setup>
import Search from './Search.vue'
</script>

<template>
  <header class="z-10">
    <div class="container relative">
      <div
        class="flex items-center justify-between gap-[20px] py-[15px] ss:justify-center ss:pl-[60px] hover:"
      >
        <router-link to="/" class="flex items-center gap-[24px] ss:absolute ss:left-[15px]">
          <img src="/header/logo.svg" alt="logo" />
          <span
            class="text-[24px] font-sans font-[700] leading-[100%] text-[#111827] sb:hidden"
            >MovieBox</span
          >
        </router-link>

        <Search />

        <div class="flex gap-links ss:hidden">
          <router-link
            to="/topSeries"
            class="text-links text-[#111827] font-sans font-normal leading-[100%] transition ease-in-out duration-300 hover:text-[#c0123e]"
            >TV Series</router-link
          >
          <router-link
            to="/topMovies"
            class="text-links text-[#111827] font-sans font-normal leading-[100%] transition ease-in-out duration-300 hover:text-[#c0123e]"
            >Movies</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>
