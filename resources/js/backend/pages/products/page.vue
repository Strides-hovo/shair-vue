<template src="./page.html"></template>

<script>

import {mapActions, mapGetters, mapMutations} from "vuex";
import PhotoVideo from "./modules/photo-video";
import Options from "./modules/options";
import Complementary from "./modules/complementary";
import BaseSetting from "@backend/components/forms/BaseSetting.vue";
export default {
  name: "Product",
  components: {PhotoVideo, Options, Complementary, BaseSetting},

  props: {
    id: {
      required: true
    },
  },

  data: () => ({
    activeTabs: 'options',
    ButtonSetting: false,

  }),

  computed: {
    ...mapGetters({
      languageId: 'lang/getLanguageId',
      productData: 'products/GET_PRODUCT',
    }),

    product() {
      return this.productData(this.id, this.languageId)
    },

    translate(){
      const  {translate} = this.product;
      return translate
    },
    translations(){
      const  {translations} = this.product;
      return translations
    },
    photos(){
      const  {photos} = this.product;
      return photos
    },
    videos(){
      const  {videos} = this.product;
      return videos
    },
    category(){
      const  {category} = this.product;
      return category
    },
    sizes(){
      const  {sizes} = this.product;
      return sizes
    },
    additions(){
      const  {additions} = this.product;
      return additions
    },
    product_data(){
      const {sizes, additions, translations, translate, photos, videos, category, ...product_data} = this.product
      return product_data
    },


  },


  methods: {

    ...mapActions(['products/update', 'products/export', 'category/set']),

    activeTab(name) {
      return this.activeTabs === name
    },

    SaveProduct() {
      const product = JSON.parse(JSON.stringify(this.product_data))
      product.translate = this.translate

      this['products/update'](product)
      this.ButtonSetting = false
    },


  },


}
</script>


<style>
.tabs > span {
  cursor: pointer;
}
</style>