

import axios from "axios";
import apiRoutes from "../../routes/api-routes";


const state = {
    aboutes: []
}

const actions = {

    async getAllPages({ commit }) {
        let response = await axios.get(apiRoutes('about.index'))
        commit('setAll', response.data.data)
    },

    async UpdateAbout({ commit }, about) {
        let response = await axios.put(apiRoutes('about.update', about.id), about).catch(err => err)
        console.log(response)
        commit('UpdateAbout', response.data.data)
    },

    async CreatePage({commit},about){
        let response = await axios.post(apiRoutes('about.store'), about).catch(err => err)
        console.log(response)
        commit('CreatePage', response.data.data)
    }

}

const mutations = {

    setAll(state, aboutes) {
        state.aboutes = aboutes
    },
  
    UpdateAbout: (state, about ) => {
        state.aboutes.map(item => {
            if (item.id === about.id) {
                item = about
            }
        })

        console.log(state.aboutes, about )
    },
    CreatePage: (state,about) => {
        state.aboutes.push(about)
    }
}

const getters = {
    getAll(state) {
        return state.aboutes
    },

    getByLanguage: (state) => (language_id) => {
        return state.aboutes.find(about => about.language_id == language_id)
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}