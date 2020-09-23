<template>
  <div class="flex-container">
          <h2>Skills</h2>
      <div class="skills-block-container">

       <div class="skills-block">
           <img src="../assets/vue.png" alt="laptops"/>
           <h3 class="skills-text">Vue</h3>
       </div>  

       <div class="skills-block">
          <img src="../assets/react.png" alt="mobile phone"/>
          <h3 class="skills-text">React</h3>
       </div>

       <div class="skills-block">
          <img src="../assets/github.png" alt="man with camera"/>
          <h3 class="skills-text">GitHub</h3>
       </div>

       <div class="skills-block">
          <img src="../assets/logo.png" alt="computer with stats"/>
          <h3 class="skills-text">Data</h3>
       </div>

       <div class="skills-block">
          <img src="../assets/logo.png" alt="chess pieces"/>
          <h3 class="skills-text">Business</h3>
       </div>

       <div class="skills-block">
          <img src="../assets/logo.png" alt="smart watch"/>
          <h3 class="skills-text">Marketing</h3>
       </div>
    </div>
</div>

</template>

<script>

import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Work',
}
</script>

<style scoped>

.flex-container {
    display: inline-flex;  
    max-width: 100%;
    flex-direction: column;
}

.learning-flex-container h2 {
    margin: 2rem 0;
    text-align: center;
}

.skills-block-container {
    display: grid;
    grid-template-columns: repeat(6,1fr);
    gap: 2rem 2rem;
    max-width: 100%;
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    margin-bottom: 4.5rem;
}

.skills-block {
    display: block;
    flex-direction: column;
    background-color: white;
    text-align: center;
    box-shadow: 5px 5px 15px hsla(210, 6%, 42%, 0.73);
    transition: all 500ms ease-in-out;
}

.skills-block:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 15px hsla(210, 6%, 42%, 0.73);
}

img {
    max-width: 100%;
    height: auto;
}

.skills-text {
    text-align: center;
    margin: 0rem 1rem;
}

</style>
