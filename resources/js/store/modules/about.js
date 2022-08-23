

import axios from "axios";
import apiRoutes from "@/routes/api-routes";
import {BackendErrorHandler} from "@/helpers";

const state = {
    about: { }
}

const actions = {

    async SET_PAGE({ commit }) {
        let response = await axios.get(apiRoutes('about.index'))
        commit('UPDATE_PAGE', response.data.data)
    },

    async UPDATE_PAGE({ commit }, about) {
        let response = await axios.post(apiRoutes('about.store'), about).catch(err => BackendErrorHandler(err))
        commit('UPDATE_PAGE', response.data.data)
    },



}

const mutations = {
    UPDATE_PAGE: (state, about ) => {
        state.about = about ?? state.about
    }
}

const getters = {

    GET_PAGE: (state) => (language_id) => {

         const translate = state.about.translate && state.about.translate.language_id === language_id
        ? state.about.translate
             : (state.about.translations
                 ? state.about.translations.find(tr => tr.language_id === language_id ) || {}
                 : {})


        state.about.translate = translate
        return state.about
    },


}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}