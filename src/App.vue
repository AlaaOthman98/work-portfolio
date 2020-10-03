<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@font-face {
  font-family: "Trump Gothic East";
  src: url("./assets/fonts/trump_gothic_east_bold.ttf");
}

body {
  font-family: "Trump Gothic East", sans-serif;
}
</style>
