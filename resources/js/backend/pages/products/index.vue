<template src="./index.html"></template>
<!-- <template ></template> -->

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Products",

  data: () => ({
    category_id: null,
  }),


  computed: {

    ...mapGetters({
      languageId: 'lang/getlanguageId',
      categoriesByLang: 'category/getByLanguage',
      GET_PRODUCTS_BY_CAT: 'products/GET_PRODUCTS_TR_CAT'
    }),

    products() {
      return this.GET_PRODUCTS_BY_CAT( this.languageId, this.category_id)
    },

   

    categories() {
      return this.categoriesByLang(this.languageId)
    },


  },

  methods: {
    ...mapActions(['products/set', 'category/set']),
  


    ChangeCategory(evt) {
      let value = +evt.target.value
      if (value === 0) {
        this.category_id = null
      }
      else {
        this.category_id = value
      }

    },

    categoryName(id) {
      const category = this.categories.find(cat => cat.id === id)
      return category && category.translate ? category.translate.name : null
    },
  },

 async mounted() {

    if (this.products.length === 0) {
         await this['products/set']()
    }

    this['category/set']()

    
  }
}
</script>

