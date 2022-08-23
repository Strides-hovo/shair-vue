import axios from "axios";
import apiRoutes from "@/routes/api-routes";
import {create_translate} from "./products/mutations";

const state = {
    pages: [],
    pageLinks: []
}

const actions = {
    async SET_PAGES ({commit})  {
      const pages = await  axios.get(apiRoutes('page.index'))
        commit('SET_PAGES',pages.data.data)
    },

    async UPDATE ({commit},page)  {
      const response = await  axios.put(apiRoutes('page.update',page.id),page)
        commit('UPDATE',response.data.data)
    },


}


const mutations = {

    SET_PAGES: (state,pages) => {
        state.pages = pages
    },

    SET_PAGE_LINKS: (state, language_id) => {
        for (let page of state.pages) {
            const translate = page.translate && page.translate.language_id === language_id
                ? page.translate
                : page.translations.find(tr => tr.language_id === language_id) || {slug: null}
            state.pageLinks[page.name] = translate.slug
        }
    },

    UPDATE: (state, page) => (state.pages = state.pages.map(a => page.id === a.id ? page : a))

}


const getters = {

    GET_PAGES: (state) => (language_id = null) => {
        return language_id ?
            state.pages.map(page => {

                page.translate = page.translate && page.translate.language_id === language_id
                    ? page.translate
                    : page.translations.find(tr => tr.language_id === language_id) || page.translations[0] || {}
                return page
            })
            : state.pages
    },

    GET_ROUTES : (state) => (language_id = null) => {
        let pages = [];
        if (language_id){
            for (let page of state.pages) {
                const translate = page.translate && page.translate.language_id === language_id
                    ? page.translate
                    : page.translations.find(tr => tr.language_id === language_id) || {slug: null}

                pages[page.name] = {
                    slug: translate.slug,
                    sub_menu: page.sub_menu,
                    name: translate.name
                }

            }
        }
        else{
            pages = state.pages || []
        }

        return pages
    },


    GET_PAGE: (state) => (name,language_id) => {
        const page = state.pages.find(p => p.name === name)
        if(page){
            page.translate = create_translate(page,language_id)
        }
        console.log(page)
         return page
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}