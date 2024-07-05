<script setup>
import HeaderModule from './components/HeaderModule.vue'
</script>

<template>
  <div class="wrapper">
    <HeaderModule />
    <main class="main">
      <router-view v-slot="{ Component }">
        <keep-alive include="Movies">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>
