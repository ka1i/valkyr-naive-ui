import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layouts/index.vue";

const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [
            { path: "/", name: "Home", component: () => import('@/views/Home.vue'), }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;