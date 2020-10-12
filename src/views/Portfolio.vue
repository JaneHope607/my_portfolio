<template>
  <section class="flex-container">
    
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
            An interactive online browser application for the BBC. This app displays information on the planets in our solar system in a fun and interactive manner,
            with the information obtained from an external API. It also hosts a quiz with a leaderboard and scores.
          </p>
          <ul>
            <li>Utilised Vue.js, Express, MongoDB, HTML and CSS.</li>
            <li>Libraries used include Bootstrap and Howler</li>
          </ul>
          <div class="link-project">
            <a href="https://github.com/JaneHope607/group_project_solar_system_app" target="_blank">
              <img class="github-logo" src="../assets/github-logo.png"/>
            </a>
          </div>
      </div>

      <div class="project-block-container gym">
        <h4>Total Fitness Gym App</h4>
          <p>
            A web application for a gym manager to manage memberships, classes and sessions. Built using Ruby and Sinatra, and writing data to an SQL database.
          </p>
          <ul>
            <li>Full CRUD functionality.</li>
            <li>Utilised Ruby, Sinatra, SQL, HTML and CSS.</li>
          </ul>
          <div class="link-project">
            <a href="https://github.com/JaneHope607/codeclan_gym_app_project" target="_blank">
              <img class="github-logo" src="../assets/github-logo.png"/>
            </a>
            <a class="link-logo" href="https://total-fitness-gym-app.herokuapp.com/" target="_blank">
              <img class="github-logo" src="../assets/link.png"/>
            </a>
          </div>
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
          </p>
          <ul>
            <li>Utilised JavaScript, React, Java, Spring, CSS and Bootstrap.</li>
            <li>User authentication with Okta.</li>
          </ul>
          <div class="link-project">
            <a href="https://github.com/JaneHope607/tyrannogotch_project_frontend" target="_blank">
              <img class="github-logo" src="../assets/github-logo.png"/>
            </a>
            <a href="https://github.com/JaneHope607/tyrannogotchi_project_backend" target="_blank">
              <img class="github-logo" src="../assets/github-logo.png"/>
            </a>
          </div> 
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

.flex-container {
   display: inline-flex;  
   flex-direction: column;
}

.title-div {
  background-color: black;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  line-height: 1;
}

.title {
  color: white;
  text-align: center;
  font-weight:lighter;
  letter-spacing: 6px;
  padding-left: 0.2rem;
}

.project-container {
   display: grid;
   grid-template-columns: repeat(2,1fr);
   gap: 1rem 1rem;
   max-width: 100%;
   margin-bottom: 4.5rem;
   margin-top: 1.5rem;
}

.project-block-container {
  height: 100%;
  position:relative
}

.project-block-container.gym {
  background-color: rgb(4, 48, 88);
  color: white;
}

.media-object {
  width: 100%;
  height: 100%;
  text-align: center;
  box-shadow: 5px 5px 15px hsla(210, 6%, 42%, 0.73);
}

h4, p, ul {
  text-align: center;
  margin: 0 auto;
  font-weight: lighter;
  text-align: center;
}

p {
  padding: 0 1rem;
  text-align: justify;
  margin-bottom: 1rem;
}

li {
  text-align: justify;
}

h4 {
  font-weight:lighter;
  font-size: 2rem;
  padding: 1.5rem;
}

.link-project {
  width: 100%;
  bottom: 0;
  margin: 0 auto;
  position: absolute;
}

.github-logo {
  padding-left: 50%;
  margin: 0 auto;
}

@media only screen and (max-width: 768px) {


}

</style>
