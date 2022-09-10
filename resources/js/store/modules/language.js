
import apiRoutes from "@/routes/api-routes";

const state = {
    languages: [],
    SITE_LANGUAGE: {
        code: null
    },
    languageId: null
};

const actions = {

   async set({commit}) {
     const response = await axios.get(apiRoutes('language.index'));
    const languages = await response.data.data
        commit('setLanguages', languages)
        commit('SET_SITE_LANGUAGE')
    },

   async create({commit},language){
       try {
           let response = await axios.post(apiRoutes('language.store'), language)
           commit('add',(await response).data.data)
       }
       catch (e) {
           alert(e.response.data.message)
       }
   },

   async update({commit},language){
       let response = axios.put(apiRoutes('language.update', language.id), language)
        commit('update',(await response).data.data)
        commit('SET_SITE_LANGUAGE')
    },

    async updateStatus({commit},language){
        await axios.put(apiRoutes('language.update', language.id), { status: language.status });
        commit('updateStatus',language)
        commit('SET_SITE_LANGUAGE')
    },

   async destroy({commit},ids){
       try{
          await axios.delete(apiRoutes('language.destroy', ids), ids )
           commit('destroy',ids)
           commit('SET_SITE_LANGUAGE')
       }
       catch (e) {
           console.log(e)
       }
    }

};

const mutations = {

    setLanguages: (state, languages) => {
        state.languages = languages
        
    },

    add:(state,language) =>{
        state.languages.push(language)
    },
 
    update:(state,language) =>{
        state.languages = state.languages.map(lang => {
            return lang.id === language.id ? language : lang
        })
    },

    updateStatus: (state, language) => {
        console.log(44)
        state.languages = state.languages.map(lang => {
             lang.id === language.id ? lang.status = language.status : lang.status
            return lang
        })
    },

    destroy:(state, languageIds )=> {
        state.languages = state.languages.filter(lang => !languageIds.includes(lang.id))
    },

    SET_SITE_LANGUAGE: (state,language_id = null) =>{
        state.SITE_LANGUAGE = language_id ? state.languages.find(lang => lang.id === +language_id) : state.languages.find(l => l.status === true) || {}
        state.languageId = state.SITE_LANGUAGE.id
    },
 
    // setLanguageId: (state, language_id = null) => {
    //     state.languageId = language_id ? language_id : state.languages[0].id
    // },

    setAdminLanguageId: (state, languageId) => {
        state.languageId = languageId
    }
};

 
const getters = {

    getLanguages: (state) => state.languages,

    getActualLanguages: (state) => {
        return state.languages.filter(language => language.status === true)
    },

    getLanguageById: (state) => (id) => {
        return state.languages.find(thing => thing.id === id)
    },


    getLanguageId: (state) => {
        return state.languageId !== null 
        ? state.languageId 
        : (state.languages.length > 0 ? state.languages[0].id : null)
    },

    getLanguage: (state) => {
        return state.languageId !== null
        ? state.languages.find(thing => thing.id === state.languageId)
            : {}
    },

    GET_SITE_LANGUAGE: state => state.SITE_LANGUAGE
};

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}