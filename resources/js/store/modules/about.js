

import axios from "axios";
import apiRoutes from "@/routes/api-routes";
import {BackendErrorHandler} from "@/helpers";
import {create_translate} from "./products/mutations";

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
        if (state.about){
            state.about.translate = create_translate(state.about,language_id)
        }

        return state.about || {translate: {language_id}}
    },


}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}