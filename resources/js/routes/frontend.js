

const routes = [
    {
        path: '/',
        name: 'FrontHome',
        component: () => import('@frontend/pages/home/index'),
    },
    {
        path: '/page-photo',
        name: 'FrontPagePhoto',
        component: () => import('@frontend/pages/page-photo/pages'),
        props: true,
        children: [
            {
                path: ":id/:slug",
                name: 'FrontPhoto',
                component: () => import('@frontend/pages/page-photo/page'),
                props: (route) => {
                    route.params.id = Number(route.params.id)
                    return route.params
                },
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import('@frontend/pages/NotFound'),
        props: true
    },

];


for (let route of routes ){
    route['meta'] = {}
    route['meta']['layout'] = 'frontend'
}

export default routes