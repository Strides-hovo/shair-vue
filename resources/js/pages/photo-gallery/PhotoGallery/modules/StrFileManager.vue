<template src="./str-filemanager.html"></template>
<style src="./str-filemanager.scss" lang="scss">
</style>


<script>





import StrButton from "../../../components/UI/StrButton";
import StrNewGallery from "./StrNewGallery";

import { mapGetters } from "vuex";


import axios from "axios";
import apiRoutes from "../../../routes/api-routes";



export default {
  name: "StrFileManager",
  components: { StrButton,  StrNewGallery },
 
  props: {
    photoGallery: Object
  },
  data: () => ({

    newImage: {
      sorting: 1,
      image_alt: '',
      image_title: '',
      image_name: '',
      image: '',
      photo_gallery_id: null
    }
  }),


  emits: ['checkImages', 'saveGallery'],
  computed: {
    ...mapGetters({selected: 'fm/selectedItems', portions: 'Portions/getPortions'}),
 


  },


  methods: {

    checkPortions(evt) {
      const portion = this.portions.find(i => i.id === +evt.target.value)
      if (portion) {
        this.coordinates.width = portion.width
        this.coordinates.height = portion.height
      }
    },

  },
  mounted() {
    
  },


}
</script>

