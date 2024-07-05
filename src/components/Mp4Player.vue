<script setup>
defineProps({
  Url: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="container">
    <div class="mt-detail2 w-full">
      <vue-plyr>
        <div class="plyr__video-embed">
          <iframe
            :src="Url"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </vue-plyr>
    </div>
  </div>
</template>
