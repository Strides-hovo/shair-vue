

const routes = [
    {
        path: '/:slug',
        name: 'Home',
        component: () => import('@frontend/pages/home/index'),
        props: true,
        meta : {}
    },

    {
        path: '/a/:slug',
        name: 'About',
        component: () => import('@frontend/pages/about/page'),
        meta : {
            parent: ['Home', ]
        }
    },

    {
        path: '/b/:slug',
        name: 'Articles',
        component: () => import('@frontend/pages/article/pages'),
        props: true,
        meta : {
            parent: ['Home' ]
        },
    },
    {
        path: "/ar/:slug",
        name: 'Article',
        component: () => import('@frontend/pages/article/page'),
        props: true,
        meta : {
            parent: ['Home', 'Articles']
        }
    },
    {
        path: '/c/:slug',
        name: 'PhotoGalleries',
        component: () => import('@frontend/pages/page-photo/pages'),
        props: true,
        meta : {
            parent: ['Home', ]
        },
        children: [
            {
                path: ":id/:_slug",
                name: 'PhotoGallery',
                component: () => import('@frontend/pages/page-photo/page'),
                props: true,
                meta : {
                    parent: ['Home', 'PhotoGalleries',]
                }
            },
        ]
    },
    {
        path: '/d/:slug',
        name: 'VideoGalleries',
        component: () => import('@frontend/pages/page-video/pages'),
        props: true,
        meta : {
            parent: ['Home']
        },
        children: [
            {
                path: ":id/:_slug",
                name: 'VideoGallery',
                component: () => import('@frontend/pages/page-video/page'),
                props: true,
                meta : {
                    parent: ['Home', 'VideoGalleries']
                }
            }
        ]
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('@frontend/pages/cart/page'),
        meta : {
            parent: ['Home']
        },
        // props: true
    },





    {
        path: '/e/:id?/:slug',
        name: 'Products',
        component: () => import('@frontend/pages/product/pages'),
        props: true,
        meta : {
            parent: ['Home']
        },
    },
    {
        path: "/f/:slug",
        name: 'Product',
        component: () => import('@frontend/pages/product/page'),
        props: true,
        meta : {
            parent: ['Home', 'Products']
        },


    },
    {
        path: "/r/:slug",
        name: 'Contact',
        component: () => import('@frontend/pages/contact/page'),
        props: true,
        meta : {
            parent: ['Home']
        }
    },
    {
        path: '/g/:slug',
        name: 'Branch',
        component: () => import('@frontend/pages/branch/page'),
        props: true,
        meta : {
            parent: ['Home', 'Contact' ]
        }
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