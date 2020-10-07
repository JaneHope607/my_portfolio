<template>
  <div id="projects-container">
    
    <!-- <div class="title-div">
      <h2 class="title">PORTFOLIO</h2>
    </div> -->

    <div class="projects-block-container image">     
      <img class="media-object" src="../assets/solar-system.png" alt="solar system project image"/>
    </div>
    
    <div class="project-block-container text">
      <h4 class="project-heading">Solar System App</h4>
        <p>
          A Web Application built with React and Contentful and Tailwind CSS. Admin can list properties and user can filter properties based on bedrooms, price etc.
        </p>
    </div>

    <div class="project-block-container">
      <h4>Total Fitness Gym App</h4>
        <p>
          A Web Application built with React and Contentful and Tailwind CSS. Admin can list properties and user can filter properties based on bedrooms, price etc.
        </p>
    </div>

    <div class="projects-block-container">    
        <img class="media-object" src="../assets/gym-app.png" alt="gym app project image"/>
    </div>


    <div class="projects-block-container image">     
      <img class="media-object" src="../assets/tyrannogotchi.png" alt="tyrannogotchi project image"/>
    </div>
    
    <div class="project-block-container text">
      <h4 class="project-heading">Tyrannogotchi</h4>
        <p>
          A Web Application built with React and Contentful and Tailwind CSS. Admin can list properties and user can filter properties based on bedrooms, price etc.
        </p>
    </div>
     
  </div>
</template>

<script>

export default {
  name: 'portfolio',

  mounted() {
    window.scrollTo(0, 0)
  }
};

</script>

<style scoped>

* {box-sizing: border-box;}


.title-div {
  background-color: black;
  font-weight: normal;
  width: 20%;
  text-align: center;
  margin: 0 auto;
}

.title {
  color: white;
  text-align: center;
  font-weight: normal;
  padding: 1rem;
}

#projects-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.media-object {
  width: 100%;
  height: auto;
  text-align: center;
  box-shadow: 5px 5px 15px hsla(210, 6%, 42%, 0.73);
}

h4, p {
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
}

h4 {
  font-weight: normal;
  font-size: 2rem;
}

</style>
