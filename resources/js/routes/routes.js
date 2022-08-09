import { createRouter, createWebHistory } from 'vue-router'

import backend from './backend'
import frontend from './frontend'
import layout from "./layout";


const routes = frontend.concat(backend)

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});



router.beforeEach(layout);

router.beforeEach((to, from, next) => {

    if(to.fullPath.includes('admin') ){
        document.title = to.name;
    }

    if (router.hasRoute(to.name)) {
        next();
    }
});



export default router