import apiRoutes from "@/routes/api-routes";
import {create_translate} from "./products/mutations";


const state = {
    ARTICLES: [],
};

const actions = {

    async SET_ARTICLES({commit}, frontend = 0) {
        console.log(frontend)
        const articles = await axios.get(apiRoutes("article.index"), {params: {frontend}})
        commit("SET_ARTICLES", articles.data.data);
    },

    async DESTROY({commit}, id) {
        await axios.delete(apiRoutes("article.destroy", id));
        commit('DESTROY', id)
    },


    async UPDATE({commit}, article) {
        const response = await axios.put(apiRoutes("article.update", article.id), article);
        console.log(response.data.data)
        commit("UPDATE", response.data.data);
    },

    async CREATE({commit}, article) {
        const response = await window.axios.post(apiRoutes("article.store"), article);
        commit("CREATE", response.data.data);
    }

};

const mutations = {

    SET_ARTICLES: (state, articles) => (state.ARTICLES = articles),

    DESTROY: (state, id) => (state.ARTICLES = state.ARTICLES.filter(article => article.id !== id)),

    UPDATE: (state, article) => (state.ARTICLES = state.ARTICLES.map(a => article.id === a.id ? article : a)),

    CREATE: (state, article) => (state.ARTICLES.push(article))

};


const getters = {

    GET_ARTICLES: state => (language_id, name = null) => {

        let articles = state.ARTICLES.map(article => {
            article.translate = create_translate(article, language_id)
            article.page.translate = create_translate(article.page, language_id)
            if (article.recommended && article.recommended.length > 0) {
                article.recommended.translate = create_translate(article.recommended, language_id)
            }

            return article
        })
        if (name) {
            articles = articles.filter(article => article.translate.name?.includes(name))
        }

        return articles

    },

    GET_ARTICLES_TR: state => (language_id) => {
        return state.ARTICLES.map(article => {
            article.translate = create_translate(article, language_id)
            article.page.translate = create_translate(article.page, language_id)
            if (article.recommended && article.recommended.length > 0) {
                article.recommended.map(rec => {
                    rec.translate = create_translate(rec, language_id)
                })
            }

            return article
        })
    },

    GET_ARTICLE: state => (id, language_id) => {

        const article = state.ARTICLES.find(article => article.id === Number(id))
        article.translate = create_translate(article, language_id)
        if (article.product){
            article.product.translate = create_translate(article.product, language_id) || {}
        }

        return article
    }

};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}