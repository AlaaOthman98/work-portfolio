import Vue from "vue";
import VueRouter from "vue-router";
import OurWork from "../views/OurWork.vue";
import ProjectsGallery from "../views/ProjectsGallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "OurWork",
    component: OurWork,
    children: [
      {
        path: "",
        name: "All",
        component: ProjectsGallery,
      },
      {
        path: "social",
        name: "Social",
        component: ProjectsGallery,
      },
      {
        path: "ecommerce",
        name: "Ecommerce",
        component: ProjectsGallery,
      },
      {
        path: "travel",
        name: "Travel",
        component: ProjectsGallery,
      },
      {
        path: "lifestyle",
        name: "Lifestyle",
        component: ProjectsGallery,
      },
      {
        path: "other",
        name: "Other",
        component: ProjectsGallery,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
