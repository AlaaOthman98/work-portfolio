import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OurWork from "../views/OurWork.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
