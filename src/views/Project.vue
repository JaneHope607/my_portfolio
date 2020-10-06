<template>
  <div id="projects-container">
    <div class="title-div">
      <h2 class="title">PROJECTS</h2>
    </div>

    <div class="projects-block-container">      
        <h4>Total Fitness Gym App</h4>
          <!-- <img class="media-object" src="../assets/gym-app-screenshot.png" alt="ruby project image"/> -->
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
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 0 0 250px;
  height: 100%;
}

.projects-block-container {
  background-color: white;
  text-align: center;
  box-shadow: 5px 5px 15px hsla(210, 6%, 42%, 0.73);
  background-color: red;
}

</style>
