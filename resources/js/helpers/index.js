import store from '../store'
import {addRoute} from "../routes/routes";

function GET_ADMIN_LANGUAGE_ID(){
    return store.getters['lang/getLanguageId']
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

export const BackendErrorHandler = ({response}) => {
    alert(response.data.message)
}


const routePages = async () => {
    const language = store.getters['lang/GET_SITE_LANGUAGE']
    let pages = store.getters['page/GET_ROUTES'](language.id)

    if(!pages.product){
        await store.dispatch('page/SET_PAGES')
        pages = store.getters['page/GET_ROUTES'](language.id)
    }

    return pages
}

// const page_routes = await routePages()



export const generate_routes =  (page_routes) => {

    const context = require.context('@/routes/', true, /\.\/routes.js$/i)


    if (page_routes.product){
        let route = generate(page_routes.product,'FrontProduct','products' )

        context.keys()
            .map(context)
            .map(m => m.default.addRoute(route))
    }
    if (page_routes.article){
        let route = generate(page_routes.article,'FrontArticle','article' )

        context.keys()
            .map(context)
            .map(m => m.default.addRoute(route))
    }


}



const generate = (route, name, page ) => {

    return  {
        path: `/${route.slug.toLowerCase()}`,
        name:  `${name}s`,
        component: () => import(`@frontend/pages/${page}/pages`),
        props: true,
        meta: {sub_menu: route.sub_menu,name: route.name }
        /*children : [
            {
                path: ":id/:slug",
                name,
                component: () => import(`@frontend/pages/${route}/page`),
                props: true,
            }
        ]*/
    }
}



export default {
    GET_ADMIN_LANGUAGE_ID,
    SET_ADMIN_LANGUAGE_ID,
    ITEM_FILTERED

}
