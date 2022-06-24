import Vuex from 'vuex'

import lang from './modules/language'
import SidebarOptions from './modules/Sidebar-options'
import Portions from "./modules/Portion";
import PhotoGalleries from './modules/photoGalleries';
import VideoGalleries from "./modules/videoGalleries";
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
    modules: {
        lang,
        SidebarOptions,
        Portions,
        PhotoGalleries,
        VideoGalleries
    },
    plugins: [createPersistedState()]
})
