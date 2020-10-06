<template>
  <div class="flex-container">
     
   <h3 class="header">Languages And Technologies</h3>
   <h3>As a Front-End enthusiast, I've worked with a number of technologies. I really enjoy working with JavaScript and using Vue as a framework. 
        However, despite my preference for Front-End, I am very much open to Back-End related positions as I am always keen to learn and explore different languages.</h3>

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
}
</script>

<style scoped>

.flex-container {
   display: inline-flex;  
   flex-direction: column;
}

.header {
   text-align: center;
   font-size: 3rem;
   font-weight: normal;
   padding: 0;
   margin: 0;
}

h3 {
   text-align: center;
   font-weight: normal;
   padding-bottom: 1rem;
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

.skill-text {
   text-align: center;
   font-weight: normal;
   padding: 0 0;
   max-width: 100%;
   height: auto;
}

@media only screen and (max-width: 768px) {

.skills-block-container {
    grid-template-columns: repeat(3,1fr);
    display: column;
}

}

</style>
