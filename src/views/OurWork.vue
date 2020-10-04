<template>
  <main>
    <Categories />
    <ProjectsGallery />
  </main>
</template>

<script>
import Categories from "@/components/Categories.vue";
import ProjectsGallery from "@/views/ProjectsGallery.vue";

export default {
  components: {
    Categories,
    ProjectsGallery,
  },
};
</script>
