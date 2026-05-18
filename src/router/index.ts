import type { RouteRecordRaw } from 'vue-router';
import PageAccueil from "@/views/PageAccueil.vue";
import PageJouer from "@/views/PageJouer.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/jouer',
    component: PageJouer,
    name: 'Jouer'
  },
  {
    path: '/',
    component: PageAccueil,
    name: 'Accueil'
  },
];

export { routes }
