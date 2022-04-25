const SidebarOptions = [
    {
        url: "/admin/orders",
        title: 'Заказы',
        isActive: false,
        hasItem: []
    },
    {
        url: "/admin/products",
        title: 'Продукты',
        isActive: false,
        hasItem: [
            {
                url: "/admin/products-create",
                title: 'Добовить новый продукт',
                hasItem: []
            },
            {
                url: "/admin/delivery",
                title: 'Доставка',
                hasItem: []
            },
            {
                url: "/admin/coupons",
                title: 'Купоны',
                hasItem: []
            },
        ]
    },
    {
        url: "#",
        title: 'Настройки',
        isActive: false,
        hasItem: [
            {
                url: "/admin/languages",
                title: 'Язык',
                hasItem: []
            },
            {
                url: "/admin/settings",
                title: 'Настройки магазина',
                hasItem: []
            },
        ]
    },
];


export default SidebarOptions;