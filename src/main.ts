import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
