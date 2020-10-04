<template>
  <div class="flex items-center justify-center px-10 pb-32">
    <div
      class="grid grid-cols-1 md:grid-cols-3 grid-rows-none gap-5 md:gap-x-5 md:gap-y-10 xl:w-full lg:w-11/12"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :cardInfo="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  data() {
    return {
      projects: [
        {
          title: "AIFI",
          imageURL: "1.png",
          description: "Design, Frontend, Backend, QA",
        },
        {
          title: "Live Penalty",
          imageURL: "2.jpg",
          description: "Web, iOS, Android, QA",
        },
        {
          title: "OPKIX",
          imageURL: "3.png",
          description: "Design, Frontend, Backend, QA",
        },
        {
          title: "Heybaby",
          imageURL: "4.png",
          description: "Design, Frontend, Backend, QA",
        },
        {
          title: "Microsoft",
          imageURL: "5.png",
          description: "Design, Frontend",
        },
        {
          title: "Classdojo",
          imageURL: "6.png",
          description: "Design, Frontend, Backend, QA",
        },
        {
          title: "Allvoices",
          imageURL: "7.png",
          description: "Frontend, Backend",
        },
      ],
    };
  },
  components: {
    ProjectCard,
  },
};
</script>
