<script setup>
defineProps({
    imgUrl: String
})
</script>

<template>
    <div>
        <img :src="imgUrl" alt="still" class="w-full h-[300px] object-cover">
    </div>
</template>