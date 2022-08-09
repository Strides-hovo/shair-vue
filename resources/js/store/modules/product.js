import actions from "./products/actions";
import mutations from "./products/mutations";
import { TranslateProducts } from './products/mutations'
import { create_translate } from './products/mutations'

const state = {
  PRODUCTS: [],
  PRODUCTS_TR: [],
  languageId: null,
};

const getters = {

 
  GET_PRODUCTS_TR_CAT:
    (state) =>
     (languageId, categoryId = null) => {
      state.PRODUCTS_TR = TranslateProducts(state, languageId)

      return categoryId
        ? state.PRODUCTS_TR.filter(
            (product) => product.category_id === categoryId
          )
        : state.PRODUCTS_TR;
    },



  GET_PRODUCT: (state) => (id, languageId) => {
    let product = state.PRODUCTS_TR.find((product) => product.id === +id);

    product.translate = create_translate(product,languageId)
    product.photos = product.photos.map(photo => {
      photo.translate = create_translate(photo,languageId)
      return photo
    })
    return product
  },

  GET_PRODUCT_BY_CAT: (state) => (category_id,languageId) => {

  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
