import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";

export const routes = [
  { path: "/", component: Home },
  // { path: "/about", component: AboutView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
