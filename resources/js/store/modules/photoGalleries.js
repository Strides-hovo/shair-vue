import apiRoutes from "../../routes/api-routes";
import axios from "axios";



const state = {
    PhotoGalleries: [],
};

const actions = {

    addPhotoGalleries({commit}, gallery) {
        commit('addPhotoGalleries', gallery)
    },

    async allPhotoGalleries({commit}) {
        let galleries = await axios.get(apiRoutes('photoGallery.index'))
        commit('allPhotoGalleries', galleries.data.data)
    },

    async createNewGallery({commit}, gallery) {
        let response = await axios.post(apiRoutes('photoGallery.store'), gallery)
        commit('createNewGallery', response.data.data)
        return response.data.data
    },

    async createNewGalleryItem({commit}, galleryItem) {
        let response = await axios.post(apiRoutes('photoGalleryItems.store'), galleryItem)
        commit('createNewGalleryItem', response.data.data)
        return response.data.data
    },

    async updateGallery({commit}, gallery) {
        let response = await axios.put(apiRoutes('photoGallery.update', gallery.id), gallery)
        commit('updateGallery', response.data.data)
    },

    async updateGalleryItem({commit}, galleryItem) {
        let response = await axios.put(apiRoutes('photoGalleryItems.update', galleryItem.id), galleryItem)
        commit('updateGalleryItem', galleryItem)
    },

    async DeletePhotoGallery({commit}, id) {
        await axios.delete(apiRoutes('photoGallery.destroy', id))
        commit('DeletePhotoGallery', id)
    },

    DeletePhotoGalleryItem({commit}, ids) {
        axios.delete(apiRoutes('photoGalleryItems.destroy', ids))
        commit('DeletePhotoGalleryItem', ids)
    }

};

const mutations = {

    addPhotoGalleries(state, gallery) {
        state.PhotoGalleries = gallery
    },

    allPhotoGalleries(state, galleries) {
        state.PhotoGalleries = galleries
    },

    createNewGallery(state, gallery) {
        state.PhotoGalleries.push(gallery)
    },

    createNewGalleryItem(state, galleryItem) {

        state.PhotoGalleries
            .map(gallery => {
                if (gallery.id === +galleryItem.photo_gallery_id) {
                    if (gallery.galleries) {
                        gallery.galleries.push(galleryItem)
                    } else {
                        gallery.galleries = [galleryItem]
                    }

                }
            })
    },

    updateGallery(state, gallery) {

        state.PhotoGalleries.map(g => {
            if (g.id === +gallery.id) {
                g = gallery
            }
        })
    },

    updateGalleryItem(state, galleryItem) {

        state.PhotoGalleries.map(gallery => {
            if (gallery.id === +galleryItem.photo_gallery_id) {
                let index = gallery.galleries.findIndex(item => item.id === galleryItem.id)
                galleryItem.image_name ? gallery.galleries[index] = galleryItem : gallery.galleries[index].image = galleryItem.image
            }
        })

    },

    DeletePhotoGallery(state, id) {
        state.PhotoGalleries = state.PhotoGalleries.filter(p => p.id !== id)
    },


    DeletePhotoGalleryItem(state, ids) {
        state.PhotoGalleries = state.PhotoGalleries.map(p => {
            p.galleries = p.galleries.filter(g => !ids.includes(g.id))
            return p
        })
    }

};


const getters = {

    getPhotoGalleries(state) {
        return state.PhotoGalleries;
    },

    getPhotoGallery: (state) => (id) => {
        return state.PhotoGalleries.find(g => g.id === +id)
    },

    getPhotoGalleryByLanguageId: (state) => (languageId) => {
        return state.PhotoGalleries.filter(g => g.page.language_id === +languageId)
    }

};

export default {
    namespaced: true, state, getters, actions, mutations
}