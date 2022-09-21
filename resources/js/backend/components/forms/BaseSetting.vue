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
export default {
  name: "BaseSetting",
  emits: ['UpdateSetting'],
  props: {
    page: {
      required: true,
      type: Object,
      default: {
        translate: {
          slug: null,
          meta_title: null,
          meta_description: null,
          meta_keywords: null,
          footer_text: null,
        }
      }
    }
  },    
  methods: {
    UpdateSetting(){
      this.$emit('UpdateSetting')
    }
  }     
}
</script>

