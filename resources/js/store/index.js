import Vuex from 'vuex'

import lang from './modules/language'
import SidebarOptions from './modules/Sidebar-options'
import Portions from "./modules/Portion";
import PhotoPage from './modules/PhotoPage';
import PageVideo from "./modules/VideoPage";
import createPersistedState from "vuex-persistedstate";
import about from './modules/about';
import category from "./modules/category";
import products from "./modules/product";



const dataState = createPersistedState({
    paths: ['lang','PhotoPage','PageVideo','products'],

})


export default new Vuex.Store({
    modules: {
        lang,
        SidebarOptions,
        Portions,
        PhotoPage,
        PageVideo,
        about,
        category,
        products
    },
    plugins: [dataState]
})

