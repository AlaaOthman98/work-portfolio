<template>
  <div class="flex items-center justify-center px-10 pb-32">
    <div
      class="grid grid-cols-1 md:grid-cols-3 grid-rows-none gap-5 md:gap-x-5 md:gap-y-10 xl:w-full lg:w-11/12"
    >
      <ProjectCard
        v-for="project in tested"
        :key="project.title"
        :cardInfo="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

const projects = [
  {
    title: "AIFI",
    imageURL: "1.png",
    description: "Design, Frontend, Backend, QA",
    category: "Social",
  },
  {
    title: "Live Penalty",
    imageURL: "2.jpg",
    description: "Web, iOS, Android, QA",
    category: "Social",
  },
  {
    title: "OPKIX",
    imageURL: "3.png",
    description: "Design, Frontend, Backend, QA",
    category: "Ecommerce",
  },
  {
    title: "Heybaby",
    imageURL: "4.png",
    description: "Design, Frontend, Backend, QA",
    category: "Ecommerce",
  },
  {
    title: "Microsoft",
    imageURL: "5.png",
    description: "Design, Frontend",
    category: "Travel",
  },
  {
    title: "Classdojo",
    imageURL: "6.png",
    description: "Design, Frontend, Backend, QA",
    category: "Lifestyle",
  },
  {
    title: "Allvoices",
    imageURL: "7.png",
    description: "Frontend, Backend",
    category: "Other",
  },
];

export default {
  components: {
    ProjectCard,
  },
  computed: {
    tested() {
      const clickedCategory = this.$route.name;
      console.log(clickedCategory);
      return clickedCategory === "All"
        ? projects
        : projects.filter(project => project.category === clickedCategory);
    },
  },
};
</script>
