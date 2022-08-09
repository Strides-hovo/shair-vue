<template>

  <div class="info-item small">
          <span>
            description:
          </span>
    <input type="text" placeholder="אנא הזינו שם ב-Hebrew" v-model="page.translate.description">
  </div>
  <div class="info-item">
          <span>
            {{ language.name }}: טקסט תחתון ב-
          </span>
    <input type="text" :placeholder="'אנא הזינו טקסט תחתון ב-' + language.name" v-model="page.translate.name">
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "str-meta-data",
  props: {
    page: {}
  },
  computed:{
    ...mapGetters({language: "lang/getLanguage"}),


  }

}
</script>

