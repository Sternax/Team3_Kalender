import { createWebHistory, createRouter } from "vue-router";

import Kalender from "./Kalender.vue";
import About from "./About.vue";
import Kontakt from "./Kontakt.vue";

const routes = [
  { path: "/", component: Kalender },
  { path: "/about", component: About },
  { path: "/kontakt", component: Kontakt },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
