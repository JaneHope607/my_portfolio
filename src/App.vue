<template>
  <div id="app-container">
      <header class="nav-container">
        <img class="logo" src="./assets/logo.png" alt="logo">
        <nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/skills" class="nav-link">Skills</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </header>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Footer
  }

}
</script>

<style>

* {
  box-sizing: border-box
}

html, body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #4d4d4d;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: white;
}

body {
  margin-top: 7rem;
}

#app-container {
  min-height: 100%;
  position: relative;
  padding-bottom: 6rem
}

.nav-container {
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  height: 6rem;
  width: 100%;
  z-index: 5;
  align-self: center;
  background-color: rgb(255, 217, 45);
  margin: 0;
}

header .logo {
  margin-left: 2rem;
  align-self: center;
  justify-content: flex-start;
  height: 8rem;
  width: auto;
}

nav {
  display: inline-flex;
  justify-content: flex-end;
  width: 100%;
  align-self: center;
}

.nav-link{
  text-align: center;
  margin-right: 4rem;
  text-decoration: none;
  color: #4d4d4d;
  font-size: 1.5rem;
}

.nav-link:hover {
  color: #f7f7fc;
}

@media only screen and (max-width: 768px) {

html {
  margin-top: 3.5rem;
  }

.logo {
    display: none;
}

#app-container {
  max-height: 100%;
}

html, body {
  font-size: 8px;
}

.mobile-container {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    transform: scale(1.1);
}

}

</style>
