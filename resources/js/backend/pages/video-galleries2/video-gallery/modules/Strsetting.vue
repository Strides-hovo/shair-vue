<template>
  <div class="productpage-modal__top">
    <div class="productpage-modal__top-item">
      <span>Page Slug:</span>
      <input type="text" placeholder="אנא הזינו שם לעמוד ב URL" v-model="videoGallery.slug">
    </div>
  </div>
  <div class="productpage-modal__content">
    <div class="productpage-modal__content-title">
      הגדרות META:
    </div>
    <div class="productpage-modal__content-item">
      <span>Page Title:</span>
      <input type="text" placeholder="אנא הזינו Page Title" v-model="videoGallery.meta_title">
    </div>
    <div class="productpage-modal__content-item">
      <span>:Meta Description </span>
      <input type="text" placeholder="אנא הזינו Meta Description" v-model="videoGallery.meta_description">
    </div>
    <div class="productpage-modal__content-item">
      <span>Meta Keywords:</span>
      <input type="text" placeholder="אנא הזינו Meta Keywords" v-model="videoGallery.meta_keywords">
    </div>
  </div>
  <div class="productpage-modal__btn btn" @click="UpdateGallery">
    שמור
  </div>
</template>

<script>
export default {
  name: "str-setting",
  props:{
    videoGallery: {
      type: Object
    }
  },
  emits: ['UpdateGallery'],
  methods: {
      UpdateGallery() {
      this.$emit('UpdateGallery')
    }
  }
}
</script>

<style scoped>

</style>