<template>
  <main>
    <Categories />
    <ProjectsGallery />
    <QuestionSection />
  </main>
</template>

<script>
import Categories from "@/components/Categories.vue";
import ProjectsGallery from "@/views/ProjectsGallery.vue";
import QuestionSection from "@/components/QuestionSection.vue";

export default {
  components: {
    Categories,
    ProjectsGallery,
    QuestionSection,
  },
};
</script>
