import apiRoutes from "@/routes/api-routes";
import axios from "axios";



const state = {
    VideoGalleries: [],
    Videos: []
};

const actions = {

    async setVideos({commit}){
        let images = await axios.get(apiRoutes('get.images'),{params: {type: 'video'}})
        commit('setVideos',(await images.data))
    },

    async set({commit}) {
        axios.get(apiRoutes('videoGallery.index')).then(response => {
            commit('set', response.data.data)
            return  response.data.data
        });
    },

    async create({commit},gallery){
        try {
            let response = await axios.post(apiRoutes('videoGallery.store'), gallery)
            commit('add',(await response).data.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },

    async update({commit},gallery){
        let response = axios.put(apiRoutes('videoGallery.update', gallery.id), gallery)
        commit('update',(await response).data.data)
    },

    async updateField({commit},gallery){
       await axios.put(apiRoutes('videoGallery.update', gallery.id), gallery);
        commit('updateField',gallery)
    },


    async destroy({commit},id){
        try{
            await axios.delete(apiRoutes('videoGallery.destroy', id))
            commit('destroy',id)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },



    async createItem({commit},galleryItem){
        try {
            let response = await axios.post(apiRoutes('videoGalleryItem.store'), galleryItem)
            commit('addItem',(await response).data.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },


    async updateItem({commit},galleryItem){
        let response = axios.put(apiRoutes('videoGalleryItem.update', galleryItem.id), galleryItem)
        commit('updateItem',(await response).data.data)
    },

    async updateItemField({commit},galleryItem){
        axios.put(apiRoutes('videoGalleryItem.update', galleryItem.id),  galleryItem );
        commit('updateItemField',galleryItem)
    },


    async destroyItem({commit},ids){
        console.log(ids)
        try{
            await axios.delete(apiRoutes('videoGalleryItem.destroy', ids))
            commit('destroyItem',ids)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },





}

const mutations = {

    setVideos: (state, videos) => {
        state.videos = videos
        console.log('lll', state.videos)
    },

    set: (state, galleries) =>{
        state.VideoGalleries = galleries
    },

    add: (state, gallery) =>{
        gallery.status = true
        state.VideoGalleries.push(gallery)
    },

    update:(state,gallery) =>{
        state.VideoGalleries = state.VideoGalleries.map(g => {
            return g.id === gallery.id ? gallery : g
        })
    },

    updateField: (state, gallery) =>{
        state.VideoGalleries = state.VideoGalleries.map(g => {
            if(g.id === gallery.id ){
                if (typeof gallery.status !== 'undefined' ){
                    g.status = gallery.status
                }
                else{
                    g.sorting = gallery.sorting
                }
            }
            return g
        })
    },


    destroy:(state,id)=>{
        state.VideoGalleries = state.VideoGalleries.filter(g => g.id !== id)
    },



    addItem: (state, galleryItem) => {
        state.VideoGalleries
            .map(gallery => {
                if (gallery.id === +galleryItem.video_gallery_id) {
                    gallery.galleries ? gallery.galleries.push(galleryItem) : gallery.galleries = [galleryItem]
                }
            })
    },

    updateItem:(state,galleryItem) =>{
        state.VideoGalleries.map(gallery => {
            if (gallery.id === +galleryItem.video_gallery_id) {
                let index = gallery.galleries.findIndex(item => item.id === galleryItem.id)
                galleryItem.video_name ? gallery.galleries[index] = galleryItem : gallery.galleries[index].video = galleryItem.video
            }
        })
    },


    updateItemField: (state, galleryItem) =>{
        state.VideoGalleries = state.VideoGalleries.map(gallery => {
            let index = gallery.galleries.findIndex(item => item.id === galleryItem.id)
            galleryItem.status
                ? gallery.galleries[index].status = galleryItem.status
                : gallery.galleries[index].sorting = galleryItem.sorting

            return gallery
        })
    },


    destroyItem: (state, ids) =>{
        state.VideoGalleries = state.VideoGalleries.map(p => {
            p.galleries = p.galleries.filter(g => !ids.includes(g.id))
            return p
        })
    },





};


const getters = {

    getVideoGalleries(state) {
        return state.VideoGalleries;
    },

    getVideoGallery: (state) => (id) => {
        return state.VideoGalleries.find(g => g.id === +id)
    },

    getVideoGalleryByLanguageId: (state) => (languageId) => {
        return state.VideoGalleries.filter(g => g.page.language_id === +languageId)
    },

    getVideos (state) {
        return state.videos
    }
}

export default {
    namespaced: true, state, getters, actions, mutations
}