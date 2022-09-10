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
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import TheProductGallery from './modules/TheProductGallery.vue';
import TheProductCost from './modules/TheProductCost.vue';
import TheProductAdvantage from './modules/TheProductAdvantage.vue';
import TheProductDescription from './modules/TheProductDescription.vue';
import TheProductStep from './modules/TheProductStep.vue';

export default {
  name: 'FrontProduct',
  components: {TheProductGallery, TheProductCost, TheProductDescription, TheProductAdvantage, TheProductStep},

  watch: {
    'product.translate.slug'(slug) {
      if (slug)
        this.$router.replace({name: 'Product', params: {id: this.id, slug: slug}})
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
      productData: 'category/GET_PRODUCT'
    }),

    product() {
      return this.productData(this.id, this.language.id)
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

  }
}
</script>

