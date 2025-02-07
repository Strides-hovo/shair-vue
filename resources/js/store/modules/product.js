import actions from "./products/actions";
import mutations from "./products/mutations";
import {TranslateProducts} from "./products/mutations";
import {create_translate} from "./products/mutations";
import {FrontGroupSizes, GroupSizes} from "../../helpers";
import router from "../../routes/routes";


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

        if ('id' in product) {
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

    GET_PRODUCTS: ( state ) => (languageId) => {
        const prs = state.PRODUCTS_TR
            .filter(product => product.status)
            .map((pr) => {
            pr.translate = create_translate(pr, languageId);
            if (pr.category) {
                pr.category.translate = create_translate(pr.category, languageId);
            }
            return pr;
        });
        return prs
    },


    GET_FRONT_PRODUCTS: (state) => (languageId, category_id = null) => {
        let products;
        if (category_id) {
            products = state.PRODUCTS_TR
                .filter(product => product.category_id === Number(category_id))
        } else {
            products = state.PRODUCTS_TR
        }
        return products
            .filter(product => product.status)
            .map(product => product_translate(product, languageId))

    },

    /*GET_FRONT_PRODUCT: (state) => (id, languageId) => {
        const product = state.PRODUCTS_TR.find(product => product.id === Number(id))
        if (product){
            return product_translate(product, languageId)
        }
    },*/

    GET_FRONT_PRODUCT: (state) => (slug, languageId) => {
        const product = state.PRODUCTS_TR.find(product => {
            return product.translations?.find(tr => tr.slug === slug)
        })
        if (product){
            product.translate = create_translate(product,languageId)
        }
        else{
            router.replace({name: 'NotFound'})
        }

        return product
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};


function product_translate(product, languageId) {


    product.translate = create_translate(product, languageId);
    if (product.category) {
        product.category.translate = create_translate(product.category, languageId);
    }
    if (product.photos) {
        product.photos = product.photos.map((photo) => {
            photo.translate = create_translate(photo, languageId);
            return photo;
        });
    }
    product.sizes = FrontGroupSizes(product.sizes) || {}
    return product
}