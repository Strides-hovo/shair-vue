import apiRoutes from "@/routes/api-routes";
import axios from "axios";



const state = {
    PhotoPages: [],
    galleries: []
};

const actions = {

    async setImages({commit}){
        let images = await axios.get(apiRoutes('get.images'))
        commit('setImages',(await images.data))
    },

    //page
    async set({commit}) {
        
      const response = await axios.get(apiRoutes('photo-page.index'));
        commit('set', (await response).data.data)
    },

    async create({commit},page){
        try {
            let response = await axios.post(apiRoutes('photo-page.store'), page)
            commit('add',(await response).data.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },

    async update({commit},page){
        let response = axios.put(apiRoutes('photo-page.update', page.id), page)
        commit('update',(await response).data.data)
    },


    async destroy({commit},id){
        try{
            await axios.delete(apiRoutes('photo-page.destroy', id))
            commit('destroy',id)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },

    //gallery

    async createGallery({commit},gallery){
        try {
            let response = await axios.post(apiRoutes('photo-gallery.store'), gallery)
            commit('CreateGallery',(await response).data.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },


    async updateGallery({commit},photo_gallery){
        let response = await  axios.put(apiRoutes('photo-gallery.update', photo_gallery.id), photo_gallery);
        commit('updateGallery',(await response).data.data)
    },



    async destroyGalleries({commit},ids){
        try{
            await axios.delete(apiRoutes('photo-gallery.destroy', ids))
            commit('destroyGalleries',ids)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },














}

const mutations = {

    setImages: (state, images) => {
        state.galleries = images
    },

    set: (state, pages) =>{
        state.PhotoPages = pages
    },

    add: (state, page) =>{
        state.PhotoPages.push(page)
    },

    update:(state,page) =>{
        state.PhotoPages = state.PhotoPages.map(p => {
            return p.id === page.id ? page : p
        })
    },

    destroy:(state,id)=>{
        state.PhotoPages = state.PhotoPages.filter(page => page.id !== id)
    },

    CreateGallery: (state,gallery) => {
        state.PhotoPages = state.PhotoPages.map(page => {
            if (page.id === gallery.photo_page_id){
                page.galleries.push(gallery)
            }
                return page
        })
    },

    updateGallery: (state,gallery) => {
        state.PhotoPages = state.PhotoPages.map(page => {
            if (page.id === gallery.photo_page_id){
                page.galleries = page.galleries.map(g => g.id === gallery.id ? gallery : g)
            }
            return page
        })
    },

    destroyGalleries: (state,ids) => {
        state.PhotoPages = state.PhotoPages.map(page => {
            page.galleries = page.galleries.filter(g => !ids.includes(g.id))
            return page
        })
    }



};


const getters = {

    GetPhotoPages: (state)  => {
       return state.PhotoPages.map(page => {
           page.translate = page.translate
               || page.translations[0]
               || {}

           return page
       })
    } ,


    GetPhotoPage: (state) => (id, languageId) => {
        const page = state.PhotoPages.find(page => page.id === Number(id))
        page.translate = page.translations
            .find(tr => tr.language_id === languageId)
            || page.translations[0]
            || {}

        return page
    },

    GetPagesByLang: (state) => languageId => {
        return state.PhotoPages.map(page => {
            page.translate =
                page.translations.find(tr => tr.language_id === languageId)
                || page.translations[0]
                || {}
            return page
        }).filter(page => typeof page.translate.slug !== 'undefined' && page.galleries.length > 0 )
    },

    getImages (state) {
        return state.galleries
    }
}

export default {
    namespaced: true, state, getters, actions, mutations
}