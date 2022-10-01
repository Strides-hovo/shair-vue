<template src="./pages.html"></template>


<script>


import TheProductsCart from "./modules/TheProductsCart.vue";
import TheProductsStatus from "./modules/TheProductsStatus.vue";
import BaseTranslateSlide from "@backend/components/BaseTranslateSlide.vue";
import MyBaseSetting from "../../components/forms/MyBaseSetting";

import {mapActions, mapGetters} from "vuex";

export default {

  name: "BackendProducts",
  components: { TheProductsCart, BaseTranslateSlide, TheProductsStatus, MyBaseSetting},

  data: () => ({
    ButtonLeftAside: false,
    ButtonRentTab: false,
    ButtonSaleTab: true,
    selectedIds: [],
    ProductsType: 'sale',
    category_id: '',
    searchName: '',
  }),


  computed: {

    ...mapGetters({
      languageId: 'lang/getLanguageId',
      categoriesByLang: 'category/getByLanguage',
      GET_PRODUCTS_TR_CAT: 'products/GET_PRODUCTS_TR_CAT',
    }),


    products() {
      return this.GET_PRODUCTS_TR_CAT(this.languageId, this.ProductsType, this.category_id, this.searchName)
    },

    products_status(){
      return this.products[0]?.status
    },

    categories() {
      return this.categoriesByLang(this.languageId)
    },

    selectAll: {
      get: function () {
        return this.selectedIds.length === this.products.length && this.selectedIds.length > 0
      },
      set: function (value) {
        this.selectedIds = value ? this.products.map(i => i.id) : []
      }
    },


  },

  methods: {
    ...mapActions([
      'products/set',
      'products/create',
      'products/copy',
      'products/update',
      'products/destroy',
      'products/export',
      'category/set',
      'products/exportAll'

    ]),

    toggleTab(type) {

      this.ProductsType = type
      this.ButtonSaleTab = !this.ButtonSaleTab
      this.ButtonRentTab = !this.ButtonRentTab
    },

    ChangeCategory(evt) {
      let value = +evt.target.value
      if (value === 0) {
        this.category_id = null
      } else {
        this.category_id = value
      }
    },


    Copy(product) {
      const prefix = '-copy'
      const newProduct = JSON.parse(JSON.stringify(product));

      newProduct.translations?.map(pr => {
        pr.name += prefix
        pr.slug += prefix
        return pr
      })

      newProduct.translate.name += prefix
      newProduct.translate.slug += prefix
      this['products/copy'](newProduct)
    },

    create(){
      this['products/create']([])
    },

    export_data(){
      //this['products/exportAll']()
      this['products/export']()
    },

    destroy(){
      this['products/destroy'](this.selectedIds)
      this.selectedIds = []
    },

    UpdateSetting() {
      const page = this.page
      page.translate.language_id = this.languageId
      page.name = 'Products'
      this['page/UPDATE_OR_CREATE'](page)

      this.ButtonLeftAside = false
    },



  },

  async mounted() {

    if (this.products.length === 0) {
      await this['products/set']()
    }

    if (!this.categories.length ) {
      await this['category/set']()
    }



  }
}
</script>

