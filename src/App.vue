<template>
  <div id="app-container">
    <div id="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/skills" class="nav-link">Skills</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
    <router-view/>
    <home-page></home-page>
  </div>
</template>

<script>
import Homepage from '@/components/HomePage.vue'

export default {
  name: "App",
  components: {
    'home-page': Homepage
  }
}
</script>

<style lang="scss">
  
html, body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #4d4d4d;
    margin-top: 50px;
    padding: 0px;
    height: 100%;
    background-color: rgb(206, 226, 236);
}

#nav {
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 5;
  justify-content: flex-end;
  align-self: center;
  background-color: whitesmoke;
  padding: 2rem;
}

.nav-link {
  margin-right: 1.5rem;
  text-decoration: none;
  color: #4d4d4d;
  
}

</style>
