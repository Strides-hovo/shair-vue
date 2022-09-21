<template>
  <div class="cupons-modal-edit" :class="{active: ButtonEdit}">
    <div class="cupons-modal-edit__close" @click="closeModal">
      <base-icon icon="close" width="15" height="15"/>
    </div>
    <div class="cupons-modal-edit__title">
      עריכת קופון
    </div>
    <div class="cupons-modal-edit__content">
      <div class="cupons-modal-edit__content-item">
        <span>שם הקופון: </span>
        <input type="text" placeholder="חמש" v-model="coupon.translate.name" v-if="coupon.translate">
      </div>
      <div class="cupons-modal-edit__content-item">
        <span>הנחה: </span>
        <label>
          <select v-model.number="coupon.discount">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </label>
      </div>
      <div class="cupons-modal-edit__content-item">
        <label>
          <select v-model="coupon.operation">
            <option value="percent" :selected="coupon.operation === 'percent'">אחוז</option>
            <option value="sum" :selected="coupon.operation === 'sum'">אחוז</option>
          </select>
        </label>
      </div>
    </div>
    <div class="cupons-modal-edit__categories">
      <div class="cupons-modal-edit__categories-title">
        תקף לקטגוריות:
      </div>
      <div class="cupons-modal-edit__categories-item"
           v-for="category in categories"
           :key="category.id"
      >
        <label>
          <input type="checkbox" :value="category.id" v-model="coupon.category_ids">
          <span class="fake"></span>
          <span class="text"> {{ category.translate?.name }}</span>
        </label>
      </div>

    </div>
    <button class="cupons-modal-edit__btn btn" @click="UpdateCoupon">
      שמור
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CouponEdit",
  emits: ['update:ButtonEdit'],
  data:() => ({
    name: ''
  }),
  props: {
    ButtonEdit: false,
    coupon: {}
  },
  computed: {
    ...mapGetters({
      //categories: 'category/all',
      languageId: 'lang/getLanguageId',
      categoryData: 'category/getByLanguage'
    }),
    categories(){
      return this.categoryData(this.languageId)
    }
  },
  methods: {
    ...mapActions(['coupon/UPDATE', 'category/set']),
    closeModal() {
      this.$emit('update:ButtonEdit', false)
    },

    UpdateCoupon() {
      const coupon = this.coupon
      coupon.translate.coupon_id = this.coupon.id
      this['coupon/UPDATE'](coupon)
    },

  },

  mounted() {
    if (!this.categories.length) {
      this['category/set']()
    }
    if (this.coupon.translate && !('name' in this.coupon.translate) ){
      this.coupon.translate.name = ''
    }

  }
}
</script>

