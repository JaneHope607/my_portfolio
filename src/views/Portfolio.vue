<template>
  <section>
    
    <div class="title-div">
      <h2 class="title">PORTFOLIO</h2>
    </div>

    <div class="project-container">  
      <div class="project-block-container">     
        <img class="media-object" src="../assets/solar-system.png" alt="solar system project image"/>
      </div>
    
      <div class="project-block-container solar">
        <h4 class="project-heading">Solar System App</h4>
          <p>
            An interactive online browser application for the BBC targeted towards children. This app displays information on the planets in our solar system in a fun and interactive manner, with the information obtained from an external API.
            It also hosts a quiz with a leaderboard and scores. Utilised Vue.js, Express, MongoDB, HTML and CSS.
          </p>
      </div>

      <div class="project-block-container gym">
        <h4>Total Fitness Gym App</h4>
          <p>
            A web application for a gym manager to manage memberships, classes and sessions. Built using Ruby and Sinatra, and writing data to an SQL database.
            Full CRUD functionality. Utilised Ruby, Sinatra, SQL, HTML and CSS.
          </p>
      </div>

      <div class="project-block-container">    
          <img class="media-object" src="../assets/gym-app.png" alt="gym app project image"/>
      </div>

      <div class="project-block-container">     
        <img class="media-object" src="../assets/tyrannogotchi.png" alt="tyrannogotchi project image"/>
      </div>
    
      <div class="project-block-container tyrannogotchi">
        <h4 class="project-heading">Tyrannogotchi</h4>
          <p>
            A Tamagotchi-inspired web application where a user can create an account and take care of a virtual T-Rex by feeding and healing them.
            Utilised JavaScript, React, Java, Spring, CSS and Bootstrap. User authentication with Okta
          </p>
      </div>
    </div>  
  </section>
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

.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.project-block-container {
  /* margin: 1rem; */
  background-color: rgb(4, 48, 88);;
}

.media-object {
  width: 100%;
  height: auto;
  text-align: center;
  /* box-shadow: 5px 5px 15px hsla(210, 6%, 42%, 0.73); */
}

h4, p {
  text-align: center;
  margin: 0 auto;
  font-weight: lighter;
  text-align: center;
  color: white;
}

h4 {
  font-weight:lighter;
  font-size: 2rem;
}

</style>
