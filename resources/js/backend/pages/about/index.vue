<template src="./index.html"></template>


<script>

import {mapActions, mapGetters} from 'vuex'
import StrSetting from "./modules/StrSetting";

export default {
  name: 'About',

  components: {StrSetting},

  data: () => ({
    defaultLanguage: null,
    ButtonLeftAside: false,
  }),


  computed: {
    ...mapGetters({
      language_id: 'lang/getLanguageId',
      language: 'lang/getLanguage',
      about: 'about/GET_PAGE',
    }),

    page() {
      const page = this.about(this.language_id)
      const id = page.id ?? null
      return page.translate && page.translate.language_id ? page : this.newPage(id)
    },

  },
  methods: {
    ...mapActions([
      'about/SET_PAGE',
      'about/UPDATE_PAGE',
    ]),
    newPage(about_id) {
      let translate = {
        translate : {
          language_id: this.language_id,
          content: '',
          title: '',
        }
      }
      if(about_id)  translate.translate.about_id = about_id
      return translate
    },
    UpdatePage() {
      this['about/UPDATE_PAGE'](this.page)
      this.CloseLeftAside()
    },

    CloseLeftAside() {
      this.ButtonLeftAside = false
    }

  },
  mounted() {
    this['about/SET_PAGE']()
  }


}
</script>

