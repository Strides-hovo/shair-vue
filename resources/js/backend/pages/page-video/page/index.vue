<template src="./index.html"></template>


<style src="./style.scss" lang="scss"></style>

<script>


import StrTable from "./modules/StrTable";
import StrMetaData from "./modules/StrMetaData";
import StrSetting from "./modules/StrSetting";

import {mapActions, mapGetters, mapState} from "vuex";
import BaseModalFileUpload from "../../../components/BaseModalFileUpload.vue";
import BaseTranslateSlide from '@backend/components/BaseTranslateSlide'

export default {

  name: "BackendVideoPage",
  components: {StrSetting, StrMetaData, StrTable,  BaseModalFileUpload, BaseTranslateSlide },

  props: {
    id: {
      required: true
    },

  },  

  data: () => ({

    ButtonTabInfo: false,
    ButtonLeftAside: false,
    ButtonNewGallery: false,
    selectedGalleryIds: [],
    NewGallery: {
      sorting: 1
    },

  }),

  computed: {
    ...mapGetters({
      GetVideoPage: 'PageVideo/GetVideoPage',
      languageId: 'lang/getLanguageId',
    }),

    page(){
      return this.GetVideoPage(+this.id,this.languageId)
    }

  },




  methods: {
    ...mapActions([
      'PageVideo/set',
      'PageVideo/update',
      'PageVideo/createGallery',
      'PageVideo/updateGallery',
      'PageVideo/destroyGalleries',
    ]),

    CloseLeftAside() {
      this.ButtonLeftAside = false
    },

    closeNewGallery() {
      this.ButtonNewGallery = false
    },

     CreateGallery(image) {
      
      this.NewGallery.photo_page_id = +this.id
      this.NewGallery.image_alt = image.alt
      this.NewGallery.image_title = image.title
      this.NewGallery.image_name = image.name
      this.NewGallery.image = image.image
      this['PageVideo/createGallery'](this.NewGallery)
      this.ButtonNewGallery = false
      this.NewGallery = {sorting: 1}
    },

    UpdatePage(){
      this.page.translate.language_id = this.languageId
      this['PageVideo/update'](this.page)
    },


     UpdateGalleryItem(id,replace = false) {
      let photoGalleryItem = this.page.galleries.find(g => g.id === id)
      photoGalleryItem.replace = replace
      this['PageVideo/updateGallery'](photoGalleryItem)

    },
 
    UpdateGallery() {
      this['PageVideo/update'](this.page)
      this.ButtonLeftAside = false
    },

     UpdateVideo(photo_gallery) {
      this['PageVideo/updateGallery'](photo_gallery)

    },

     DeleteGalleryItem() {
      this['PageVideo/destroyGalleries'](this.selectedGalleryIds)
      this.selectedGalleryIds = [];
    },

  },


}

</script>