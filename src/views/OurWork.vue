<template>
  <main>
    <ProjectCategories />
    <ProjectsGallery />
  </main>
</template>

<script>
import ProjectCategories from "@/components/ProjectCategories.vue";
import ProjectsGallery from "@/views/ProjectsGallery.vue";

export default {
  components: {
    ProjectCategories,
    ProjectsGallery,
  },
};
</script>
