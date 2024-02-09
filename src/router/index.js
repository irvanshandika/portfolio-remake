import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const NotFound = () => import("../pages/NotFound.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
