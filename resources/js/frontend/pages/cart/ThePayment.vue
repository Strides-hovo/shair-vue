<template>
    <div class="cart-payment">
        <div class="cart-payment__title title">
            <span></span>
            אמצעי תשלום
            <span></span>
        </div>
        <div class="cart-payment__top">
            <div class="cart-payment__top-item" :class="{active: active === 'tel'}" @click="toggleActive('tel')"> רכישה טלפונית</div>
            <div class="cart-payment__top-item" :class="{active: active === 'payment'}" @click="toggleActive('payment')">רכישה באשראי </div>
        </div>
        <form class="cart-payment__body">
            <div class="cart-payment__body-bg">
              
                <img src="@img/cart/payment-bg.svg" alt="">
            </div>
            <div class="cart-payment__body-item">
                <input type="email" v-model="order.email">
                <span>* אימייל</span>
            </div>
            <div class="cart-payment__body-item">
                <input type="text" v-model="order.fullName">
                <span>*שם מלא (לחשבונית)</span>
            </div>
            <div class="cart-payment__body-item">
                <input type="text" v-model="order.address">
                <span>* כתובת (רחוב, עיר)</span>
            </div>
            <div class="cart-payment__body-item">
                <input type="text">
                <span>* טלפון</span>
            </div>
            <div class="cart-payment__body-item">
                <input type="tel" v-model="order.tel">
                <span>הערות</span>
            </div>
            <div class="cart-payment__body-item">
                <input type="text" v-model="order.comment">
                <span>מישהו עזר לך בצ’ט/טל?</span>
            </div>
            <div class="cart-payment__body-check">
                <label>
                    אני מסכים/ה לתנאי השימוש של האתר
                    <input type="checkbox" v-model="checked">
                    <span></span>
                </label>
            </div>
            <button class="cart-payment__body-btn" @click.prevent="SaveOrder">
                לרכישה מאובטחת באשראי
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ThePayment',
  data:() => ({
    order: {},
    checked: false,
    active: 'payment'
  }),
  methods:{
    SaveOrder(){
      if (this.checked){
        this.$emit('SaveOrder', this.order)
      }
    },
    toggleActive(key){
      this.active = key
    }

  }
}
</script>

<style lang="scss" scoped>

</style>