<template>
  <div class="cart-btns">
    <div class="cart-btns__item peoducts-add-new btn circle" @click="AddCoupon">
      <base-icon icon="add-icon" width="14" height="14" />
    </div>
    <base-translate-slide >
    <button class="cart-btns__item btn"
            v-if="selectedIds.length"
            @click="DeleteCoupons"
    >
      מחיקה
    </button>
    </base-translate-slide>
  </div>

  <div class="container-content">
    <div class="container-content__top">
      <language-select />
      <div class="search">
        <button>חפש</button>
        <input type="text" placeholder="חיפוש לפי שם / סכום / מסי הזמה ">
      </div>
      <div class="container-content__top-title">
        קופונים וחבילות
        <span> קופונים </span>
      </div>
    </div>
    <div class="container-content__body">

      <table class="orders cupons">
        <thead>
        <tr>
          <td>
            <label>
              <input type="checkbox" v-model="SelectAll">
              <span class="fake"></span>
            </label>
          </td>
          <td>
            שם קופון
          </td>
          <td>
            הנחה
          </td>
          <td>
            פעולות
          </td>
        </tr>
        </thead>
        <tbody>

        <coupon-item
            v-for="coupon in coupons"
            :key="coupon.id"
            v-model:selectedIds="selectedIds"
            :coupon="coupon"
            @OpenEditModal="OpenEditModal"
        />

        </tbody>
      </table>
    </div>
  </div>
  <coupon-edit
      v-model:ButtonEdit="ButtonEdit"
      :coupon="coupon"
  />

</template>

<script>
import CouponEdit from "./CouponEdit";
import CouponItem from "./CouponItem";
import {mapActions, mapGetters} from "vuex";

import BaseTranslateSlide from "../../components/BaseTranslateSlide";


export default {
  name: "page",
  components: {BaseTranslateSlide, CouponItem, CouponEdit},

  data: () => ({
    ButtonEdit: false,
    coupon: {},
    selectedIds: []
  }),

  computed: {
    ...mapGetters({
      couponsData: 'coupon/GET_COUPONS',
      languageId: 'lang/getLanguageId'
    }),

    coupons(){
      return this.couponsData(this.languageId)
    },

    SelectAll:{
      get() {
        return this.selectedIds.length && this.coupons.length === this.selectedIds.length
      },
      set(value) {
        this.selectedIds = value ? this.coupons.map(i => i.id) : []
      }
    }

  },
  methods:{
    ...mapActions(['coupon/SET','coupon/DESTROY','coupon/CREATE']),

    OpenEditModal(coupon){
      this.coupon = coupon
      this.ButtonEdit = true
    },
    DeleteCoupons(){
      this['coupon/DESTROY'](this.selectedIds)
      this.selectedIds = []
    },

    AddCoupon(){
      const coupon = {
        translate: {
          name: 'new',
          language_id: this.languageId
        },
        discount: 15,
        operation: 'percent',
        status: true,
        category_ids: [1]
      }
      this['coupon/CREATE'](coupon)
    }

  },
  mounted() {
    if (!this.coupons.length){
      this['coupon/SET']()
    }
  }

}
</script>

