import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        name: 'dashboard',
        component: () => import('@/pages/dashboard/Dashboard'),
        props: true
    },
    {
        path: "/languages",
        name: 'Lang',
        component: () => import('@/pages/lang/index'),
        props: true
    },
    {
        path: "/library",
        name: 'library',
        component: () => import('@/pages/library/Library'),
        props: true
    },
    {
        path: "/photo-galleries",
        name: 'PhotoGalleries',
        component: () => import('@/pages/photo-galleries/index'),
        props: true,
        children: [
            {
                path: ":id",
                name: 'PhotoGallery',
                component: () => import('@/pages/photo-galleries/photo-gallery/index'),
                props: true
            }
        ]
    },
    {
        path: "/video-galleries",
        name: 'VideoGalleries',
        component: () => import('@/pages/video-galleries/index'),
        props: true,
        children: [
            {
                path: ":id",
                name: 'VideoGallery',
                component: () => import('@/pages/video-galleries/video-gallery/index'),
                props: true
            }
        ]
    },

    {
        path: "/:pathMatch(.*)*",
        name: '404',
        component: () => import('@/pages/404'),
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
    if (router.hasRoute(to.name)) {
        next();
    }

});

/*router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
        console.log('failed navigation', failure)
    }

});*/
export default router