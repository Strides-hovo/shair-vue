<template src="./index.html"></template>

<script>

import {mapActions, mapGetters} from "vuex";
import AddPage from '@backend/components/forms/AddPage'

import MyBaseSetting from "../../components/forms/MyBaseSetting";
export default {
  name: "BackendArticles",
  components: {AddPage, MyBaseSetting },

  data: () => ({
    showIcon: require('@img/icons/show.svg').default,
    unshow: require('@img/icons/close.svg').default,
    NewPage: {
      translate: {
        name: '',
        slug: '',
        meta_title: '',
      }
    },
    searchName: null,
    ButtonNewPageModal: false,
    ButtonLeftAside: false,
  }),

  computed: {
    ...mapGetters({
      pagesDates: 'article/GET_ARTICLES',
      languageId: 'lang/getLanguageId',
    }),

    articles() {
      return this.pagesDates(this.languageId, this.searchName)?.sort((a,b) => a.sorting - b.sorting)
    },
  },

  methods: {
    ...mapActions([
      'article/SET_ARTICLES',
      'article/UPDATE',
      'article/DESTROY',
      'article/CREATE',


    ]),

    UpdatePage(article) {
      console.log(article)
      this['article/UPDATE'](article)
    },

    DeletePage(id) {
      this['article/DESTROY'](id)
    },

    saveNewPage(NewPage) {
      NewPage.translate.language_id = this.languageId
      this['article/CREATE'](NewPage)
      this.NewPage = {
        translate: {
          name: '',
          slug: '',
          meta_title: '',
        }
      }
      this.ButtonNewPageModal = false
    },

    closeNewPageModal() {
      this.ButtonNewPageModal = false
    },



  },

  mounted() {
    if (!this.articles.length) {
      this['article/SET_ARTICLES']()
    }

  }
}
</script>

