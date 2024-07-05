<script setup>
defineProps({
  term: String,
  definition: [String, Number]
})
</script>

<template>
  <dl>
    <dt class="text-[#111827] font-[500] text-info">{{ term }}</dt>
    <dd class="text-[#111827] font-[400] text-info">
      {{ definition }}
    </dd>
  </dl>
</template>
