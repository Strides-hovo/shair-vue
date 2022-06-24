<template src="./index.html"></template>

<script>


import axios from 'axios';
import apiRoutes from '@/routes/api-routes';
import {mapGetters, mapActions } from 'vuex'


export default {
  name: 'PhotoGalleries',

  data: () => ({
    showIcon: require('@img/icons/show.svg').default,
    unshow: require('@img/icons/close.svg').default,

    NewPhotoGallery: {},
    defaultLanguage: null,
    ButtonNewPageModal: false,

  }),

  computed: {
    ...mapGetters({
      PhotoGalleries: 'PhotoGalleries/getPhotoGalleries',
      getPhotoGalleryByLanguageId: 'PhotoGalleries/getPhotoGalleryByLanguageId',
      actualLanguages: 'lang/getActualLanguages',
    }),

    PhotoGallery() {
      return this.getPhotoGalleryByLanguageId(this.languageId)
    },

    languageId: {
      get() {
        if (this.defaultLanguage === null) {
          if (this.actualLanguages.length > 0) {
            return this.actualLanguages[0].id
          }
        } else {
          return this.defaultLanguage;
        }
      },
      set(val) {
        this.defaultLanguage = val
      }
    },

    pageFilter() {
      return this.PhotoGalleries.filter(item => {
        return item.page.language_id === this.languageId
      })
    },

  },

  methods: {
    ...mapActions([
      'lang/allLanguages',
      'PhotoGalleries/allPhotoGalleries',
      'PhotoGalleries/createNewGallery',
      'PhotoGalleries/updateGallery',
      'PhotoGalleries/DeletePhotoGallery',

    ]),

    changeSorting(sorting, id) {
      axios.put(apiRoutes('photoGallery.update', id), {sorting: sorting})
    },

    UpdateGallery(gallery){
      this['PhotoGalleries/updateGallery'](gallery)
    },

    setDefaultLanguage() {
      return this.actualLanguages[0]
    },

    closeNewPageModal() {
      this.ButtonNewPageModal = false
    },

    async saveNewGallery() {
      this.NewPhotoGallery.language_id = this.languageId
      this['PhotoGalleries/createNewGallery'](this.NewPhotoGallery)

      this.NewPhotoGallery = {}
      this.ButtonNewPageModal = false
    },

     DeletePhotoGallery(id) {
      this['PhotoGalleries/DeletePhotoGallery'](id)
    }
  },


  mounted() {
    this['lang/allLanguages']()
    this['PhotoGalleries/allPhotoGalleries']()

  }

}

</script>

<style>
.table-img__info-item {
  margin: auto;
}

.table-img__info-item input {
  font-size: 16px;
  line-height: 22px;
  color: #2b2b2b;
  border-bottom: 1px solid #87a8c9;
  padding: 8px 0 5px;
  width: 100%;
  max-width: 352px;
  background-color: transparent;
}
</style>