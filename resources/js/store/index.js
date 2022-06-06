import Vuex from 'vuex'

// import language from './modules/language'
import SidebarOptions from './modules/Sidebar-options'
import Portions from "./modules/Portion";


export default new Vuex.Store({
    modules: {
        // language,
        SidebarOptions,
        Portions
    }
})
