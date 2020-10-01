<template>
  <div class="home">
     <Typewriter class="typewriter"/>
     <ImageAbout class="image-about"/>
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
