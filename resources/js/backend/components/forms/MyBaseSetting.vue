<template>
  <div class="productpage-modal__top">
    <div class="productpage-modal__top-item">
      <span>Page Slug:</span>
      <input type="text" placeholder="אנא הזינו שם לעמוד ב URL" v-model="page.translate.slug">
    </div>
  </div>
  <div class="productpage-modal__content">
    <div class="productpage-modal__content-title">
      הגדרות META:
    </div>
    <div class="productpage-modal__content-item">
      <span>Meta Title:</span>
      <input type="text" placeholder="אנא הזינו Page Title" v-model="page.translate.meta_title">
    </div>
    <div class="productpage-modal__content-item">
      <span>:Meta Description </span>
      <input type="text" placeholder="אנא הזינו Meta Description" v-model="page.translate.meta_description">
    </div>
    <div class="productpage-modal__content-item">
      <span>Meta Keywords:</span>
      <input type="text" placeholder="אנא הזינו Meta Keywords" v-model="page.translate.meta_keywords">
    </div>
    <div class="products-modal-seo__content-item">
      <span>Footer text:</span>
      <textarea v-model="page.translate.footer_text"></textarea>
    </div>
  </div>
  <button class="productpage-modal__btn btn" @click="UpdateSetting">
    שמור
  </button>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MyBaseSetting",
  emits:['update:ButtonLeftAside'],
  props: {
    pageName: {
      type: String,
      required: true
    },
    ButtonLeftAside: false
  },
  computed: {
    ...mapGetters({
      pageData: 'page/GET_PAGE',
      languageId: 'lang/getLanguageId'
    }),
    page() {
      return this.pageData(this.pageName, this.languageId)
    }
  },
  methods: {
    ...mapActions(['page/SET_PAGES', 'page/UPDATE_OR_CREATE']),

    UpdateSetting() {
      this['page/UPDATE_OR_CREATE'](this.page)
      this.$emit('update:ButtonLeftAside',false)
    }
  },
  mounted() {
    if (this.page && !('id' in this.page)){
      this['page/SET_PAGES']()
    }
  }
}
</script>

