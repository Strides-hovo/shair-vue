import apiRoutes from "../../../routes/api-routes";
import { create_translate } from "../products/mutations";

const state = {
    Breadcrumbs: [],
    Cramps: []
}

const actions = {

    async SET_CRAMPS({commit}){
        const response = await axios.get(apiRoutes('menus'))
        commit('SET_CRAMPS', response.data.data )
     },

}

const mutations = {

    SET_CRAMPS(state,cramps){
        state.Breadcrumbs = cramps
    },

    ADD_CRAMP (state, options ) {

        state.Cramps = state.Breadcrumbs
        .filter(br => options.names.includes(br.name))
            // .push(options.cramp )
        console.log(state.Cramps  )
    },

    
}


const getters = {

    GET_CRAMPS2: (state) => (routeNames) => {

        const breads = state.Breadcrumbs
            .filter(({name}) => routeNames?.includes(name))

        return [...new Map(breads.map((item) => [item['name'], item])).values()]
            .slice(0,3)
            .sort((a,b) => {
                const a1 = routeNames.indexOf(a.name)
                const b1 = routeNames.indexOf(b.name)
                return a1 - b1
            })
    },

    CRAMPS: (state) => {
        return state.Breadcrumbs
    },

    GET_CRAMPS: (state) => (languageId) => {
        //console.log(state.Cramps, languageId)
        return state.Cramps.map(br => {
            if (br.translations){
                br.translate = create_translate(br,languageId)
            }
            const slug = br.translate.slug
            const name = br.name
            return { name,slug }
        })
    },

}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}