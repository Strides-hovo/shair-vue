const SidebarOptions = [
    {
        url: "/orders",
        text: 'Заказы',
        isActive: false,
        hasItem: []
    },
    {
        url: "/products",
        text: 'Продукты',
        isActive: false,
        hasItem: [
            {
                url: "/products-create",
                text: 'Добовить новый продукт',
                hasItem: []
            },
            {
                url: "/delivery",
                text: 'Доставка',
                hasItem: []
            },
            {
                url: "/coupons",
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
                url: "/languages",
                text: 'Язык',
                hasItem: []
            },
            {
                url: "/settings",
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
                url: "/library",
                text: 'Библиотека',
                hasItem: []
            },
            {
                url: "/photo-galleries",
                text: 'Фото Галерия',
                hasItem: []
            },
            {
                url: "/video-galleries",
                text: 'Видео Галерия',
                hasItem: []
            },
        ]
    },
];


export default SidebarOptions;