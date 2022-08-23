<template src="./page.html"></template>

<script>
import {mapGetters, mapActions} from "vuex";
import BaseSetting from "@backend/components/forms/BaseSetting";
import BaseProductList from "@backend/components/BaseProductList";

import PageImageBlock from "./PageImageBlock";

export default {
  name: "BackendArticle",
  components: {BaseSetting, BaseProductList, PageImageBlock},
  props: {
    id: {
      required: true
    },
  },
  data: () => ({
    ButtonLeftAside: false,
    ButtonProductList: false
  }),

  computed: {
    ...mapGetters({
      pageData: "article/GET_ARTICLE",
      languageId: 'lang/getLanguageId',
      language: 'lang/getLanguage'
    }),

    page() {
      return this.pageData(this.id, this.languageId)
    }
  },

  methods: {

    ...mapActions(['article/UPDATE']),

    CloseLeftAside() {
      this.ButtonLeftAside = false
    },

    UpdatePage() {
      this['article/UPDATE'](this.page)
    },

    UpdateSetting() {
      this['article/UPDATE'](this.page)
      this.ButtonLeftAside = false
    },

    UpdateImage(page) {
      page.id = page.translate.article_id = this.id
      page.translate.language_id = this.languageId
      this['article/UPDATE'](page)
    },

    checkProduct(product_id) {
      this.page.product_id = product_id
      this['article/UPDATE'](this.page)
    },


  },
  mounted() {

  }

}
</script>
<style scoped>
.container-content__body-info.article .info-row .info-item {
  margin-top: 23px;
}

textarea {
  height: 70px;
  resize: none;
  outline: none;
  margin: 2px 0 0 0;
  background-color: transparent;
  padding: 0 0 7px;
  font-size: 14px;
  line-height: 25px;
  color: #2B2B2B;
  border-bottom: 1px solid #87A8C9;
  width: 100%;
  text-decoration: underline;
}

</style>
