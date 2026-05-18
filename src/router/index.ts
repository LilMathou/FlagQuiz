import type { RouteRecordRaw } from 'vue-router';
import PageAccueil from "@/views/PageAccueil.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: PageAccueil,
  },
];

export { routes }
