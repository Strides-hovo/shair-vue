import store from '../store'

  function GET_ADMIN_LANGUAGE_ID(){
    return store.getters['lang/getlanguageId']
}

function SET_ADMIN_LANGUAGE_ID(languageId){
    store.commit('lang/setLanguageId',languageId)
}

export const ITEM_FILTERED = (state, id, languageId) => {

    const productData = state.products.find(product => product.id === id)
    const product = {id: productData.id, category_id: productData.category_id};

    product.setting = productData.settings.find(item => item.language_id === languageId);
    product.translate = productData.translations.find(item => item.language_id  === languageId);
    product.photos = filter_photo(languageId,productData.photos)
    return product
}


const filter_photo = (languageId,photos) => {
    return  photos.map(item => {
        const translate = item.translations.find(i => item.id === i.product_photo_id  && i.language_id === languageId ) || {}
        item.translate = translate
        return item
    })
}

export const BackendErrorHandler = (error) => {
    alert(error)
}


export default {
    GET_ADMIN_LANGUAGE_ID,
    SET_ADMIN_LANGUAGE_ID,
    ITEM_FILTERED
}
