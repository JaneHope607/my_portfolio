<template>
  <div class="home">
     <ImageAbout class="image-about"/>
     <Typewriter class="typewriter"/>
  </div>
</template>

<script>

import Typewriter from '../components/Typewriter.vue';
import ImageAbout from '../components/ImageAbout.vue';

export default {
  name: 'home',
  components: {
    Typewriter,
    ImageAbout,
  }
}

</script>

<style scoped>

</style>
