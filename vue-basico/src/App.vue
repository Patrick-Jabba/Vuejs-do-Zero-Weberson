<template>
  <div id="app">
    <MainMenu> </MainMenu>
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

:root {
  --primary-color: #FF3D00;
  --secondary-color: #FF6E40;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;

}
</style>
