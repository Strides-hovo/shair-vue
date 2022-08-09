<template>

  <div class="info-item small">
          <span>
            description:
          </span>
    <input type="text" placeholder="אנא הזינו שם ב-Hebrew" v-model="PhotoGallery.translate.description">
  </div>
  <div class="info-item">
          <span>
            {{ language.name }}: טקסט תחתון ב-
          </span>
    <input type="text" :placeholder="'אנא הזינו טקסט תחתון ב-' + language.name" v-model="PhotoGallery.translate.name">
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "str-meta-data",
  props: {
    PhotoGallery: {}
  },
  computed:{
    ...mapGetters({language: "lang/getLanguage"}),


  }

}
</script>

