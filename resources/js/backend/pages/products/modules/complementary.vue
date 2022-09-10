<template>
  <div class="cart-btns">
    <div class="cart-btns__item product-add-new btn circle" @click="ButtonProductList = true">
      <base-icon icon="add-icon" width="14" height="14"/>
    </div>
    <base-translate-slide>
      <button class="cart-btns__item btn" v-if="selectedIds.length > 0" @click="deleteAdditions">
        מחיקה
      </button>
    </base-translate-slide>

  </div>
  <div class="container-content__body">
    <table class="orders productspage product-products">
      <thead>
      <tr>
        <td>
          <label>
            <input type="checkbox" v-model="selectAll">
            <span class="fake"></span>
          </label>
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
      <tr class="order-row"
          v-for="product in products"
          :key="product.id">
        <td>
          <label>
            <input type="checkbox"
                   v-model="selectedIds"
                   :value="product.id"
            >
            <span class="fake"></span>
          </label>
        </td>
        <td>
          <img
              v-if="product.photos.length > 0"
              :src="product.photos[0]?.image"
              :alt="product.photos[0]?.translate?.alt"
          >
        </td>
        <td>
          {{ product.translate.name }}
        </td>
        <td>
          {{ product.category?.translate?.name }}
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <base-product-list
      v-model:ButtonProductList="ButtonProductList"
      @checkProduct="checkProduct"
      :product_id="product.id"
      :check_product_ids="check_product_ids"

  />

</template>

<script>
import BaseTranslateSlide from "@backend/components/BaseTranslateSlide";
import BaseProductList from "@backend/components/BaseProductList";


import {mapActions, mapGetters} from "vuex";

export default {
  name: "complementary",
  components: {BaseTranslateSlide, BaseProductList},
  data: () => ({
    selectedIds: [],
    ButtonProductList: false,

  }),
  props: {
    product: {
      required: true
    }
  },
  computed: {
    check_product_ids() {
      return this.product.additions.map(pr => pr.id)
    },
    selectAll: {
      get: function () {
        return this.selectedIds.length === this.products.length && this.selectedIds.length > 0
      },
      set: function (value) {
        this.selectedIds = value ? this.products.map(i => i.id) : []
      }
    },
    ...mapGetters({
      languageId: 'lang/getLanguageId',
      GET_PRODUCTS_BY_IDS: "products/GET_PRODUCTS_BY_IDS",

    }),
    products() {
      const ids = this.product.additions?.map(pr => pr.id)

      return this.GET_PRODUCTS_BY_IDS(ids, this.languageId)
    }
  },
  methods: {
    ...mapActions([
        'products/update',
      'products/updateAdditions',
      'products/deleteAdditions',
    ]),

    checkProduct(product_ids) {
      let additions = []
      product_ids.forEach(id => {
        additions.push({
          product_id: this.product.id,
          additional_id: id
        })
      })
      const product = {
        id: this.product.id,
        additions: additions
      }

      this['products/updateAdditions'](product)
    },

    deleteAdditions(){
      //console.log( this.product.id, this.selectedIds )
      this['products/deleteAdditions']({id:this.product.id, ids: this.selectedIds} ,  )
    }

  }
}
</script>

