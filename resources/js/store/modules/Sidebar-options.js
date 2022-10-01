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
                url: "/admin/categories",
                text: 'Категории',
                hasItem: []
            },
            {
                url: "/admin/product",
                text: 'Продукты',
                hasItem: []
            },
            {
                url: "/admin/delivery",
                text: 'Доставка',
                hasItem: []
            },
            {
                url: "/admin/coupon",
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
                url: "/admin/translate",
                text: 'Переводы',
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
                url: "/admin/page-photo",
                text: 'Фото Галерия',
                hasItem: []
            },
            {
                url: "/admin/page-video",
                text: 'Видео Галерия',
                hasItem: []
            },
        ]
    },
    {
        url: "#",
        text: 'Страницы',
        isActive: false,
        hasItem: [
            {
                url: "/admin/about",
                text: 'About',
                hasItem: []
            },
            {
                url: "/admin/article",
                text: 'Article',
                hasItem: []
            },
            {
                url: "/admin/branches",
                text: 'Branchs',
                hasItem: []
            },
            {
                url: "/admin/main",
                text: 'Home page',
                hasItem: []
            },
            {
                url: "/admin/faq-categories",
                text: 'faq categories',
                hasItem: []
            },
            
        ]
    },
];


export default SidebarOptions;