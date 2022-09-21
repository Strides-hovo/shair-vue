// noinspection JSUnresolvedVariable


import apiRoutes from "../../routes/api-routes";
import {BackendErrorHandler, export_data, GroupSizes} from '../../helpers'

import {create_translate} from "./products/mutations";


const state = {
    categories: [],
    FRONT_CATEGORIES: [],
    FRONT_PRODUCTS: []
}

const actions = {

    async export() {
        await axios.get(apiRoutes('category.export')).then(response => {
            export_data(apiRoutes('category.export'), 'name')
        })
    },

    async set({commit}) {
        let response = await axios.get(apiRoutes('category.index'))
        commit('set', response.data.data)
    },



    async SET_PRODUCTS_BY_CATEGORY({commit}) {
        let response = await axios.get(apiRoutes("category.index"), {params: {frontend: true}});
        commit("SET_FRONT_PRODUCTS", (await response.data.data));
    },


    async create({commit}, category) {
        await axios.post(apiRoutes('category.store'), category)
            .then(response => {
                commit('create', response.data.data)
            })
            .catch(err => BackendErrorHandler(err))

    },

    async update({commit}, category) {
        await axios.put(apiRoutes('category.update', category.id), category)
            .then(response => {
                commit('update', response.data.data)
            })
            .catch(err => BackendErrorHandler(err))
    },

    async destroy({commit}, category) {
        await axios.delete(apiRoutes('category.destroy', category.id), category)
            .then(response => {
                commit('destroy', category)
            })
            .catch(err => BackendErrorHandler(err))

    },

    async createSize({commit}, size) {
        const response = await axios.post(apiRoutes('category-size.store'), size)
            .catch(err => BackendErrorHandler(err))
        commit('createSize', response.data.data)

    },

    async updateSize({commit}, size) {
        await axios.put(apiRoutes('category-size.update', size.id), size)
            .then(response => {
                commit('updateSize', response.data.data)
            })
            .catch(err => BackendErrorHandler(err))

    },

    async deleteSize({commit}, ids) {
        await axios.delete(apiRoutes('category-size.destroy', ids), ids)
            .then(response => {
                commit('deleteSize', ids)
            })
            .catch(err => BackendErrorHandler(err))
    },

}

const mutations = {

    set(state, categories) {
        state.categories = categories
    },



    SET_FRONT_PRODUCTS(state, products) {
        state.FRONT_PRODUCTS = products;
    },

    create: (state, category) => {
        state.categories.push(category)
    },

    updateField: (state, category) => {
        state.categories = state.categories.map(c => {
            if (c.id === category.id) {
                if (typeof category.status !== 'undefined') {
                    c.status = category.status
                } else {
                    c.sorting = category.sorting
                }
            }
            return c
        })
    },

    update: (state, category) => {
        state.categories = state.categories.map(c => {
            return c.id === category.id ? category : c
        })
    },

    destroy: (state, category) => {
        state.categories = state.categories.filter(c => c.id !== category.id)
    },

    createSize: (state, size) => {
        const index = state.categories.findIndex(item => item.id === size.category_id)
        if (index !== -1) {
            state.categories[index].sizes.push(size)
        }

    },

    updateSize: (state, size) => {
        const index = state.categories.findIndex(item => item.id === size.category_id)
        if (index !== -1) {
            state.categories[index].size = size
        }
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
            category.translate = create_translate(category, language_id)
            return category
        })
    },


    FilterSizes: (state) => (id, language_id) => {
        const res = state.categories.find(c => c.id === Number(id)) || {}
        const category = {...res}

        if ('id' in category) {
            category.sizes = GroupSizes(category.sizes) || {}
            category.translate = create_translate(category, language_id)
        }

        return category
    },


    GET_CATEGORIES_PRODUCTS: (state) => (languageId) => {
        return state.FRONT_PRODUCTS.map(category => {
            category.translate = create_translate(category, languageId);
            /*category.products = category.products.map(product => {
                product.translate = create_translate(product, languageId);
                product.sizes = GroupSizes(product.sizes)
                product.photos = product.photos.map(photo => {
                    photo.translate = create_translate(photo, languageId);
                    return photo
                })
                return product
            })*/
            return category
        })
    },


    GET_CATEGORY_PRODUCTS: (state) => (languageId, cat_id = null) => {
        state.FRONT_PRODUCTS = state.FRONT_PRODUCTS.map(category => {
            category.translate = create_translate(category, languageId);
            if (category && 'products' in category) {
                category.products = category.products.map(product => {
                    product.translate = create_translate(product, languageId);
                    product.sizes = GroupSizes(product.sizes)
                    product.photos = product.photos.map(photo => {
                        photo.translate = create_translate(photo, languageId);
                        return photo
                    })
                    return product
                })
            }
            return category
        })

        if (cat_id) {
            return state.FRONT_PRODUCTS.find(cat => cat.id === Number(cat_id))
        }
        return state.FRONT_PRODUCTS
    },

    GET_PRODUCT: (state) => (id, languageId) => {

        const product = state.FRONT_PRODUCTS.map(category => {
            return category.products.find((product) => product.id === Number(id))
        }).find(product => product)

        if (product && 'id' in product) {
            product.sizes = GroupSizes(product.sizes) || {}
            product.translate = create_translate(product, languageId);
            product.photos = product.photos.map((photo) => {
                photo.translate = create_translate(photo, languageId);
                return photo;
            });
        }

        return product
    },


    GET_FRONT_CATEGORY: (state) => (id, languageId) => {
        const category = state.categories.find(cat => cat.id === Number(id))
        if (category) {
            category.translate = create_translate(category, languageId);
        }
        return category
    },


    GET_FRONT_CATEGORIES: (state) => ( languageId) => {
        return state.categories
            .filter(category => category.products.length)
            .map(category => {
                category.translate = create_translate(category, languageId);
            return category
        })
    }

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}