<template>

  <div class="product-new" :class="{active: ButtonProductList}">
    <div class="product-new__bg"></div>
    <div class="product-new__content">
      <div class="product-new__content-top">
                  <span class="product-new__close" @click="closeModal">
                    <base-icon icon="close" width="15" height="15"/>
                  </span>
        <div class="product-new__content-div">
          <base-icon icon="div" width="1" height="15"/>
        </div>
        <div class="search">
          <button>חפש</button>
          <input type="text" placeholder="חיפוש לפי שם מוצר " v-model="searchName">
        </div>
        <div class="container-content__submenu-select">
          <label>
            <select v-model="category_id">
              <option value="">כל המוצרים</option>
              <option :value="category.id" v-for="category in categories" :key="category.id">{{
                  category.translate.name
                }}
              </option>
            </select>
          </label>
          <span>
                      מוצרים לתצוגה:
                    </span>
        </div>
        <span class="product-new__title">
                    הוספת מוצרים משלימים
                  </span>
      </div>
      <div class="product-new-modal__content">
        <table class="orders productspage product-products">
          <thead>
          <tr>
            <td>
<!--              <label>-->
<!--                <input type="checkbox">-->
<!--                <span class="fake"></span>-->
<!--              </label>-->
            </td>
            <td>
              תמונה של המוצר
            </td>
            <td>
              שם המוצר
            </td>
            <td>
              קטגוריה
            </td>
          </tr>
          </thead>
          <tbody>
          <tr class="order-row" v-for="product in productsList" :key="product.id">
            <td>
              <label>
                <input type="radio" name="product_id"
                       @change="checkProduct(product.id)"
                       :checked="product_id === product.id"
                >
                <span class="fake"></span>
              </label>
            </td>
            <td>
              <img :src="product.photos[0]?.image">
            </td>
            <td>
              {{ product.translate.name }}
            </td>
            <td>
              {{ product.category.translate.name }}
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <button class="product-new-modal__btn btn" @click="saveProduct">
        שמור
      </button>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "BaseProductList",
  emits: ['update:ButtonProductList', 'checkProduct'],
  props: {
    ButtonProductList: false,
    product_id: null
  },
  data() {
    return {
      searchName: null,
      category_id: '',
      check_product: null
    }
  },
  computed: {
    ...mapGetters({
      productsData: 'products/GET_PRODUCTS_FILTER',
      categoriesData: 'category/getByLanguage',
      languageId: 'lang/getLanguageId',
    }),

    productsList() {
      return this.productsData(this.languageId, this.category_id, this.searchName)
    },

    categories() {
      return this.categoriesData(this.languageId)
    }


  },
  methods: {
    ...mapActions(['products/set', 'category/set']),

    closeModal() {
      this.$emit('update:ButtonProductList', !this.ButtonProductList)
      console.log(this.ButtonProductList)
    },

    checkProduct(product_id) {
     this.check_product = product_id
    },

    saveProduct(){
      this.$emit('checkProduct',this.check_product)
      this.$emit('update:ButtonProductList', !this.ButtonProductList)
    }
  },

  mounted() {
    if (this.productsList.length === 0) {
      this['products/set']()
    }
    if (this.categories.length === 0) {
      this['category/set']()
    }

  }
}
</script>

