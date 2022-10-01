import apiRoutes from "@/routes/api-routes";
import {create_translate} from "../products/mutations";



const state = {
    Menus: [],
    Cramps: []
};


const actions = {
       async SET_MENUS ({commit})  {
           const response = await axios.get(apiRoutes('menus'))
           commit('SET_MENUS', response.data.data)
        } 
};


const mutations = {

    SET_MENUS: (state, menus) => {
        state.Menus = menus
    },

    ADD_CRAMP (state, options ) {

        state.Cramps = state.Menus
            .filter(br => options.names.includes(br.name))
        if (state.Cramps.length){
            state.Cramps.push({name: options.cramp, slug: 'ss'} )
        }
    },
};


const getters = {

    GET_MENUS: state => language_id => {
        return  state.Menus.map(menu => {
            const translate = create_translate(menu,language_id)
               const children = menu.children.map(ch => {
                    const translate = create_translate(ch,language_id)
                    return {name: ch.name,slug: translate?.slug }
                })

            if (children.length > 0){
                return {name: menu.name,slug: translate?.slug, children }
            }
            else{
                return {name: menu.name,slug: translate?.slug }
            }
        })
    },


    GET_CRAMPS: (state) => (languageId) => {

        const a =  state.Cramps.map(br => {
            const name = br.name
            if (br.translations){
                br.translate = create_translate(br,languageId)
                const slug = br.translate.slug
                return { name,slug }
            }
            else{
                return name
            }
        })

        return a
    },

}



export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}



