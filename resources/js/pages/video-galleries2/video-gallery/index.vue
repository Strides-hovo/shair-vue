<template src="./index.html"></template>
<style src="./style.scss" lang="scss"></style>

<script>

import axios from "axios";
import apiRoutes from "@/routes/api-routes";

import StrTable from "./modules/Strtable";
import StrMetaData from "./modules/StrMetaData";
import StrSetting from "./modules/Strsetting";
import StrNewGallery from "./modules/StrNewGallery";

export default {
  name: "VideoGallery",
  components: {StrSetting, StrMetaData, StrTable, StrNewGallery},

  props: {
    id: {
      required: true
    },

  },
  data: () => ({
    videoGallery: {},
    videoGalleryDataForUpdate: {},
    ButtonTabInfo: false,
    ButtonLeftAside: false,
    ButtonNewGallery: false,
    selectedGalleryIds: [],
    NewGallery: {
      sorting: 1
    }

  }),


  methods: {

    CloseLeftAside() {
      this.ButtonLeftAside = false
    },

    closeNewGallery() {
      this.ButtonNewGallery = false
    },

    async getVideoGallery() {
      return await axios.get(apiRoutes('videoGallery.show', this.id)).then(response => response.data.data)
    },

    async CreateGallery() {
      this.NewGallery.video_gallery_id = this.videoGallery.id
      axios.post(apiRoutes('videoGalleryItems.store'), this.NewGallery).then(response => {
        this.videoGallery.galleries.push(response.data.data)
        this.ButtonNewGallery = false
      })
      this.videoGallery = await this.getVideoGallery()
      this.NewGallery = {}
    },


    async UpdateGalleryItem(id) {
      let videoGalleryItem = this.videoGallery.galleries.find(g => g.id === id)
      axios.put(apiRoutes('videoGalleryItems.update', id), videoGalleryItem)
          .catch(err => alert(err))
      // this.videoGallery = await this.getVideoGallery()
    },

    UpdateGallery() {
      axios.put(apiRoutes('videoGallery.update', this.videoGallery.id), this.videoGallery)
      this.ButtonLeftAside = false
    },

    async UpdateVideo(gallery) {
      axios.put(apiRoutes('videoGalleryItems.update', gallery.id), gallery)
      // this.videoGallery = await this.getVideoGallery()
    },

    async DeleteGallery() {
      await axios.delete(apiRoutes('videoGalleryItems.destroy', this.selectedGalleryIds))
      this.selectedGalleryIds = [];
      this.videoGallery = await this.getVideoGallery()
    },

  },

  async mounted() {
    this.videoGallery = await this.getVideoGallery()
  }
}

</script>