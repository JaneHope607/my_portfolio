<template>
  <div id="home">
    <ImageAbout class="image-about"/>
    <Typewriter class="typewriter"/>
    <div class="title-div">
      <h2 class="title">SOFTWARE DEVELOPMENT EXPERIENCE</h2>
    </div>
    <div class="experience-div">
      <div class="codeclan-image">
        <img src="../assets/codeclan.png" alt="codeclan logo"/>
      </div>
      <div class="codeclan text">
        <h4>CodeClan</h4>
          <p>
            My journey into coding began at CodeClan on May the Fourth 2020, undertaking a 16 Week, intensive, Professional Software Development Course.
            This consisted of over 800 hours of instructor led tutoring and guidance. I have built up exctensive knowledge of several new languages, working methodologies and technologies.
            These skills were implemented to create a range of applications on my own or as a part of a team, entirely remotely, to cement my learning and understanding.
          </p>
      </div>
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
  width: 50%;
  text-align: center;
  margin: 0 auto;
}

.title {
  color: white;
  text-align: center;
  font-weight: normal;
  padding: 0.5rem;
}

.experience-div {
  background-color: rgb(255, 217, 45);
  display: flex;
  width: 100%;padding: 2rem;
}

.codeclan-text {
  width: 40%;
  height: auto;
}

img {
  height: 60%;
  width: auto;
}

</style>
