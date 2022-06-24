<template src="./index.html"></template>

<script>


import axios from 'axios';
import apiRoutes from '@/routes/api-routes';
import {mapGetters, mapActions } from 'vuex'


export default {
  name: 'VideoGalleries',

  data: () => ({
    showIcon: require('@img/icons/show.svg').default,
    unshow: require('@img/icons/close.svg').default,

    NewVideoGallery: {},
    defaultLanguage: null,
    ButtonNewPageModal: false,

  }),

  computed: {
    ...mapGetters({
      VideoGalleries: 'VideoGalleries/getVideoGalleries',
      getVideoGalleryByLanguageId: 'VideoGalleries/getVideoGalleryByLanguageId',
      actualLanguages: 'lang/getActualLanguages',
    }),

    VideoGallery() {
      return this.getVideoGalleryByLanguageId(this.languageId)
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
      return this.VideoGalleries.filter(item => {
        return item.page.language_id === this.languageId
      })
    },

  },

  methods: {
    ...mapActions([
      'lang/allLanguages',
      'VideoGalleries/allVideoGalleries',
      'VideoGalleries/createNewGallery',
      'VideoGalleries/updateGallery',
      'VideoGalleries/DeleteVideoGallery',

    ]),

    changeSorting(sorting, id) {
      axios.put(apiRoutes('videoGallery.update', id), {sorting: sorting})
    },

    UpdateGallery(gallery){
      this['VideoGalleries/updateGallery'](gallery)
    },

    setDefaultLanguage() {
      return this.actualLanguages[0]
    },

    closeNewPageModal() {
      this.ButtonNewPageModal = false
    },

    async saveNewGallery() {
      this.NewVideoGallery.language_id = this.languageId
      this['VideoGalleries/createNewGallery'](this.NewVideoGallery)

      this.NewVideoGallery = {}
      this.ButtonNewPageModal = false
    },

     DeleteVideoGallery(id) {
      this['VideoGalleries/DeleteVideoGallery'](id)
    }
  },


  mounted() {
    this['lang/allLanguages']()
    this['VideoGalleries/allVideoGalleries']()

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