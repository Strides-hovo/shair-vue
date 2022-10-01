import apiRoutes from "@/routes/api-routes";
import {create_translate} from "./products/mutations";
import {BackendErrorHandler} from "../../helpers";

const state = {
    CONTACT: {}
}


const actions = {

   async SET({commit}){
        const response = await axios.get(apiRoutes('contact.index'))
        commit('SET',response.data.data)
    },

   async UPDATE_OR_CREATE({commit},contact){
       const response = await axios.post(apiRoutes('contact.store'),contact)
           .catch(err => BackendErrorHandler(err))
       commit('UPDATE_OR_CREATE',response.data.data)
    },


   async UPDATE({commit},contact){
        const response = await axios.put(apiRoutes('contact.update',contact.id),contact)
        commit('UPDATE',response.data.data)
     },

    async SEND_MAIL({commit},mail){
        const response = await axios.post(apiRoutes('contact.send.mail'),mail)
            .catch(err => BackendErrorHandler(err))

     },


}

const mutations = {

    SET: (state, contact) => {
        state.CONTACT = contact
    },

    UPDATE_OR_CREATE: (state, contact) => {
        state.CONTACT = contact
    },

}

const getters = {
    GET_CONTACT: (state) => (languageId) => {
        state.CONTACT.translate = create_translate(state.CONTACT,languageId)
        return state.CONTACT
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}