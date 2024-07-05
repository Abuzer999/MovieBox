<script setup>
    defineProps({
        id: Number,
        imgUrl: String,
        title: String,
        isSeries: Boolean
    })
</script>


<template>
    <router-link :to="'/Movie/' + id" class="relative group">
        <img :src="imgUrl" alt="poster" class="w-[200px] h-[300px] object-cover ss:w-full relative top-0 transition-all ease-in-out duration-[.3s] group-hover:top-[-10px] group-hover:shadow-xl">

        <h3 class="mt-[12px] text-[18px] text-[#111827] font-bold">{{ title }}</h3>
    </router-link>
</template>