<template>
  <div class="cart ">
    <div class="cart__title title">
      <span></span>
      עגלת קניות
      <span></span>
    </div>

    <div class="cart-body">
      <div class="cart-body__top">
        <div class="cart-body__col">הסרה</div>
        <div class="cart-body__col">סה"כ</div>
        <div class="cart-body__col">כמות</div>
        <div class="cart-body__col">תיאור מוצר</div>
        <div class="cart-body__col">תמונת מוצר</div>
      </div>
      <div class="cart-body__content">

        <div class="cart-body__item" v-for="order in orders" :key="order.id">
          <div class="cart-body__col">
            <button class="cart-body__item-remove" @click="deleteOrderItem(order)">
              <base-icon icon="trash" width="35" height="37"/>
            </button>
          </div>
          <div class="cart-body__col cart-body__item-price">
            {{ getCost(order) }} ₪
          </div>
          <div class="cart-body__col">
            <div class="cart-body__item-value">
              <button @click="addQuantity(order )">
                <base-icon icon="cart-pluse" width="17" height="17"/>
              </button>
              <input type="number" v-model="order.quantity">
              <button @click="takeQuantity(order)">
                <base-icon icon="cart-minuse" width="17" height="1"/>
              </button>
            </div>
          </div>

          <div class="cart-body__col">
            <div class="cart-body__item-name">
              {{ getProduct(order.product_id)?.translate?.name }}
              <br>
              {{ order.width + 'x' + order.height }}
              <br>
              {{ order.height }} גובה -
            </div>
          </div>
          <div class="cart-body__col">
            <div class="cart-body__item-img">
              <img
                  :src="getProduct(order.product_id,true)?.image"
                  :alt="getProduct(order.product_id,true)?.translate?.alt"
                  :title="getProduct(order.product_id,true)?.translate?.title"
              >
              <span @click="getPhoto(order.product_id)">
                <img src="@img/icons/lens-cart.svg">
              </span>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>

  <TheCartSlider
      title="Дополнительные продукты к выбранным вами продуктам"
      :products="products"
  />

  <the-delivery :total="total" @couponApply="addCoupon"/>
  <the-payment @SaveOrder="SaveOrder"/>

  <base-photo-modal v-model:ButtonModal="ButtonModal" :photo="photo"/>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex'
import BasePhotoModal from "@frontend/components/BasePhotoModal";
import ThePayment from "./ThePayment";
import TheDelivery from "./TheDelivery";
import TheCartSlider from "./TheCartSlider";

export default {
  name: 'FrontCart',
  emits: ['footerContent'],
  components: {BasePhotoModal, ThePayment, TheDelivery, TheCartSlider },
  data: () => ({
    ButtonModal: false,
    photo: {}
  }),
  computed: {
    ...mapGetters({
      orders: 'cart/GET_CART',
      productsData: 'products/GET_PRODUCTS_TR_CAT',
      language: 'lang/GET_SITE_LANGUAGE',
    }),

    products() {
      return this.productsData(this.language.id)
    },

    total() {
      return this.orders.reduce((i, order) => {
        const price = order.quantity * order.price
        return i + price + order.delivery_sale - order.discount
      }, 0)
    },

    additions(){
      const ids = this.orders.map(order => order.product_id)
      return this.products.filter(product => ids.includes(product.id))
    }

  },
  methods: {
    ...mapActions([
      'cart/SET',
      'cart/CREATE',
      'products/set',
      'cart/ADD_COUPON'
    ]),
    ...mapMutations([
      'cart/ADD_TAKE',
      'cart/DESTROY'
    ]),

    getProduct(id, photo = false) {
      const product = this.products.find(pr => pr.id === Number(id))
      if (photo) {
        return product?.photos.find(photo => photo.by_default) || product?.photos[0]
      }
      return product
    },

    getPhoto(id) {
      this.photo = this.getProduct(id, true)
      this.ButtonModal = true
    },

    getCost(order) {
      return order.quantity * order.price
    },

    getTotal() {
      return this.orders.reduce((i, order) => {
        const price = order.quantity * order.price
        return i + price - order.discount
      }, 0)
    },

    addQuantity(order) {
      order.quantity++
      this['cart/ADD_TAKE'](order)
    },

    takeQuantity(order) {
      if (order.quantity > 1) {
        order.quantity--
        this['cart/ADD_TAKE'](order)
      }
    },

    deleteOrderItem(order) {
      this['cart/DESTROY'](order)
    },

    addCoupon(coupon) {
      this['cart/ADD_COUPON'](coupon)
    },

    SaveOrder(order) {
      order.details = this.orders
      order.total = this.total
      order.status = true

      this['cart/CREATE'](order)

    }
  },
  mounted() {
    if (!(this.products.length)) {
      this['products/set']()
    }

  },

  beforeMount() {
    this.$emit('footerContent', {
      footer_text: 'Органический текст для нужд органического продвижения Органический текст для'
    })
  }
}
</script>

