<template>
  <div id="app">
    <Header />
    <NavModal />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavModal from "@/components/NavModal.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    NavModal,
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
