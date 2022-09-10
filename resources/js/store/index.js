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
import menu from './modules/frontend/RigthSidebar'
import Cookies from "js-cookie";

const paths = ['lang','PhotoPage','PageVideo','products', 'Breadcrumb', 'article','category' ]
const modules = {
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
    Breadcrumb,
    menu
}


const dataState = createPersistedState({
    paths,
    /*storage: {
        getItem: (key) => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
            Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
    },*/
})


/*
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
        Breadcrumb,
        menu

    },
    plugins: [dataState]
})

*/


export default new Vuex.Store({
        modules, plugins: [dataState],
});