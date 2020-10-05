<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
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
