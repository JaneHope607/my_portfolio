<template>
  <div id="projects-container">
    <div class="title-div">
      <h2 class="title">PORTFOLIO</h2>
    </div>

    <div class="projects-block-container">      
        <h4>Solar System App</h4>
          <img class="media-object" src="../assets/solar-system.png" alt="solar system project image"/>
          <p>A Web Application built with React and Contentful and Tailwind CSS. Admin can list properties and user can filter properties based on bedrooms, price etc.</p>
    </div>

    <div class="projects-block-container">      
        <h4>Total Fitness Gym App</h4>
          <img class="media-object" src="../assets/gym-app.png" alt="gym app project image"/>
    </div>

    <div class="projects-block-container">      
        <h4>Tyrannogotchi</h4>
          <img class="media-object" src="../assets/tyrannogotchi.png" alt="tyrannogotchi project image"/>
    </div>
     
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


h4 {
  text-align: center;
  font-weight: normal;
  padding: 1.5rem;
  font-size: 2rem;
  border-bottom: 0.2rem rgb(197, 195, 195) solid;
  width: 50%;
  margin: 0 auto;
}

.projects-block-container {
  text-align: center;
}

p {
  background-color: grey;
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
