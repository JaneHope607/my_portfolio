<template>
  <div class="flex-container">
    <h2>Tech Stack</h2>
      <h3>As a Front-End enthusiast, I've worked with a number of technologies. I really enjoy working with JavaScript and using Vue as a framework. 
        However, despite my preference for Front-End, I am very much open to Back-End related positions as I am always keen to learn and explore different languages.</h3>
      <div class="skills-block-container">

       <section class="skills-block">
           <img src="../assets/vue.png" alt="laptops"/>
           <h3 class="skills-text">Vue.js</h3>
       </section>  

       <section class="skills-block">
          <img src="../assets/react.png" alt="mobile phone"/>
          <h3 class="skills-text">React.js</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/github.png" alt="man with camera"/>
          <h3 class="skills-text">GitHub</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/node.png" alt="computer with stats"/>
          <h3 class="skills-text">Node.js</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/mongodb.png" alt="chess pieces"/>
          <h3 class="skills-text">MongoDB</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/express.png" alt="smart watch"/>
          <h3 class="skills-text">Express.js</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/es6.png" alt="smart watch"/>
          <h3 class="skills-text">JS ES6</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/js.png" alt="smart watch"/>
          <h3 class="skills-text">JavaScript</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/css3.png" alt="smart watch"/>
          <h3 class="skills-text">CSS3</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/html5.png" alt="smart watch"/>
          <h3 class="skills-text">HTML5</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/logo.png" alt="smart watch"/>
          <h3 class="skills-text">PostgreSQL</h3>
       </section>

       <section class="skills-block">
          <img src="../assets/logo.png" alt="smart watch"/>
          <h3 class="skills-text">Spring</h3>
       </section>
    </div>
</div>

</template>

<script>

export default {
  name: 'Work',
}
</script>

<style scoped>

/* .flex-container {
    display: inline-flex;  
    max-width: 100%;
    flex-direction: column;
} */

h2 {
    margin: 4rem;
    text-align: center;
    font-size: 3rem;
    font-weight: normal;

}

h3 {
  padding-bottom: 2rem;
  text-align: center;
  font-weight: normal;
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
    margin-bottom: 1.5rem;
}

</style>
