<template>
  <div class="product">

    <div class="container">
      <div class="product-body">

        <the-product-cost v-if="product"  :product="product"/>

        <div class="pricelist-modal__desc">
          <div class="pricelist-modal__desc-title">{{ product?.translate.name }}</div>

          <the-product-description v-if="product" :product="product"/>

          <the-product-advantage v-if="product"  :product="product"/>

          <the-product-step v-if="product" :product="{}"/>
        </div>

        <the-product-gallery v-if="product"  :product="product"/>
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
import Breadcrumb from "../../mixins/Breadcrumb";

export default {
  name: 'FrontProduct',
  emits: ['footerContent'],
  mixins: [Breadcrumb],
  components: {
    TheProductGallery, TheProductCost, TheProductDescription,
    TheProductAdvantage, TheProductStep, BaseMetaInfo},

  watch: {
    'product.translate.slug'(slug) {
      if (slug){
        this.$router.replace({name: 'Product', params: {  slug}})
      }
      this.$emit('footerContent',{
        footer_text: this.product.translate.footer_text
      })
    },
  },

  props: {
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
      const product = this.productData(this.slug, this.language.id)
      return product
    },
    
    pageName(){
      return this.product.translate.name
    },

    metaInfo(){
      if (this.product){
        return {
          title: this.product.translate.meta_title,
          meta_description: this.product.translate.meta_description,
          meta_keywords: this.product.translate.meta_keywords,
        }
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
    else{
      this.$emit('footerContent',{
        footer_text: this.product.translate.footer_text
      })
    }
  },




}
</script>

