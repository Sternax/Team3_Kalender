import { createWebHistory, createRouter } from "vue-router";

import Kalender from "./views/Kalender.vue";
import About from "./views/About.vue";
import Boka from "./views/Boka.vue";

const routes = [
  { path: "/", component: Kalender },
  { path: "/about", component: About },
  { path: "/boka", component: Boka }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
