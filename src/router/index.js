import Vue from "vue";
import VueRouter from "vue-router";
import Postponement from "../views/Postponement";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: Postponement
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
