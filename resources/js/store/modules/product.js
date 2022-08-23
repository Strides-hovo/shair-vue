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

  GET_PRODUCTS_FILTER: (state) => (languageId, category_id = '', name = null) => {

      let products = state.PRODUCTS_TR.map(pr => {
        const translate = pr.translate?.language_id === languageId
        ? pr.translate
            : create_translate(pr,languageId)
        pr.translate = translate
        pr.category.translate = create_translate(pr.category,languageId)

        return pr
      })

      if (category_id){
        products = products.filter(pr => pr.category_id === category_id)
      }

      if (name){
        products = products.filter(pr => pr.translate.name?.includes(name))
      }

      return products
  }



};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
