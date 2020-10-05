<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
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
