<template src="./page.html"></template>

<script>

import {mapActions, mapGetters, mapMutations} from "vuex";
import PhotoVideo from "./modules/photo-video";
import Options from "./modules/options";
import Complementary from "./modules/complementary";


export default {
  name: "Product",
  components: {PhotoVideo, Options, Complementary},

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


  },


  methods: {

    activeTab(name) {
      return this.activeTabs === name
    },

    ...mapActions([
      'products/update',
      'products/export',
      'category/set'
    ]),

    SaveProduct() {
      this['products/update'](this.product)
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