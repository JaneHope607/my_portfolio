<template>
  <div id="app-container">
    <header class="nav-container">
      <img class="logo" src="./assets/logo.png" alt="logo">
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",

}
</script>

<style lang="scss">

* {
  box-sizing: border-box
}

html, body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #4d4d4d;
  margin-top: 6rem;
  padding: 0px;
  background-color: #f7f7fc;
}

#app-container {
  max-height: 100%;
  max-width: 100%;
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
  background-color: rgb(214, 179, 22);
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

</style>
