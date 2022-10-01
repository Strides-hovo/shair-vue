<template src="./index.html"></template>


<script>

import {mapActions, mapGetters} from 'vuex'

import MyBaseSetting from "../../components/forms/MyBaseSetting";
export default {
  name: 'About',
  components: { MyBaseSetting},

  data: () => ({
    defaultLanguage: null,
    ButtonLeftAside: false,
  }),


  computed: {
    ...mapGetters({
      language_id: 'lang/getLanguageId',
      language: 'lang/getLanguage',
      pageData: 'about/GET_PAGE',
    }),

    page() {
      return this.pageData(this.language_id)
    },

  },
  methods: {
    ...mapActions([
      'about/SET_PAGE',
      'about/UPDATE_PAGE',
    ]),

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

