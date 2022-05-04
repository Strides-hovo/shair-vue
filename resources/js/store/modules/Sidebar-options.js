const SidebarOptions = [
    {
        url: "/admin/orders",
        text: 'Заказы',
        isActive: false,
        hasItem: []
    },
    {
        url: "/admin/products",
        text: 'Продукты',
        isActive: false,
        hasItem: [
            {
                url: "/admin/products-create",
                text: 'Добовить новый продукт',
                hasItem: []
            },
            {
                url: "/admin/delivery",
                text: 'Доставка',
                hasItem: []
            },
            {
                url: "/admin/coupons",
                text: 'Купоны',
                hasItem: []
            },
        ]
    },
    {
        url: "#",
        text: 'Настройки',
        isActive: false,
        hasItem: [
            {
                url: "/admin/languages",
                text: 'Язык',
                hasItem: []
            },
            {
                url: "/admin/settings",
                text: 'Настройки магазина',
                hasItem: []
            },
        ]
    },
    {
        url: "#",
        text: 'Медиа-страницы',
        isActive: false,
        hasItem: [
            {
                url: "/admin/library",
                text: 'Библиотека',
                hasItem: []
            },
            {
                url: "/admin/photo-galleries",
                text: 'Фото Галерия',
                hasItem: []
            },
            {
                url: "/admin/video-galleries",
                text: 'Видео Галерия',
                hasItem: []
            },
        ]
    },
];


export default SidebarOptions;