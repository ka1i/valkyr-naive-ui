import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '/@/layouts/default/index.vue'

import Request from '/@/views/Container/request/Request.vue'
import Message from '/@/views/Container/message/Message.vue'
import Dialog from '/@/views/Container/dialog/Dialog.vue'
import Notification from '/@/views/Container/notification/Notification.vue'
import LoadingBar from '/@/views/Container/loadingBar/LoadingBar.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: LayoutView,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import('/@/views/Home.vue'),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import('/@/views/Login/index.vue'),
      },
      {
        path: "/request",
        name: "Request",
        component: Request,
      },
      {
        path: "/message",
        name: "Message",
        component: Message,
      },
      {
        path: "/dialog",
        name: "Dialog",
        component: Dialog,
      },
      {
        path: "/notification",
        name: "Notification",
        component: Notification,
      },
      {
        path: "/loadingBar",
        name: "LoadingBar",
        component: LoadingBar,
      }
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
