<template>
  <router-view v-if="$route.name === 'Product'"/>

  <div class="products" v-else>
    <div class="products__title title">
      <span></span>
      {{ $trans._lang('Products') }}
      <span></span>
    </div>

        <the-products-mobile :products="products"/>

    <div class="products-body">
      <div class="products-body__content">
        <the-products-cart
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
      </div>

       <the-products-sidebar :page="page" />

    </div>
  </div>

  <base-meta-info
      v-model:metaInfo="setMetaInfo"
      v-if="page"
  />

</template>

<script>

import {mapGetters, mapActions} from 'vuex'

import TheProductsSidebar from './modules/TheProductsSidebare'
import TheProductsCart from './modules/TheProductsCart'
import TheProductsMobile from './modules/TheProductsMobile'
import Breadcrumb from "../../mixins/Breadcrumb";

export default {
  name: 'frontProducts',
  emits: ['footerContent'],
  components: { TheProductsCart, TheProductsMobile, TheProductsSidebar},

  mixins: [Breadcrumb],

  props: {
    id: {
      required: false
    },
    slug: {
      required: true
    }
  },



  watch: {
    'page.translate.slug'(slug) {
      if (slug) {
        this.$router.replace({name: 'Products', params: {slug}})
      }
      this.$emit('footerContent', {
        footer_text: this.page.translate.footer_text
      })
    },
  },

  computed: {
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      pageData: 'page/GET_PAGE',
      catData: 'category/GET_FRONT_CATEGORY',
      productsData: 'products/GET_FRONT_PRODUCTS'
    }),
    
    pageName(){
      return this.$trans._lang('Products')
    },

    category() {
      return this.catData(this.id, this.language.id)
    },

    products() {
      return this.productsData(this.language.id, Number(this.id))

    },

    page() {
      const page = this.pageData('Products', this.language.id)
      if(this.id && this.category && page.translate){
        page.translate.meta_title = this.category.translate.meta_title
        page.translate.footer_text = this.category.translate.footer_text
        page.translate.meta_description = this.category.translate.meta_description
      }
      return page
    },

    setMetaInfo() {
      if ('id' in this.page) {
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
      'category/set',
      'page/SET_PAGES',
      'products/set'
    ]),

   async get_products(){
     const productsData = await this['products/set']()
     if (!productsData || !this.products.length){
       await this.$router.push({name: 'NotFound'})
     }
    }

  },
  mounted() {
    this.get_products()

    if (!this.category) {
      this['category/set']()
    }

    if (!('id' in this.page)) {
      this['page/SET_PAGES']()
    }


  },
  beforeUpdate() {
    if (this.page && this.page.translate) {
      this.$emit('footerContent', {
        footer_text: this.page.translate.footer_text
      })
    }
  }

}
</script>

