<template>
  <div id="projects-container">
    <div class="title-div">
      <h2 class="title">PORTFOLIO</h2>
    </div>

    <section class="projects-block-container">     
        <div class="project-image">
          <img class="media-object" src="../assets/solar-system.png" alt="solar system project image"/>
        </div>
        <div class="project-text">
          <h4 class="project-heading">Solar System App</h4>
            <p>
              A Web Application built with React and Contentful and Tailwind CSS. Admin can list properties and user can filter properties based on bedrooms, price etc.
            </p>
        </div>
    </section>

    <section class="projects-block-container">    
      <div class="project-image">  
        <img class="media-object" src="../assets/gym-app.png" alt="gym app project image"/>
      </div>
      <div class="project-text">
        <h4>Total Fitness Gym App</h4>
          <p>
            A Web Application built with React and Contentful and Tailwind CSS. Admin can list properties and user can filter properties based on bedrooms, price etc.
          </p>
       </div>
    </section>

    <section class="projects-block-container">    
      <div class="project-image">  
        <img class="media-object" src="../assets/tyrannogotchi.png" alt="tyrannogotchi project image"/>
      </div>
      <div class="project-text">
        <h4>Tyrannogotchi</h4>
          <p>
            A Web Application built with React and Contentful and Tailwind CSS. Admin can list properties and user can filter properties based on bedrooms, price etc.
          </p>
       </div>
    </section>
     
  </div>
</template>

<script>

</script>

<style scoped>

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

/* h4 {
  text-align: center;
  font-weight: normal;
  padding: 1.5rem;
  font-size: 2rem;
  border-bottom: 0.15rem rgb(197, 195, 195) solid;
  width: 50%;
  margin: 0 auto;
} */

.projects-block-container {
  text-align: center;
  background-color: red;
  display: flex;
  margin: 2rem;
}


.media-object {
  width: 60%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  box-shadow: 5px 5px 15px hsla(210, 6%, 42%, 0.73);
  margin: 2rem;
}

</style>
