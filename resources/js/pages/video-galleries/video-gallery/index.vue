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

  name: "VideoGallery",
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
      getVideoGalleries: 'VideoGalleries/getVideoGalleries',
      getVideoGallery: 'VideoGalleries/getVideoGallery',

    }),
    VideoGallery(){
      return this.getVideoGallery(+this.id)
    }

  },




  methods: {
    ...mapActions([
      'VideoGalleries/allVideoGalleries',
      'VideoGalleries/addVideoGalleries',
      'VideoGalleries/createNewGalleryItem',
      'VideoGalleries/updateGalleryItem',
      'VideoGalleries/updateGallery',
      'VideoGalleries/DeleteVideoGalleryItem',

    ]),

    CloseLeftAside() {
      this.ButtonLeftAside = false
    },

    closeNewGallery() {
      this.ButtonNewGallery = false
    },

     CreateGallery() {

      this.NewGallery.video_gallery_id = this.id
      this['VideoGalleries/createNewGalleryItem'](this.NewGallery)
      this.ButtonNewGallery = false
      this.NewGallery = {sorting: 1}

    },

     UpdateGalleryItem(id) {
      let videoGalleryItem = this.VideoGallery.galleries.find(g => g.id === id)
      this['VideoGalleries/updateGalleryItem'](videoGalleryItem)

    },

    UpdateGallery() {
      this['VideoGalleries/updateGallery'](this.VideoGallery)
      this.ButtonLeftAside = false
    },

     UpdateImage(gallery) {
      this['VideoGalleries/updateGalleryItem'](gallery)
      this.VideoGallery = this.getVideoGallery(+this.id)

    },

     DeleteGalleryItem() {
      this['VideoGalleries/DeleteVideoGalleryItem'](this.selectedGalleryIds)
      this.selectedGalleryIds = [];
    },

  },


}

</script>