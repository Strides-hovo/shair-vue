import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/admin",
        name: 'dashboard',
        component: () => import('./components/Dashboard'),
        props: true
    },
    {
        path: "/admin/languages",
        name: 'languages',
        component: () => import('./components/Language'),
        props: true
    },

];


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router