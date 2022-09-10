import apiRoutes from "@/routes/api-routes";
import {create_translate} from "../products/mutations";



const state = {
    Menus: [],
};


const actions = {
       async SET_MENUS ({commit})  {
           const response = await axios.get(apiRoutes('menus'))
           commit('SET_MENUS', response.data.data)
        } 
};


const mutations = {
    SET_MENUS: (state, menus) => {
        state.Menus = menus
    } 
};


const getters = {

    GET_MENUS: state => language_id => {
        return  state.Menus.map(menu => {
            const translate = create_translate(menu,language_id)
               const children = menu.children.map(ch => {
                    const translate = create_translate(ch,language_id)
                    return {name: ch.name,slug: translate?.slug }
                })

            if (children.length > 0){
                return {name: menu.name,slug: translate?.slug, children }
            }
            else{
                return {name: menu.name,slug: translate?.slug }
            }
        })
    }
}



export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}



