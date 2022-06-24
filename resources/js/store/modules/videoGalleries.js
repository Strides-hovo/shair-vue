import apiRoutes from "../../routes/api-routes";
import axios from "axios";



const state = {
    VideoGalleries: [],
};

const actions = {

    addVideoGalleries({commit}, gallery) {
        commit('addVideoGalleries', gallery)
    },

    async allVideoGalleries({commit}) {
        let galleries = await axios.get(apiRoutes('videoGallery.index'))
        commit('allVideoGalleries', galleries.data.data)
    },

    async createNewGallery({commit}, gallery) {
        let response = await axios.post(apiRoutes('videoGallery.store'), gallery)
        commit('createNewGallery', response.data.data)
        return response.data.data
    },

    async createNewGalleryItem({commit}, galleryItem) {
        let response = await axios.post(apiRoutes('videoGalleryItems.store'), galleryItem)
        commit('createNewGalleryItem', response.data.data)
        return response.data.data
    },

    async updateGallery({commit}, gallery) {
        let response = await axios.put(apiRoutes('videoGallery.update', gallery.id), gallery)
        commit('updateGallery', response.data.data)
    },

    async updateGalleryItem({commit}, galleryItem) {
        let response = await axios.put(apiRoutes('videoGalleryItems.update', galleryItem.id), galleryItem)
        commit('updateGalleryItem', galleryItem)
    },

    async DeleteVideoGallery({commit}, id) {
        await axios.delete(apiRoutes('videoGallery.destroy', id))
        commit('DeleteVideoGallery', id)
    },

    DeleteVideoGalleryItem({commit}, ids) {
        axios.delete(apiRoutes('videoGalleryItems.destroy', ids))
        commit('DeleteVideoGalleryItem', ids)
    }

};

const mutations = {

    addVideoGalleries(state, gallery) {
        state.VideoGalleries = gallery
    },

    allVideoGalleries(state, galleries) {
        state.VideoGalleries = galleries
    },

    createNewGallery(state, gallery) {
        state.VideoGalleries.push(gallery)
    },

    createNewGalleryItem(state, galleryItem) {

        state.VideoGalleries
            .map(gallery => {
                if (gallery.id === +galleryItem.video_gallery_id ) {
                    if (gallery.galleries) {
                        gallery.galleries.push(galleryItem)
                    } else {
                        gallery.galleries = [galleryItem]
                    }

                }
            })
    },

    updateGallery(state, gallery) {

        state.VideoGalleries.map(g => {
            if (g.id === +gallery.id) {
                g = gallery
            }
        })
    },

    updateGalleryItem(state, galleryItem) {

        state.VideoGalleries.map(gallery => {
            if (gallery.id === +galleryItem.video_gallery_id) {
                let index = gallery.galleries.findIndex(item => item.id === galleryItem.id)
                galleryItem.image_name ? gallery.galleries[index] = galleryItem : gallery.galleries[index].image = galleryItem.image
            }
        })

    },

    DeleteVideoGallery(state, id) {
        state.VideoGalleries = state.VideoGalleries.filter(p => p.id !== id)
    },


    DeleteVideoGalleryItem(state, ids) {
        state.VideoGalleries = state.VideoGalleries.map(p => {
            p.galleries = p.galleries.filter(g => !ids.includes(g.id))
            return p
        })
    }

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
    }

};

export default {
    namespaced: true, state, getters, actions, mutations
}