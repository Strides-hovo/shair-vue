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
import contact from "./modules/contact";
import branch from "./modules/branch";

import Breadcrumb from "./modules/frontend/BreadCramp";
import menu from './modules/frontend/RigthSidebar'
import cart from './modules/cart'
import coupon from "./modules/coupon";
import home from "./modules/home";

const paths2 = ['lang','PhotoPage','PageVideo','products', 'Breadcrumb', 'article','category','cart' ]
const paths = ['lang', 'cart', 'products','page','menu' ]
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
    menu,
    cart,
    coupon,
    contact,
    branch,
    home
}


const dataState = createPersistedState({
    paths
})





export default new Vuex.Store({
        modules, plugins: [dataState],
});