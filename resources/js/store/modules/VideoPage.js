import apiRoutes from "@/routes/api-routes";
import axios from "axios";



const state = {
    PageVideo: [],
    galleries: []
};

const actions = {

    async setVideos({commit}){
        let videos = await axios.get(apiRoutes('get.images','video'))
        commit('setVideos',(await videos.data))
    },

    //page
    async set({commit}) {
        
      const response = await axios.get(apiRoutes('video-page.index'));
        commit('set', (await response).data.data)
    },

    async create({commit},page){
        try {
            let response = await axios.post(apiRoutes('video-page.store'), page)
            commit('add',(await response).data.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },

    async update({commit},page){
        let response = axios.put(apiRoutes('video-page.update', page.id), page)
        commit('update',(await response).data.data)
    },


    async destroy({commit},id){
        try{
            await axios.delete(apiRoutes('video-page.destroy', id))
            commit('destroy',id)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },

    //gallery

    async createGallery({commit},gallery){
        try {
            let response = await axios.post(apiRoutes('video-gallery.store'), gallery)
            commit('CreateGallery',(await response).data.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    },


    async updateGallery({commit},video_gallery){
        let response = await  axios.put(apiRoutes('video-gallery.update', video_gallery.id), video_gallery);
        commit('updateGallery',(await response).data.data)
    },



    async destroyGalleries({commit},ids){
        try{
            await axios.delete(apiRoutes('video-gallery.destroy', ids))
            commit('destroyGalleries',ids)
        }
        catch (e) {
            console.log(e);
            alert(e.response.data.message)
        }
    },














}

const mutations = {

    setVideos: (state, videos) => {
        state.galleries = videos
    },

    set: (state, pages) =>{
        state.PageVideo = pages
    },

    add: (state, page) =>{
        state.PageVideo.push(page)
    },

    update:(state,page) =>{
        state.PageVideo = state.PageVideo.map(p => {
            return p.id === page.id ? page : p
        })
    },

    destroy:(state,id)=>{
        state.PageVideo = state.PageVideo.filter(page => page.id !== id)
    },

    CreateGallery: (state,gallery) => {
        state.PageVideo = state.PageVideo.map(page => {
            if (page.id === gallery.video_page_id){
                page.galleries.push(gallery)
            }
                return page
        })
    },

    updateGallery: (state,gallery) => {
        state.PageVideo = state.PageVideo.map(page => {
            if (page.id === gallery.video_page_id){
                page.galleries = page.galleries.map(g => g.id === gallery.id ? gallery : g)
            }
            return page
        })
    },

    destroyGalleries: (state,ids) => {
        state.PageVideo = state.PageVideo.map(page => {
            page.galleries = page.galleries.filter(g => !ids.includes(g.id))
            return page
        })
    }



};


const getters = {

    GetVideoPages: (state)  => {
        return state.PageVideo.map(page => {
            page.translate = page.translate || page.translations[0] || {}
            return page
        })
     } ,
 
 
     GetVideoPage: (state) => (id, languageId) => {
         
         const page = state.PageVideo.find(page => page.id === Number(id))
         page.translate = page.translations.find(tr => tr.language_id === languageId) || page.translations[0] || {}
         return page
     },
 
     GetPagesByLnag: (state) => languageId => {
         return state.PageVideo.map(page => {
             page.translate = page.translations.find(tr => tr.language_id === languageId) || page.translations[0] || {}
 
             return page
         }).filter(page => typeof page.translate.slug !== 'undefined' && page.galleries.length > 0 )
     },
 
     getVideos (state) {
         return state.galleries
     }
}

export default {
    namespaced: true, state, getters, actions, mutations
}