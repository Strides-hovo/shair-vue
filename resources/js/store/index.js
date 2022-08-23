import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


import lang from './modules/language'
import SidebarOptions from './modules/Sidebar-options'
import Portions from "./modules/Portion";
import PhotoPage from './modules/PhotoPage';
import PageVideo from "./modules/VideoPage";


import category from "./modules/category";
import products from "./modules/product";

import article from './modules/article';
import about from './modules/about';
import page from "./modules/page";
import Breadcrumb from "./modules/frontend/BreadCramp";

const dataState = createPersistedState({
    paths: ['lang','PhotoPage','PageVideo','category','products', 'Breadcrumb', 'article'],
    // paths: ['lang'],

})


export default new Vuex.Store({
    modules: {
        lang,
        SidebarOptions,
        Portions,
        PhotoPage,
        PageVideo,
        
        category,
        products,

        about,
        article,
        page,
        Breadcrumb

    },
    plugins: [dataState]
})

