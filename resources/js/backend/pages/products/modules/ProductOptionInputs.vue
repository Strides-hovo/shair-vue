<template>
  <div class="info-row">
    <div class="info-item small" @click="selectList = !selectList">
          <span>
            קטגוריה:
          </span>
      <label>

        <div class="select" >
          <span v-if="category">{{ category.translate.name }} </span>
          <ul class="select-list" v-show="selectList">
            <li class="option"
                v-for="category in categories"
                :key="category.id"
                :class="{active: category.id === category_id }"
                @click="SelectCategory(category.id)"
            >
              {{ category.translate.name }}
            </li>
          </ul>

        </div>

      </label>
    </div>
  </div>

  <product-input-text :label="`${language.code} שם ב-`" v-model:name="product.translate.name"/>
  <product-input-text :label="`${language.code} אנא הזינו תיאור קצר ב-`"
                      v-model:name="product.translate.short_description"/>
  <product-input-text :label="`${language.code} אנא הזינו תיאור ארוך ב-`" v-model:name="product.translate.description"/>

  <div class="products-modal-seo__content-item">
        <span>
          {{ `${language.code} אנא הזינו יתרונות המוצר ב-` }}
        </span>
    <textarea name="advantage" v-model="product.translate.advantage"> </textarea>
  </div>



  <div class="info-item">
        <span>
          <b>{{ CleanProduct.Instruction_file }}</b> קובץ הוראות בפורמט PDF:
        </span>
    <base-file-upload @UploadNewFile="UploadPdf" type="application/pdf">
      <label class="file-upload">
            <span>
              הוספת קובץ
            </span>
      </label>
    </base-file-upload>
  </div>
  <div class="info-row">
    <div class="info-col">
      <div class="info-col__title">
        אפשרויות נוספות:
      </div>
      <div class="info-col__body">

        <product-input-checkbox v-model:name="product.sale" label=" נמצא במלאי - מחירון"/>
        <product-input-checkbox v-model:name="product.rent" label="נמצא במלאי - השכרה"/>
        <product-input-checkbox v-model:name="product.status" label="נמצא בעמוד מוצרים"/>
        <product-input-checkbox v-model:name="product.guarantee" label="יש אחריות למוצר זה"/>

      </div>
    </div>
    <div class="info-col">
      <div class="info-col__title">
        תוויות:
      </div>
      <div class="info-col__body">
        <div class="info-col__body-item" v-for="(flag,i) of flags" :key="flag.key">

          <label class="radio">

            <input type="radio" :checked="product.flag === flag.key" name="flag" :value="flag.key"
                   v-model="product.flag">
            <span class="fake"></span>
            <span class="text">
                  {{ flag.val }}
                </span>
          </label>
          <div v-if="i === 0" class="flag-text">
            <input type="text" v-model="product.translate.flag_text">
          </div>
        </div>


      </div>
    </div>
  </div>
  <div class="info-row">
    <div class="product-params__type">
      <div class="product-params__type-item">
        <label>
          <input type="radio" :checked="!product.dimension" :value="0" @change="dimension" name="dimension">
          <span class="fake"></span>
          <span class="text">
                מוצר ללא מידות
              </span>
        </label>
      </div>
      <div class="product-params__type-item">
        <label>
          <input type="radio" :checked="product.dimension" :value="1" @change="dimension" name="dimension">
          <span class="fake"></span>
          <span class="text">
                מוצר עם מידות
              </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import ProductInputText from "./ProductInputText";
import ProductInputCheckbox from "./ProductInputCheckbox";
import BaseFileUpload from "@backend/components/BaseFileUpload";

export default {

  name: "ProductOptionInputs",
  emits:['update:category_id'],
  components: {ProductInputText, ProductInputCheckbox, BaseFileUpload},
  props: {
    product: {
      required: true,
      type: Object
    },

  },

  data() {
    return {

      flags: [
        {key: 'stock', val: 'קנה קבל'},
        {key: 'sale', val: 'מבצע'},
        {key: 'new', val: 'חדש'},
        {key: 'noting', val: 'ללא'}
      ],

      selectList: false,
      category_id: null,
      CleanProduct: {
        Instruction_file: this.product.Instruction_file,
        category_id: this.product.category_id,
        dimension: this.product.dimension,
        flag: this.product.flag,
        guarantee: this.product.guarantee,
        id: this.product.id,
        rent: this.product.rent,
        sale: this.product.sale,
        status: this.product.status,
      }
    }
  },

  computed: {
    ...mapGetters({
      language: 'lang/getLanguage',
      productData: 'products/GET_PRODUCT',
      categoriesData: 'category/getByLanguage'
    }),

    categories() {
      return this.categoriesData(this.language.id)
    },

    category(){
      if (this.category_id){
        return this.categories.find(cat => cat.id === this.category_id)
      }

    },


  },



  methods: {
    ...mapActions(['products/update']),

    dimension(evt){

      const dimension = Boolean(Number(evt.target.value))
      this.CleanProduct.dimension = dimension

      this['products/update'](this.CleanProduct)

    },

    SelectCategory(id) {

      const confirm = window.confirm('do you check')
      if (confirm){
        this.CleanProduct.category_id =  this.category_id = Number(id)
        this['products/update'](this.CleanProduct)
      }

    },

    UploadPdf(file) {

      this.CleanProduct.Instruction_file = file.src
      this['products/update'](this.CleanProduct)
    }
  },

  mounted() {
    this.category_id = this.product.category_id
  }
}
</script>
<style >
.info-col__body-item{
  display: flex;
}
.flag-text input{
  background: none;
  border-bottom: 1px solid #87A8C9;
  margin-right: 10px;
}

.container-content__body-info.article .info-item.small label .select {
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #87a8c9;
  padding: 0 0 10px;
  margin: 2px 0 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #8cb3d1;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: relative;
}
.select-list{
  position: absolute;
  background: #eef6fe;
  top: 30px;
  width: 100%;
  border: 1px solid;
  padding: 0 10px;
}

li.option {
  margin: 10px 0;

}



</style>
