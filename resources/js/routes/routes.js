import { createRouter, createWebHistory } from 'vue-router'

import backend from './backend'
import frontend from './frontend'
import layout from "./layout";


let routes = frontend.concat(backend)

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export const addRoute = (route) => {
    let r = routes.find(r => r.name === route.name)
    if (r){
        routes = routes.map(r => r.name === route.name ? route : r)
    }
    else{
        routes.push(route)
    }

}

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