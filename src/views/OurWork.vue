<template>
  <main>
    <NavBar :navList="categories" />
    <ProjectsGallery />
    <QuestionSection />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProjectsGallery from "@/views/ProjectsGallery.vue";
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
    ProjectsGallery,
    QuestionSection,
  },
};
</script>
