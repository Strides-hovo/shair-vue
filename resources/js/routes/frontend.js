

const routes = [
    {
        path: '/:slug',
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
        path: '/p/:slug',
        name: 'PhotoGalleries',
        component: () => import('@frontend/pages/page-photo/pages'),
        props: true,
        meta : {
            parent: ['Home', 'PhotoGalleries' ]
        },
        children: [
            {
                path: ":id/:_slug",
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
        path: '/v/:slug',
        name: 'VideoGalleries',
        component: () => import('@frontend/pages/page-video/pages'),
        props: true,
        meta : {
            parent: ['Home', 'VideoGalleries']
        },
        children: [
            {
                path: ":id/:_slug",
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
        path: '/cart',
        name: 'Cart',
        component: () => import('@frontend/pages/cart/page'),
        props: true
    },

    // {
    //     path: '/ca/:id?/:slug',
    //     name: 'Categories',
    //     component: () => import('@frontend/pages/product/category'),
    //     props: true,
    //     meta : {
    //         parent: ['Home', 'Categories']
    //     },
    //     children: [
    //         {
    //             path: ":_id/:_slug",
    //             name: 'Product',
    //             component: () => import('@frontend/pages/product/page'),
    //             props: true,
    //             meta : {
    //                 parent: ['Home', 'Products', 'Product']
    //             }
    //         }
    //     ]
    //
    // },



    {
        path: '/ca/:id?/:slug',
        name: 'Products',
        component: () => import('@frontend/pages/product/pages'),
        props: true,
        meta : {
            parent: ['Home', 'Products']
        },
    },
    {
        path: "/pr/:id/:slug",
        name: 'Product',
        component: () => import('@frontend/pages/product/page'),
        props: true,
        meta : {
            parent: ['Home', 'Products', 'Product']
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