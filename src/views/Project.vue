<template>
  <div id="projects-container">
    <div class="title-div">
      <h2 class="title">PROJECTS</h2>
    </div>

    <div class="projects-block-container">      
        <h4>Total Fitness Gym App</h4>
        <img src="../assets/gym-app-screenshot.png" alt="ruby project image"/>
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

.projects-container {
   display: flex;
   flex-wrap: wrap;
}

.projects-block-container {
  background-color: white;
  text-align: center;
  box-shadow: 5px 5px 15px hsla(210, 6%, 42%, 0.73);
  background-color: red;
}

img {
  height: 600px;
  width: 1200px;
}

</style>
