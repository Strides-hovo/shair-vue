import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: "/",
        name: 'dashboard',
        component: () => import('./pages/Dashboard'),
        props: true
    },
    {
        path: "/languages",
        name: 'languages',
        component: () => import('./pages/Language'),
        props: true
    },
    {
        path: "/library",
        name: 'library',
        component: () => import('./pages/Library'),
        props: true
    },
    {
        path: "/photo-galleries",
        name: 'PhotoGallery',
        component: () => import('./pages/PhotoGallery'),
        props: true
    },
    {
        path: "/:pathMatch(.*)*",
        name: '404',
        component: () => import('./pages/404'),
        props: true
    },
];


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});
router.beforeEach((to, from, next) => {
    document.title = to.name;
    //console.log(router.hasRoute('languages2'),to);
    if (router.hasRoute(to.name)){
        next();
    }

});

/*router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
        console.log('failed navigation', failure)
    }

});*/
export default router