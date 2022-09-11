<template>
  <router-view v-if="$route.name === 'Product'"/>

  <div class="products" v-else>
    <div class="products__title title">
      <span></span>
      {{ $trans._lang('Products') }}
      <span></span>
    </div>

<!--    <the-products-mobile :products="products"/>-->

    <div class="products-body">
      <div class="products-body__content">
        <the-products-cart
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
      </div>

      <the-products-sidebar :categories="categories" />

    </div>
  </div>

<!--  <base-meta-info-->
<!--      v-model:metaInfo="setMetaInfo"-->
<!--      v-if="page"-->
<!--  />-->

</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import PagesSidebar from '@frontend/components/sidebar/PagesSidebar.vue'
import TheProductsSidebar from './modules/TheProductsSidebare'
import TheProductsCart from '@frontend/pages/product/modules/TheProductsCart'
import TheProductsMobile from '@frontend/pages/product/modules/TheProductsMobile'

export default {
  name: 'frontProducts',
  emits: ['footerContent'],
  components: {PagesSidebar, TheProductsCart, TheProductsMobile, TheProductsSidebar },

  data: () => ({
    category_id: null
  }),

  props:{
    id: {
      required: false
    },
    slug:{
      required: true
    }
  },
  // watch: {
  //   'page.translate.slug'(slug) {
  //     console.log(slug)
  //     // if (slug)
  //     //   this.$router.replace({name: 'Products', params: {slug}})
  //   },
  // },

  computed: {
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      productsData: 'category/GET_CATEGORY_PRODUCTS',
      pageData: 'page/GET_PAGE'
    }),

    categories() {
      return this.productsData(  this.language.id, this.id)
    },

    products(){
      if (Array.isArray(this.categories)){
        const categories = this.categories.map(category => category.products)
        return  categories.reduce(function(flat, current) {
          return flat.concat(current);
        }, [])
      }
      return  this.categories.products





    },

    page() {
      return this.pageData('Products', this.language.id)
    },

    setMetaInfo() {
      if ( 'id' in this.page ){
        return {
          title: this.page.translate.meta_title,
          meta_keywords: this.page.translate.meta_keywords,
          meta_description: this.page.translate.meta_description,
        }
      }
    }

  },
  methods: {
    ...mapActions([
      'category/SET_PRODUCTS_BY_CATEGORY',
      'page/SET_PAGES'
    ]),


  },
  mounted() {
    if ( this.categories.length  === 0) {
      this['category/SET_PRODUCTS_BY_CATEGORY']()
    }

   

    if (! ('id' in this.page) ){
      this['page/SET_PAGES']()
    }

    this.$emit('footerContent',{
      footer_text: 'product'
    })

  }

}
</script>

