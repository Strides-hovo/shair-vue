import apiRoutes from "@/routes/api-routes";
import {create_translate} from "./products/mutations";
import {BackendErrorHandler} from "../../helpers";



const state = {
    PAGE:  {}
}


const actions = {

    async SET({commit}){
        const response = await axios.get(apiRoutes('home.index'))
        commit('SET',response.data.data)
    },

    async CREATE({commit},page){
        const response = await axios.post(apiRoutes('home.store'),page)
            .catch(err => BackendErrorHandler(err))
        commit('SET',response.data.data)
    },


    async CREATE_ICON({commit}, {page, icon}){

        const response = await axios.post(apiRoutes('home.icon.store',page.id), {icon, page})
            .catch(err => BackendErrorHandler(err))
        commit('SET',response.data.data)
    },

    async UPDATE_ICON({commit},  icon){
        const response = await axios.put(apiRoutes('home.icon.update',icon.id), icon)
            .catch(err => BackendErrorHandler(err))
        commit('UPDATE_ICON',response.data.data)
    },

    async DELETE_ICON({commit},  icon){
         await axios.delete(apiRoutes('home.icon.destroy',icon.id), icon)
            .catch(err => BackendErrorHandler(err))
        commit('DELETE_ICON',icon)
    },

}

const mutations = {

    SET: (state, page) => {
        state.PAGE = page
    },

    UPDATE_ICON: (state, icon) => {
        const index = state.PAGE.icons.findIndex(i => i.id === icon.id)

        state.PAGE.icons[index]['icon'] = icon['icon']
        state.PAGE.icons[index]['translations'] = icon['translations'] ?? state.PAGE.icons[index]['translations']
    },

    DELETE_ICON: (state, icon) => {
         state.PAGE.icons = state.PAGE.icons.filter(i => i.id !== icon.id)
    },


}

const getters = {
    GET_PAGE: (state) => (languageId) => {
        if (state.PAGE){
            state.PAGE.translate = create_translate(state.PAGE,languageId)
            if (state.PAGE.icons ){
                state.PAGE.icons = state.PAGE.icons.map(icon => {
                    icon.translate = create_translate(icon,languageId)
                    return icon
                })
            }
            if (state.PAGE.page ){
                state.PAGE.page.translate = create_translate(state.PAGE.page,languageId)
            }

            if (state.PAGE.articles ){
                state.PAGE.articles = state.PAGE.articles.map(article => {
                    article.translate = create_translate(article,languageId)
                    return article
                })
            }

        }

        return state.PAGE || {translate: {language_id: languageId}}
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}