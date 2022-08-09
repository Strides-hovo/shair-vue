

import axios from "axios";
import apiRoutes from "../../routes/api-routes";

function downloadI(uri, name) {
    let link = document.createElement("a");
    link.setAttribute('download', name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

const state = {
    categories: []
}

const actions = {

    async export(){
       await axios.get(apiRoutes('category.export')).then(response => {
           downloadI(apiRoutes('category.export'), 'name')
      })
    },

    async set({ commit }) {
        let response = await axios.get(apiRoutes('category.index'))
        commit('set', response.data.data)
    },

    async create({commit},category){
        let response = await axios.post(apiRoutes('category.store'), category).catch(err => err)
        commit('create', response.data.data)
    },

    async update({ commit }, category) {
        let response = await axios.put(apiRoutes('category.update', category.id), category).catch(err => err)
        commit('update', response.data.data)
    },

    async destroy({ commit },category){
         await axios.delete(apiRoutes('category.destroy',category.id), category).catch(err => alert(err))
        commit('destroy', category)
    },

    async updateSize({commit },size){
      const response =  await axios.put(apiRoutes('category-size.update', size.id), size).catch(err => alert(err))
        commit('updateSize',response.data.data )
    },

    async deleteSize({commit},ids){
        await axios.delete(apiRoutes('category-size.destroy', ids), ids).catch(err => alert(err))
        commit('deleteSize',ids)
    },

    async createSize({commit},size){
         let response = await axios.post(apiRoutes('category-size.store'), size).catch(err => alert(err))
        commit('createSize',response.data.data )
    }

}

const mutations = {

    set(state, categories) {
        state.categories = categories
    },

    create: (state,category) => {
        state.categories.push(category)
    },

    updateField: (state, category ) => {
        state.categories = state.categories.map(c => {
            if(c.id === category.id ){
                if (typeof category.status !== 'undefined' ){
                    c.status = category.status
                }
                else{
                    c.sorting = category.sorting
                }
            }
            return c
        })
    },

    update: (state, category ) => {
        state.categories = state.categories.map(c => {
            return c.id === category.id ? category : c
        })
    },

    destroy: (state, category ) => {
        state.categories = state.categories.filter(c => c.id !== category.id)
    },

    createSize: (state, size) =>{
        if (typeof size.category_id !== 'undefined' ){
            state.categories = state.categories.map(cat => {
                if(cat.id === size.category_id) {
                    cat.sizes.push(size)
                }
                return cat
            })
        }

    },

    updateSize: (state, size) =>{
        console.log(size)
        state.categories = state.categories.map(cat => {
            if(cat.id === size.category_id) {
                cat.sizes.map(s => {
                    return s.id === size.id ? size : s
                })
            }
            return cat
        })
    },

    deleteSize: (state, ids) => {
        state.categories = state.categories.map(c => {
            c.sizes = c.sizes.filter(size => !ids.includes(size.id))
            return c
        })
    }


}

const getters = {

    all(state) {
        return state.categories
    },

    getByLanguage: (state) => (language_id) => {
      
        return state.categories.map(category => {
            category.translate = category.translations
            .find(translate => translate.language_id === +language_id && category.id === translate.category_id ) || {}
            return category
        })
    },


    FilterSizes: (state) => (id,language_id) => {
        const res = state.categories.find(c => c.id === +id)
        const category = { ...res }
        console.log(typeof category)
        if (typeof category.translations !== 'undefined' ) {
            category.translate = category.translations
                .find(translate => translate.language_id === +language_id && category.id === translate.category_id ) || {}
            category.sizes = category.sizes.reduce((group, size) => {
                const { height } = size;
                group[height] = group[height] ?? [];
                group[height].push(size);
                return group;
            }, {});
        }

        return category
    }


}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}