<template>
  <div class="flex-container">
     
    <div class="title-div">
      <h2 class="title">LANGUAGES AND TECHNOLOGIES</h2>
    </div>
      <p>As a Front-End enthusiast, I've worked with a number of technologies. I really enjoy working with JavaScript and using Vue as a framework. 
        However, despite my preference for Front-End, I am very much open to Back-End related positions as I am always keen to learn and explore different languages.
      </p>

   <div class="skills-block-container">      
      <section class="skills-block">
         <img src="../assets/java-logo.png" alt="java logo"/>
         <div class="skill-text">
            <h4>Java</h4>
         </div>
      </section>

       <section class="skills-block">
         <img src="../assets/es6.png" alt="java script es6 logo"/>
         <div class="skill-text">
            <h4>JS ES6</h4>
            </div>
       </section>

       <section class="skills-block">
         <img src="../assets/js.png" alt="java script logo"/>
         <div class="skill-text">
            <h4>JavaScript</h4>
         </div>
       </section>

       <section class="skills-block">
         <img src="../assets/ruby.png" alt="ruby logo"/>
         <div class="skill-text">
            <h4>Ruby</h4>
         </div>
       </section>

       <section class="skills-block">
         <img src="../assets/css3.png" alt="css3 logo"/>
         <div class="skill-text">
            <h4>CSS3</h4>
         </div>
       </section>

       <section class="skills-block">
         <img src="../assets/html5.png" alt="html5 logo"/>
         <div class="skill-text">
            <h4>HTML5</h4>
         </div>
       </section>

       <section class="skills-block">
         <img src="../assets/spring.png" alt="spring logo"/>
         <div class="skill-text">
            <h4>Spring</h4>
         </div>
       </section>

      <section class="skills-block">
         <img src="../assets/vue.png" alt="vue logo"/>
         <div class="skill-text">
            <h4>Vue.js</h4>
         </div>
       </section>  

      <section class="skills-block">
         <img src="../assets/react.png" alt="react logo"/>
         <div class="skill-text">
            <h4>React.js</h4>
         </div>
       </section>

      <section class="skills-block">
         <img src="../assets/express.png" alt="express.js logo"/>
         <div class="skill-text">
            <h4>Express.js</h4>
         </div>
       </section>

      <section class="skills-block">
         <img src="../assets/node.png" alt="node.js logo"/>
         <div class="skill-text">
            <h4>Node.js</h4>
         </div>
       </section>

       <section class="skills-block">
         <img src="../assets/mongodb.png" alt="mongodb logo"/>
         <div class="skill-text">
            <h4>MongoDB</h4>
         </div>
       </section>

       <section class="skills-block">
         <img src="../assets/postgresql.png" alt="posgresql logo"/>
         <div class="skill-text">
            <h4>PostgreSQL</h4>
         </div>
       </section>

       <section class="skills-block">
         <img src="../assets/github.png" alt="github logo"/>
         <div class="skill-text">
            <h4>GitHub</h4>
         </div>
       </section>

      <section class="skills-block">
         <img src="../assets/vsc.png" alt="visual studio code logo"/>
         <div class="skill-text">
            <h4>Visual Studio Code</h4>
         </div>
       </section>

   </div>
</div>

</template>

<script>

export default {
  name: 'skills',

  mounted() {
    window.scrollTo(0, 0)
  }
};

</script>

<style scoped>

.flex-container {
   display: inline-flex;  
   flex-direction: column;
}

.title-div {
  background-color: black;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
  display: block;
  line-height: 1;
  width: 100%;
}

.title {
  color: white;
  text-align: center;
  font-weight:lighter;
  letter-spacing: 6px;
  padding: 0.5rem;
}

p {
   text-align: center;
   font-weight: lighter;
   padding: 1.5rem;
   text-align: center;
}

.skills-block-container {
   display: grid;
   grid-template-columns: repeat(5,1fr);
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
   transition: all 200ms ease-in-out;
}

.skills-block:hover {
   transform: scale(1.05);
   box-shadow: 10px 10px 15px hsla(210, 6%, 42%, 0.73);
}

img {
   max-width: 100%;
   height: auto;
}

.skill-text {
   text-align: center;
   font-weight: normal;
   padding: 0 0;
   max-width: 100%;
   height: auto;
}

@media only screen and (max-width: 900px) {

.skills-block-container {
    grid-template-columns: repeat(3,1fr);
    display: column;
}

}

@media only screen and (min-width: 901px) and (max-width: 1024px) {

.skills-block-container {
    grid-template-columns: repeat(4,1fr);
    display: column;
}

}

</style>
