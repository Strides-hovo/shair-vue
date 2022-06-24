<template src="./index.html"></template>
<style src="./style.scss" lang="scss"></style>

<script>

import axios from "axios";
import apiRoutes from "@/routes/api-routes";

import StrTable from "./modules/StrTable";
import StrMetaData from "./modules/StrMetaData";
import StrSetting from "./modules/StrSetting";
import StrNewGallery from "./modules/StrNewGallery";
import {mapActions, mapGetters, mapState} from "vuex";

export default {

  name: "PhotoGallery",
  components: {StrSetting, StrMetaData, StrTable, StrNewGallery},

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
      getPhotoGalleries: 'PhotoGalleries/getPhotoGalleries',
      getPhotoGallery: 'PhotoGalleries/getPhotoGallery',

    }),
    PhotoGallery(){
      return this.getPhotoGallery(+this.id)
    }

  },




  methods: {
    ...mapActions([
      'PhotoGalleries/allPhotoGalleries',
      'PhotoGalleries/addPhotoGalleries',
      'PhotoGalleries/createNewGalleryItem',
      'PhotoGalleries/updateGalleryItem',
      'PhotoGalleries/updateGallery',
      'PhotoGalleries/DeletePhotoGalleryItem',

    ]),

    CloseLeftAside() {
      this.ButtonLeftAside = false
    },

    closeNewGallery() {
      this.ButtonNewGallery = false
    },

     CreateGallery() {

      this.NewGallery.photo_gallery_id = this.id
      this['PhotoGalleries/createNewGalleryItem'](this.NewGallery)
      this.ButtonNewGallery = false
      this.NewGallery = {sorting: 1}

    },

     UpdateGalleryItem(id) {
      let photoGalleryItem = this.PhotoGallery.galleries.find(g => g.id === id)
      this['PhotoGalleries/updateGalleryItem'](photoGalleryItem)

    },

    UpdateGallery() {
      this['PhotoGalleries/updateGallery'](this.PhotoGallery)
      this.ButtonLeftAside = false
    },

     UpdateImage(gallery) {
      this['PhotoGalleries/updateGalleryItem'](gallery)
      this.PhotoGallery = this.getPhotoGallery(+this.id)

    },

     DeleteGalleryItem() {
      this['PhotoGalleries/DeletePhotoGalleryItem'](this.selectedGalleryIds)
      this.selectedGalleryIds = [];
    },

  },


}

</script>