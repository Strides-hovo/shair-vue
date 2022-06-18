import axios from "axios";
import apiRoutes from "../../routes/api-routes";

const state = {
    languages: []
};

const actions = {
   async allLanguages({commit}) {
       axios.get(apiRoutes('language.index')).then(response => {
            commit('setLanguage', response.data.data)
            return  response.data.data
       });
    }

};

const mutations = {
    setLanguage:(state, languages) =>{
        state.languages = languages
    }
};


const getters = {
    getLanguages(state){
        return state.languages;
    },

    getActualLanguages(state){
        return state.languages.filter(language => language.status == 1)
    },

    getLanguageById: (state) => (id) => {
        return state.languages.find(thing => thing.id === id)
      }
};

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}