import {filter} from "lodash";
import actions from "./products/actions";
import mutations from "./products/mutations";
import {TranslateProducts} from "./products/mutations";
import {create_translate} from "./products/mutations";
import {GroupSizes} from "../../helpers";

const state = {

    PRODUCTS_TR: [],
    languageId: null,
};

const getters = {


    GET_PRODUCTS_TR_CAT: (state) => (languageId, type = null, categoryId = null, name = null) => {

        let products = state.PRODUCTS_TR.map(product => {
            product.translate = create_translate(product, languageId);
            if (product.category) {
                product.category.translate = create_translate(product.category, languageId);
            }
            product.photos = product.photos?.map(photo => {
                photo.translate = create_translate(photo, languageId);
                return photo
            })
            return product;
        }).filter(product => type ? product[type] === true : product)

        if (categoryId) {
            products = products.filter(product => product.category_id === categoryId)
        }

        if (name) {
            products = products.filter(product => product.translate?.name.includes(name))
        }

        return products

    },


    GET_PRODUCT: (state) => (id, languageId) => {

        const res = state.PRODUCTS_TR.find((product) => product.id === Number(id))
        const product = {...res}

        if ('id' in product ){
            product.sizes = GroupSizes(res.sizes) || {}

            product.translate = create_translate(product, languageId);
            product.photos = product.photos.map((photo) => {
                photo.translate = create_translate(photo, languageId);
                return photo;
            });
        }
        return product;
    },

    GET_PRODUCTS_BY_IDS: (state) => (ids, languageId) => {
        return state.PRODUCTS_TR
            .filter((product) => ids.includes(product.id))
            .map(product => {
                product.translate = create_translate(product, languageId);
                if (!product.category) {
                    product.category = {}
                }
                product.category.translate = create_translate(product.category, languageId);
                return product
            }) || []
    },

    GET_PRODUCTS_FILTER: (state) => (languageId, category_id = "", name = null) => {
                let products = state.PRODUCTS_TR.map((pr) => {
                    pr.translate = create_translate(pr, languageId);
                    if (pr.category) {
                        pr.category.translate = create_translate(pr.category, languageId);
                    }

                    return pr;
                });

                if (category_id) {
                    products = products.filter((pr) => pr.category_id === category_id);
                }

                if (name) {
                    products = products.filter((pr) => pr.translate.name?.includes(name));
                }

                return products;
            },

    GET_PRODUCTS: (state) => (languageId) => {
        return state.PRODUCTS_TR.map((pr) => {
            pr.translate = create_translate(pr, languageId);
            pr.category.translate = create_translate(pr.category, languageId);

            return pr;
        });
    },



};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
