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
    margin: 0px;
    padding: 0px;
    height: 100%;

}

#nav {
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4rem;
  z-index: 5;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  align-self: center;
}

.nav-link {
  margin-right: 1.5rem;
  text-decoration: none;
  color: #4d4d4d;
  
}

// #app {
//     background: url('./assets/SKYLINE.png');
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     height: 100%;
// }

</style>
