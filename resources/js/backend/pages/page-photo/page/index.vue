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

  name: "PhotoGallery",
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
      GetPhotoPage: 'PhotoPage/GetPhotoPage',
      languageId: 'lang/getlanguageId',
    }),

    PhotoGallery(){
      return this.GetPhotoPage(+this.id,this.languageId)
    }

  },




  methods: {
    ...mapActions([
      'PhotoPage/set',
      'PhotoPage/update',
      'PhotoPage/createGallery',
      'PhotoPage/updateGallery',
      'PhotoPage/destroyGalleries',
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
      this['PhotoPage/createGallery'](this.NewGallery)
      this.ButtonNewGallery = false
      this.NewGallery = {sorting: 1}
    },

    UpdatePage(){
      this.PhotoGallery.translate.language_id = this.languageId
      this['PhotoPage/update'](this.PhotoGallery)
    },


     UpdateGalleryItem(id,replace = false) {
      let photoGalleryItem = this.PhotoGallery.galleries.find(g => g.id === id)
      photoGalleryItem.replace = replace
      
      this['PhotoPage/updateGallery'](photoGalleryItem)
      delete photoGalleryItem.replace
    },
 
    UpdateGallery() {
      this['PhotoPage/update'](this.PhotoGallery)
      this.ButtonLeftAside = false
    },

     UpdateImage(photo_gallery) {
      this['PhotoPage/updateGallery'](photo_gallery)

    },

     DeleteGalleryItem() {
      this['PhotoPage/destroyGalleries'](this.selectedGalleryIds)
      this.selectedGalleryIds = [];
    },

  },


}

</script>