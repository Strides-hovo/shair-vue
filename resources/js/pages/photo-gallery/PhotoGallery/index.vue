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
    name: "PhotoGallery",
    components: { StrSetting, StrMetaData, StrTable, StrNewGallery },

    props: {
        id: {
            required: true
        }
    },
    data: () => ({
        photoGallery: {},
        ButtonTabInfo: false,
        ButtonLeftAside: false,
        ButtonNewGallery: false,
        
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
      
        async CreateGallery() {
            this.NewGallery.photo_gallery_id = this.photoGallery.id
            axios.post(apiRoutes('photoGalleryItems.store'), this.NewGallery).then(response => {
                this.photoGallery.galleries.push(response.data.data)
                this.ButtonNewGallery = false
            })
            this.photoGallery = await this.getphotoGallery()
            this.NewGallery = {}
        },

        async getphotoGallery(){
          return await axios.get(apiRoutes('photoGallery.show', this.id)).then(response => response.data.data)
        },

        async UpdateGalleryItem(id){
            let photoGalleryItem = this.photoGallery.galleries.find(g => g.id === id)
            axios.put(apiRoutes('photoGalleryItems.update',id),photoGalleryItem)
            .catch(err => alert(err))
            this.photoGallery = await this.getphotoGallery()
        },
        UpdateGallery(){
            axios.put(apiRoutes('photoGallery.update',this.photoGallery.id),this.photoGallery)
            this.ButtonLeftAside = false
        },
       async UpdateImage(gallery){
              axios.put(apiRoutes('photoGalleryItems.update',gallery.id),gallery)
              this.photoGallery = await this.getphotoGallery()
        }
    },

   async mounted() {
        this.photoGallery = await this.getphotoGallery()
        console.log( this.photoGallery )
    }
}

</script>