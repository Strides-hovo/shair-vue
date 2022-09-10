<template>
  <router-view v-if="$route.name === 'Product'"/>

  <div class="products" v-else>
    <div class="products__title title">
      <span></span>
      {{ $trans._lang('Categories') }}
      <span></span>
    </div>
    <the-products-mobile :products="category.products"/>

    <div class="products-body">
      <div class="products-body__content" v-if="category">

        <the-products-cart
            v-for="product in category.products"
            :key="product.id"
            routeName="Product"
            :product="product"

        />
      </div>

      <the-products-sidebar />

    </div>
  </div>

  <base-meta-info :metainfo="setMetaInfo" v-if="category"/>

</template>

<script>

import {mapActions, mapGetters} from "vuex";
import TheProductsSidebar from './modules/TheProductsSidebare'
import TheProductsCart from '@frontend/pages/product/modules/TheProductsCart'
import TheProductsMobile from '@frontend/pages/product/modules/TheProductsMobile'


export default {
  emits:['footerContent'],
  props:{
    slug: '',
    id: {
      required: true
    }
  },
  components: { TheProductsCart, TheProductsMobile, TheProductsSidebar },

  watch: {
    'category.translate.slug'(slug) {
      if (slug)
        this.$router.replace({name: 'Categories', params: {id: this.id, slug}})
    },
  },
  computed:{
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      catData: 'category/GET_CATEGORY_PRODUCTS',
      pageData: 'page/GET_PAGE'
    }),

    category(){
      return this.catData(this.id, this.language.id)
    },
    setMetaInfo() {
      return {
        title: this.category.translate.meta_title || '',
        meta_keywords: this.category.translate.meta_keywords,
        meta_description: this.category.translate.meta_description,
      }
    }

  },
  methods:{
    ...mapActions(['category/SET_PRODUCTS_BY_CATEGORY'])
  },

  mounted() {
    //this['category/SET_PRODUCTS_BY_CATEGORY']()

    this.$emit('footerContent',{
      footer_text: 'ppp'
    })
  }
}
</script>

