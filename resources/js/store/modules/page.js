import apiRoutes from "@/routes/api-routes";
import {create_translate} from "./products/mutations";

const state = {
    pages: [],
    pageLinks: []
}

const actions = {
    async SET_PAGES({commit}) {
        const pages = await axios.get(apiRoutes('page.index'))
        commit('SET_PAGES', pages.data.data)
    },

    async UPDATE_OR_CREATE({commit}, page) {
        const response = await axios.post(apiRoutes('page.firstOrCreate'), page)
        commit('UPDATE_OR_CREATE', response.data.data)
    },


}


const mutations = {

    SET_PAGES: (state, pages) => {
        state.pages = pages
    },

    SET_PAGE_LINKS: (state, language_id) => {
        for (let page of state.pages) {
            const translate = create_translate(page, language_id)
            state.pageLinks[page.name] = translate.slug
        }
    },

    UPDATE_OR_CREATE: (state, page) => {

        const isset = state.pages.find(p => p.id === page.id)
        if (isset) {
            state.pages = state.pages.map(p => p.id === page.id ? page : p)
        } else {
            state.pages.push(page)
        }


    },


    UPDATE: (state, page) => (state.pages = state.pages.map(a => page.id === a.id ? page : a))

}


const getters = {

    GET_PAGES: (state) => (language_id = null) => {
        return language_id ?
            state.pages.map(page => {
                page.translate = create_translate(page, language_id)
            })
            : state.pages
    },

    GET_ROUTES: (state) => (language_id = null) => {
        let pages = [];
        if (language_id) {
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
        } else {
            pages = state.pages || []
        }

        return pages
    },


    GET_PAGE: (state) => (name, languageId) => {
        const page = state.pages.find(p => p.name === name) || {}
        page.translate = create_translate(page, languageId)

        return page || {}
    }
}


const defaultTranslateData = {
    slug: '',
    meta_title: '',
    meta_keywords: '',
    meta_description: '',
    language_id: null
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}