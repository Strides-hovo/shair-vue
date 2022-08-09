<template src="./index.html"></template>

<script>

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
        return this.defaultLanguage === null && this.actualLanguages.length > 0 ? this.actualLanguages[0].id : this.defaultLanguage;
      },
      set(val) {
        this.defaultLanguage = val
      }
    },



  },

  methods: {
    ...mapActions([
      'lang/set',
      'VideoGalleries/set',
      'VideoGalleries/create',
      'VideoGalleries/update',
      'VideoGalleries/destroy',
      'VideoGalleries/updateField',

    ]),

    setDefaultLanguage() {
      return this.actualLanguages[0]
    },

    closeNewPageModal() {
      this.ButtonNewPageModal = false
    },


    async saveNewGallery() {
      this.NewVideoGallery.language_id = this.languageId
      this['VideoGalleries/create'](this.NewVideoGallery)
      this.NewVideoGallery = {}
      this.ButtonNewPageModal = false
    },

    UpdateGalleryField(gallery) {
      this['VideoGalleries/updateField'](gallery)
    },

    UpdateGallery(gallery){
      this['VideoGalleries/update'](gallery)
    },

     DeleteVideoGallery(id) {
      this['VideoGalleries/destroy'](id)
    }
  },


  mounted() {
    if (this.actualLanguages.length === 0){
      this['lang/set']()
    }
    if (this.VideoGalleries.length === 0){
      this['VideoGalleries/set']()
    }


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