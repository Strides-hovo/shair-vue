

const routes = [

    {
        path: "/admin/",
        name: 'dashboard',
        component: () => import('@backend/pages/dashboard/Dashboard'),
        props: true
    },
    {
        path: "/admin/languages",
        name: 'Lang',
        component: () => import('@backend/pages/lang/index'),
        props: true
    },
    {
        path: "/admin/library",
        name: 'library',
        component: () => import('@backend/pages/library/Library'),
        props: true
    },
    {
        path: "/admin/page-photo",
        name: 'BackendPagePhoto',
        component: () => import('@backend/pages/page-photo/index'),
        props: true,
        children: [
            {
                path: ":id",
                name: 'BackendPhoto',
                component: () => import('@backend/pages/page-photo/page/index'),
                props: true
            }
        ]
    },
    {
        path: "/admin/page-video",
        name: 'BackendPageVideo',
        component: () => import('@backend/pages/page-video/index'),
        props: true,
        children: [
            {
                path: ":id",
                name: 'BackendVideo',
                component: () => import('@backend/pages/page-video/page/index'),
                props: true
            }
        ]
    },
    {
        path: "/admin/about",
        name: 'AboutPage',
        component: () => import('@backend/pages/about/index'),
        props: true,
    },
    {
        path: "/admin/categories",
        name: 'Category',
        component: () => import('@backend/pages/category/index'),
        props: true,
    },
    {
        path: "/admin/product",
        name: 'Products',
        component: () => import('@backend/pages/products/index'),
        props: true,
        children: [
            {
                path: ":id",
                name: 'Product',
                component: () => import('@backend/pages/products/product/index'),
                props: true
            }
        ]
    },

    {
        path: "/admin/:pathMatch(.*)*",
        name: '404',
        component: () => import('@backend/pages/404'),
        props: true
    },
];

for (let route of routes ){
    route['meta'] = {}
    route['meta']['layout'] = 'backend'
}

export default routes