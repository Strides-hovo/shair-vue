<template src="./index.html"></template>

<script>

import {mapActions, mapGetters} from "vuex";
import AddPage from '@backend/components/forms/AddPage'
import BaseSetting from "@backend/components/forms/BaseSetting";

export default {
  name: "BackendArticles",
  components: {AddPage, BaseSetting},

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
      pageData: 'page/GET_PAGE',
      languageId: 'lang/getLanguageId',

    }),

    pages() {
      return this.pagesDates(this.languageId, this.searchName)
    },

    page() {
      return this.pageData('article', this.languageId)
    }

  },

  methods: {
    ...mapActions([
      'article/SET_ARTICLES',
      'article/UPDATE',
      'article/DESTROY',
      'article/CREATE',
      'page/SET_PAGES',
      'page/UPDATE'
    ]),

    UpdatePage(article) {
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

    UpdateSetting() {
      const page = this.page
      page.translate.language_id = this.languageId
      this['page/UPDATE'](page)
      this.ButtonLeftAside = false
    }

  },

  mounted() {
    if (this.pages.length === 0) {
      this['article/SET_ARTICLES']()
    }
    if (!this.page) {
      this['page/SET_PAGES']()
    }
  }
}
</script>

