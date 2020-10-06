<template>
  <main>
    <NavBar :navList="categories" />
    <router-view></router-view>
    <QuestionSection />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import QuestionSection from "@/components/QuestionSection.vue";

export default {
  data() {
    return {
      categories: [
        "all",
        "social",
        "ecommerce",
        "travel",
        "lifestyle",
        "other",
      ],
    };
  },
  components: {
    NavBar,
    QuestionSection,
  },
};
</script>
