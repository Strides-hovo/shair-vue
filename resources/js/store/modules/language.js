import axios from "axios";

const state = {
    language: []
};

const actions = {
    addLanguage({commit}, language) {
        commit('setLanguage', language)
    }
};

const mutations = {
    setLanguage(state, language){
        state.language.push(language)
    }
};


const getters = {
    getLanguages(){
        return [{
            name: 'ru',
            code: 'Ru',
            dir: 'ltr'
        }];
    },
    getLanguage(id){
        return id;
    }
};

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}