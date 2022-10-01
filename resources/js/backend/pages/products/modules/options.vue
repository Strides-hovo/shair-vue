<template>
  <div class="container-content__body container-content__body_info">
    <div class="container-content__body-info article product-params">

      <product-option-inputs
          :product="product"
      />

      <div class="product-table-info">
        <div class="product-table-info__tabs">
          <div class="product-table-info__tabs-item" :class="{ active: activeTab === '2.1' }"
               @click="activeTab = '2.1'">
            גובה 2.10
          </div>
          <div class="product-table-info__tabs-item" :class="{ active: activeTab === '2.3' }"
               @click="activeTab = '2.3'">
            גובה 2.30
          </div>
        </div>
        <div class="product-table-info__bottom">
          <div class="product-table-info__title">
            מחירים לפי גדלים
          </div>
          <div class="product-table-info__btns">
            <button class="product-table-info__btns-item" @click="import_data">ייבוא קובץ Excel</button>
            <button class="product-table-info__btns-item" @click="export_data">העלאת קובץ Excel</button>
            <input type="file" class="hidden" ref="import_data" accept=".xls,.xlsx" @change="UploadFile">
          </div>
        </div>
      </div>

      <product-sizes v-model:sizes="sizes"/>

    </div>
  </div>
  <div class="cart-btns">
    <button class="cart-btns__item btn" @click="UpdateProduct">
      שמור
    </button>
  </div>
</template>

<script>

import ProductOptionInputs from "./ProductOptionInputs";
import ProductSizes from "./ProductSizes";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "options",
  components: {ProductOptionInputs, ProductSizes},

  emits: ['update:category_id'],
  props: {
    product: {
      required: true
    }
  },

  data: () => ({
    activeTab: '2.1',
    category_id: null
  }),

  computed: {
    ...mapGetters({
      catData: 'category/FilterSizes',
      languageId: 'lang/getLanguageId',
      productData: 'products/GET_PRODUCT',
    }),

    category() {
      return this.catData(this.category_id ?? this.product.category_id, this.languageId)
    },

    sizes() {
      if (!this.product.dimension) {
        //console.log(1)
        return []
      } else if (this.product.category_id === this.category_id || this.category_id === null) {
        //console.log(2)
        return this.product.sizes[this.activeTab]
      } else {
        //console.log(3)
        return this.category.sizes ? this.category.sizes[this.activeTab] : []
      }

    }

  },

  methods: {

    ...mapActions([
      'products/update',
      'products/export',
      'products/import_file',
      'products/import_all',
      'category/set',
      'products/set',
    ]),

    UpdateProduct() {
      const sizes = this.sizes?.map(s => {
        s.product_id = this.product.id
        s.status = Boolean(s.status)
        return s
      }) || []
      this.product.sizes = sizes
      this['products/update'](this.product)
    },

    export_data() {
      //this['products/export']()
      console.log(this.product.id, this.activeTab)
      this['products/export']({id:this.product.id,size: this.activeTab})
    },

    import_data(){
      this.$refs.import_data.click()
    },

    async UploadFile(evt) {
      let SelectedFile = evt.target.files[0]
      const file = new FormData()
      file.append('file', SelectedFile, SelectedFile.name)
      console.log(SelectedFile, file)

      let response = await this['products/import_all'](file)
      //let response = await this['products/import_file'](file)


      this.$refs.import_data.value = ''
    },


  },

  mounted() {
    if (!('id' in this.category)) {
      this['category/set']()
    }
    this['products/set']()
  }


}
</script>

<style>
.hidden{
  display: none;
}
</style>

