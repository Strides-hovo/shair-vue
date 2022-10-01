import apiRoutes from "@/routes/api-routes";
import {create_translate} from "./products/mutations";
import {BackendErrorHandler} from "../../helpers";

const state = {
    BRANCHES: []
}


const actions = {

   async SET({commit}){
        const response = await axios.get(apiRoutes('branch.index'))
        commit('SET',response.data.data)
    },

   async CREATE({commit},branch){
       const response = await axios.post(apiRoutes('branch.store'),branch)
           .catch(err => BackendErrorHandler(err))
       commit('CREATE',response.data.data)
    },


   async UPDATE({commit},branch){
        const response = await axios.put(apiRoutes('branch.update',branch.id),branch)
        commit('UPDATE',response.data.data)
     },

    async DESTROY({commit},branch){
         await axios.delete(apiRoutes('branch.destroy',branch.id),branch)
        commit('DESTROY',branch)
     },


}

const mutations = {

    SET: (state, branch) => {
        state.BRANCHES = branch
    },

    CREATE: (state, branch) => {
        state.BRANCHES.push(branch)
    },

    UPDATE: (state, branch) => {
        const index = state.BRANCHES.findIndex(item => item.id === branch.id)
        state.BRANCHES[index] = branch
    },

    DESTROY: (state, branch) => {
        state.BRANCHES = state.BRANCHES.filter(br => br.id !== branch.id)
    },



}

const getters = {
    GET_BRANCHES: (state) => (languageId) => {
        return state.BRANCHES.map(branch => {
            branch.translate = create_translate(branch,languageId)
            return branch
        })
    },

    GET_BRANCH: (state) => (slug, languageId) => {
        const branch = state.BRANCHES.find(branch => {
           return branch.translations?.find(tr => tr.slug === slug)
        })
        if (branch){
            branch.translate = create_translate(branch,languageId)
        }
        return branch
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}