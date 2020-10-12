<template>
  <div id="home">
    <ImageAbout class="image-about"/>
    <Typewriter class="typewriter"/>
    <div class="title-div">
      <h2 class="title">ABOUT ME</h2>
    </div>

    <div class="experience-div blue">
      
      <div class="codeclan">
        <h4>About Me</h4>
          <p class="about-me">
            My name is Jane O'Donnell, and I'm an Edinburgh born and based Software Developer. I am passionate about design, programming and problem solving.
            I love to take on new challanges, and after graduating from Edinburgh univeristy, I moved to London to pursue a career with a digital marketing startup company.
            Creativity is extremely important to me in my work, and I love experimenting with new ideas.
            My spare time is taken up with long walks in my beautiful city and spending time with family and friends. Aside from this I'm interested in fashion and history.
          </p>
      </div>

      <div class="codeclan">
        <img class="codeclan-logo" src="../assets/edinburgh.jpg" alt="edinburgh image"/>
      </div>
    </div>

    
    <div class="experience-div">
      <div class="codeclan">
        <img class="codeclan-logo" src="../assets/codeclan.png" alt="codeclan logo"/>
      </div>
      
      <div class="codeclan">
        <h4>CodeClan</h4>
          <p class="about-me">
            At the beginning of 2020, I decided to move from London back to Edinburgh and pursue a career in Software Development.
            As the world was turned on its head, I found myself with a great opportunity to properly kick-start my journey into coding by enrolling into CodeClan. In June 2020, I began the 16 week intensive Professional Software Development Course as part of cohort E41.
            This consisted of over 800 hours of instructor-led lessons, pair-programming, code-alongs and solo and group projects. I have built up an extensive knowledge of several new languages, methodologies and technologies.
            <!-- These skills were implemented to create a range of applications on my own or as a part of a team, entirely remotely, to cement my learning and understanding. -->
          </p>
      </div>
    </div>

    <div class="resume">
      <div class="link-cv">
        <a :href="`${publicPath}jane-odonnell.pdf`" download="jane-odonnell-cv">
          <img class="download-icon" src="../assets/download-button.png" alt="download logo"/>
          <h4 class="text-cv">JANE O'DONNEL CV SOFTWARE DEVLOPER PDF</h4>
        </a>
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
  /* margin: 2rem; */
  display: flex;
  align-items: stretch;
}

.experience-div.blue {
  background-color: rgb(4, 48, 88);
  color: white;
  margin: 0;
}

.experience-div.blue img {
  padding: 1.5rem 1.5rem;
}

.codeclan {
  width: 100%;
  min-height: 100%;
}

.about-me {
  text-align: center;
  font-weight: lighter;
  padding: 1.5rem;
  text-align: justify;
  font-size: 1.2rem;
}

h4 {
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  text-decoration: underline;
}

.codeclan-logo {
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
}

.resume {
  background-color: rgb(4, 48, 88);
  height: 8.5rem;
  text-align: center;
  margin: 0 auto;
  display:flex;
}

.link-cv {
  width: 80%;
  background-color: rgb(42, 74, 104);
  height: 50%;
  margin: auto;
}

.download-icon {
  float: left;
  margin: 0 auto;
  height: 100%;
  width: auto;
  background-color: rgb(107, 135, 161);
}

.download-icon:hover {
  background-color: rgb(42, 74, 104);
}

.text-cv {
  margin: 0 auto;
  height: 100%;
  text-align: center;
  font-weight: lighter;
  text-decoration: underline;
  font-size: 1.2rem;
  top: 50%;
  color: white;
  padding: 1.5rem;
  float: left;
}

@media only screen and (max-width: 768px) {
  
.experience-div {
    display: inline-block;
  }

p {
  padding: 1rem;
  /* font-size: 20px; */
}

}

</style>
