<template>
  <div id="home">
    <ImageAbout class="image-about"/>
    <Typewriter class="typewriter"/>
    <div class="title-div">
      <h2 class="title">ABOUT ME</h2>
    </div>
    <div class="experience-div">
      <div class="codeclan">
        <img src="../assets/codeclan.png" alt="codeclan logo"/>
      </div>
      <div class="codeclan">
        <h4>CodeClan</h4>
          <p>
            My journey into coding began at CodeClan on June 2020, undertaking a 16 Week, intensive, Professional Software Development Course.
            This consisted of over 800 hours of instructor led tutoring and guidance. I have built up extensive knowledge of several new languages, working methodologies and technologies.
            These skills were implemented to create a range of applications on my own or as a part of a team, entirely remotely, to cement my learning and understanding.
          </p>
      </div>
    </div>
    <div class="resume">
      <div class="link-cv">
        <a :href="`${publicPath}jane-odonnell.pdf`" download="jane-odonnell-cv">Jane O'Donnell Curriculum Vitae Software Developer (pdf)</a>
      </div>
    </div>
  </div>
</template>

<script>

import Typewriter from '../components/Typewriter.vue';
import ImageAbout from '../components/ImageAbout.vue';

export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
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
  max-width: 100%;
  margin: 2rem;
  display: flex;
  align-items: stretch;
  
}

.codeclan {
  width: 100%;
  min-height: 100%;
}

.codeclan-image {
  background-color: red;
}

p {
  text-align: center;
  font-weight: lighter;
  padding-bottom: 1rem;
  text-align: justify;
}

h4 {
  text-align: center;
  font-size: 1.5rem;
}

img {
  height: auto;
  width: 100%;
  margin: 0 auto;
}

.resume {
  background-color: rgb(4, 48, 88);
  height: 10rem;
}

.link-cv {
  width: 80%;
  background-color: yellow;
}

a {
  text-decoration: none;
}

</style>
