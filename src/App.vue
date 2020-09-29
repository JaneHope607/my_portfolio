<template>
  <div id="app-container">
    <div id="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/skills" class="nav-link">Skills</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",

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
    background-color: #f7f7fc;
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
  background-color: rgb(214, 179, 22);
  padding: 2rem;
}

.nav-link {
  margin-right: 5rem;
  text-decoration: none;
  color: #4d4d4d;
  font-size: 1.5rem;
}

.nav-link:hover {
  color: #f7f7fc;
}

</style>
