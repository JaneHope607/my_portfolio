<template>
  <div id="home">
    <ImageAbout class="image-about"/>
    <Typewriter class="typewriter"/>
    <div class="title-div">
      <h2 class="title">ABOUT ME</h2>
    </div>
    <div class="experience-div">
      <div class="codeclan-image">
        <img src="../assets/codeclan.png" alt="codeclan logo"/>
      </div>
      <div class="codeclan text">
        <h4>CodeClan</h4>
          <p>
            My journey into coding began at CodeClan on June 2020, undertaking a 16 Week, intensive, Professional Software Development Course.
            This consisted of over 800 hours of instructor led tutoring and guidance. I have built up extensive knowledge of several new languages, working methodologies and technologies.
            These skills were implemented to create a range of applications on my own or as a part of a team, entirely remotely, to cement my learning and understanding.
          </p>
      </div>
    </div>
    <div class="title-div">
      <h2 class="title">RESUME</h2>
    </div>
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
  },

  mounted() {
    window.scrollTo(0, 0)
  }
};

</script>

<style scoped>

.title-div {
  background-color: black;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
  display: block;
  line-height: 1;
  width: 30%;
}

.title {
  color: white;
  text-align: center;
  font-weight:lighter;
  letter-spacing: 6px;
  padding: 0.5rem;
}

.experience-div {
  background-color: rgb(4, 48, 88);
  max-width: 100%;
  margin: 2rem;
}

.codeclan-text {
  height: auto;
  text-align: justify;
}

h4, p {
   color: white;
}

img {
  width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 1rem;
}

</style>
