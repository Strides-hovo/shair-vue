

const routes = [

    {
        path: "/admin/",
        name: 'dashboard',
        component: () => import('@backend/pages/dashboard/Dashboard'),
        props: true
    },
    {
        path: "/admin/languages",
        name: 'BackendLang',
        component: () => import('@backend/pages/lang/index'),
        props: true
    },
    {
        path: "/admin/translate",
        name: 'Translate',
        component: () => import('@backend/pages/translate/page'),
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
        name: 'BackendAbout',
        component: () => import('@backend/pages/about/index'),
        props: true,
    },
    {
        path: "/admin/article",
        name: 'BackendArticles',
        component: () => import('@backend/pages/article/pages'),
        props: true,
        children: [
            {
                path: ":id",
                name: 'BackendArticle',
                component: () => import('@backend/pages/article/page'),
                props: (route) => {
                    const props = { ...route.params }
                    props.id = Number(props.id)
                    return props
                },
            }
        ]
    },
    {
        path: "/admin/categories",
        name: 'BackendCategory',
        component: () => import('@backend/pages/category/category'),
        props: true,
    },
    {
        path: "/admin/product",
        name: 'BackendProducts',
        component: () => import('@backend/pages/products/pages'),
        props: true,
        children: [
            {
                path: ":id",
                name: 'BackendProduct',
                component: () => import('@backend/pages/products/page'),
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



export default routes