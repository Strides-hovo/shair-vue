<template src="./index.html"></template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import PhotoVideo from "./models/photo-video";
import Options from "./models/options";
import Complementary from "./models/complementary";



export default {
  name: "Product",
  components: { PhotoVideo, Options, Complementary },

  props: {
    id: {
      required: true
    },

  },

  data: () => ({
    activeTabs: 'photo',
    ButtonSetting: false,
    category_id : Number
  }),


  computed: {
    ...mapGetters({
      languageId: 'lang/getlanguageId',
      productData: 'products/GET_PRODUCT',
      categoriesData: 'category/getByLanguage'
    }),

    product(){
      return this.productData(this.id,this.languageId)
    },
    categories(){
      return this.categoriesData(this.languageId)
    }

  },




  methods: {

    activeTab(name) {
      return this.activeTabs === name
    },

    ...mapActions(['products/update','category/set']),

    SaveProduct(){
      this['products/update'](this.product )
      this.ButtonSetting = false
    },
    Instruction_file(file){
      this.product.Instruction_file = file
    }

  },


}
</script>










<style >
.tabs > span {
  cursor: pointer;
}
</style>