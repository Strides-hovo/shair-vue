<template>
  <div class="product">

    <div class="container">
      <div class="product-body">

        <the-product-cost :product="product"/>

        <div class="pricelist-modal__desc">
          <div class="pricelist-modal__desc-title">{{ product.translate.name }}</div>

          <the-product-description :product="product"/>

          <the-product-advantage :product="product"/>

          <the-product-step :product="{}"/>
        </div>

        <the-product-gallery :product="product"/>
      </div>
    </div>
  </div>

  <base-meta-info :metaInfo="metaInfo" />

</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import TheProductGallery from './modules/TheProductGallery.vue';
import TheProductCost from './modules/TheProductCost.vue';
import TheProductAdvantage from './modules/TheProductAdvantage.vue';
import TheProductDescription from './modules/TheProductDescription.vue';
import TheProductStep from './modules/TheProductStep.vue';
import BaseMetaInfo from "@frontend/components/BaseMetaInfo";

export default {
  name: 'FrontProduct',
  emits: ['footerContent'],
  components: {
    TheProductGallery, TheProductCost, TheProductDescription,
    TheProductAdvantage, TheProductStep, BaseMetaInfo},

  watch: {
    'product.translate.slug'(slug) {
      if (slug){
        this.$router.replace({name: 'Product', params: {id: this.id, slug: slug}})
      }
      this.$emit('footerContent',{
        footer_text: this.product.translate.footer_text
      })
    },

  },

  props: {
    id: {
      required: true,
    },
    slug: {
      required: true,
    }
  },

  computed: {

    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      productData: 'products/GET_FRONT_PRODUCT'
    }),

    product() {
      return this.productData(this.id, this.language.id)
    },

    metaInfo(){
      return {
        title: this.product.translate.meta_title,
        meta_description: this.product.translate.meta_description,
        meta_keywords: this.product.translate.meta_keywords,
      }
    }
  },

  methods:{
    ...mapActions([
      'category/SET_PRODUCTS_BY_CATEGORY',

    ]),
  },

  mounted() {
    if (!this.product){
      this['category/SET_PRODUCTS_BY_CATEGORY']()
    }

    this.$emit('footerContent',{
      footer_text: this.product.translate.footer_text
    })
  }
}
</script>

