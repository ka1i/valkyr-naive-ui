import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '/@/layouts/default/index.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: LayoutView,
    children: [
      { path: "/", name: "Home", component: () => import('/@/views/Home.vue'), },
      { path: "/login", name: "Login", component: () => import('/@/views/Login/index.vue'), }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
}
export default router
