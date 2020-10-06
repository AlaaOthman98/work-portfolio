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
      },
      {
    path: "/our-work",
    name: "OurWork",
    component: OurWork,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
