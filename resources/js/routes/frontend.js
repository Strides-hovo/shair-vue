

const routes = [
    {
        path: '',
        name: 'Home',
        component: () => import('@frontend/pages/home/index'),
        meta : {}
    },

    {
        path: '/a/:slug',
        name: 'About',
        component: () => import('@frontend/pages/about/page'),
        meta : {
            parent: ['Home', 'About' ]
        }
    },
    {
        path: '/b/:slug',
        name: 'Articles',
        component: () => import('@frontend/pages/article/pages'),
        props: true,
        meta : {
            parent: ['Home', 'Articles' ]
        },
        children: [
            {
                path: ":id/:_slug",
                name: 'Article',
                component: () => import('@frontend/pages/article/page'),
                props: true,
                meta : {
                    parent: ['Home', 'Articles', 'Article' ]
                }
            },

        ]
    },

    {
        path: '/page-photo',
        name: 'PhotoGalleries',
        component: () => import('@frontend/pages/page-photo/pages'),
        props: true,
        meta : {
            parent: ['Home', 'PhotoGalleries' ]
        },
        children: [
            {
                path: ":id/:slug",
                name: 'PhotoGallery',
                component: () => import('@frontend/pages/page-photo/page'),
                props: true,
                meta : {
                    parent: ['Home', 'PhotoGalleries', 'PhotoGallery' ]
                }
            },


        ]
    },
    {
        path: '/page-video',
        name: 'VideoGalleries',
        component: () => import('@frontend/pages/page-video/pages'),
        props: true,
        meta : {
            parent: ['Home', 'VideoGalleries']
        },
        children: [
            {
                path: ":id/:slug",
                name: 'VideoGallery',
                component: () => import('@frontend/pages/page-video/page'),
                props: true,
                meta : {
                    parent: ['Home', 'VideoGalleries', 'VideoGallery']
                }
            }
        ]
    },


    
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import('@frontend/pages/NotFound'),
        props: true,
        meta : {
            parent: ['Home', 'NotFound']
        },
    },

];




export default routes