import { createWebHistory, createRouter } from "vue-router";

import Kalender from "./views/Kalender.vue";
import About from "./views/About.vue";
import Kontakt from "./views/Kontakt.vue";

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
