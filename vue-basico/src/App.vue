<template>
  <div id="app">
    <MainMenu v-if="this.$router.currentRoute.name != 'LoginEntry'"> </MainMenu>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import MainMenu from "@/components/menu/MainMenu.vue";

export default {
  components: {
    MainMenu,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

:root {
  --primary-color: #ff3d00;
  --secondary-color: #ff6e40;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.titulo {
  font-weight: 600;
  color: #363636;
  font-size: 25px;
}

.container {
  margin-top: 15px;
}

.titulo {
  font-weight: 600px;
  color: #363636;
}

hr {
  margin: 0;
}

.sub-container {
  margin-top: 15px;
}

.btn-primary,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:focus-visible,
.btn-primary:visited,
.btn-primary:not(:disabled):not(.disabled):active {
  background-color: var(--primary-color);
  border: var(--primary-color);
  outline: none;
  box-shadow: none;
  color: #fff;
  min-width: 90px;
}

.btn-primary:hover{
  background-color: var(--secondary-color);
  color: #fff;
  border-color: var(--secondary-color);
}
</style>
