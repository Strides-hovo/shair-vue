<template>
  <div class="cart-bottom">
    <div class="cart-bottom__coupon">
      <div class="cart-bottom__coupon-btn">
        <img src="@img/icons/arrow-green.svg" alt="">
        יש לכם קופון? לחצו כאן
      </div>
      <div class="cart-bottom__coupon-content" >
        <button @click="couponApply">אמת קופון</button>
        <input type="text" v-model="couponName">
        <span>קופון</span>
      </div>
    </div>
    <div class="cart-bottom__delivery">
      <div class="cart-bottom__delivery-btn">
        <img src="@img/icons/arrow-green.svg" alt="">
        בחר משלוח/איסוף עצמי
        <span>משלוח</span>
      </div>
    </div>
    <div class="cart-bottom__summary">
      <div class="cart-bottom__summary-container">
        <span>{{ total }} ₪</span>
        <span>סה"כ לתשלום </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheDelivery',
  emits: ['couponApply'],
  props: {
    total: {
      default: 0
    }
  },
  data: () => ({
    couponName: ''
  }),
  methods: {
    couponApply() {
      this.$emit('couponApply',this.couponName)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>