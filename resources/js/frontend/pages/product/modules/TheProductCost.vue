<template>
  <div class="pricelist-modal__cost">
    <div class="pricelist-modal__cost-price">
      {{ cost }} ₪
    </div>
    <div class="pricelist-modal__cost-size" @click="activeWidth = !activeWidth">
      <base-icon icon='arrow-green' width="18" height="10" />
      <span>{{ currentSize ? `${currentSize} x ${activeSize}`: null }} </span>
      גודל:

      <ul class="pricelist-content__item-dropdown" :class="{active: activeWidth}">
        <li v-for="(width,i) in widths" :key="i" @click.stop="checkWidth(i)">
          {{ width }}
        </li>

      </ul>
    </div>
    <div class="pricelist-modal__cost-length" @click="activeHeight = !activeHeight">
      <base-icon icon='arrow-green' width="18" height="10" />
      <span>{{ activeSize }}</span>
      גובה:

      <ul class="pricelist-content__item-dropdown" :class="{active: activeHeight}">
        <li class="height" @click.stop="checkSize('2.1')">2.1</li>
        <li class="height" @click.stop="checkSize('2.3')">2.3</li>
      </ul>
    </div>
    <div class="pricelist-modal__cost-count">
      <button @click="quantity++">
        <base-icon icon='arrow-green' width="18" height="10" />
      </button>
      <input type="number" :value="quantity">
      <button @click="quantity > 1 ? quantity-- : 0 ">
        <base-icon icon='arrow-green' width="18" height="10" />
      </button>
      <span> כמות</span>
    </div>
    <button class="pricelist-modal__cost-btn" @click="addToCart">
      הוסף לעגלה
    </button>
    <div class="pricelist-modal__cost-item mobile">
      מחיר:{{ cost }} ₪
    </div>
    <the-product-mobile-step />
  </div>
</template>

<script>

import { mapActions,mapMutations } from 'vuex'
import TheProductMobileStep from './TheProductMobileStep.vue'

export default {
  name: 'TheProductCost',
  components: { TheProductMobileStep },
  data: () => ({
    activeSize: '2.1',
    width: null,
    activeWidth: false,
    activeHeight: false,
    quantity: 1,
    widthIndex: 0,
  }),
  props: {
    product: {}
  },
  computed: {
    sizes() {
      return this.product.sizes[this.activeSize] || []
    },

    widths() {
      return this.sizes.map(size => size.width)
    },

    currentSize() {
      return this.widths[this.widthIndex]
    },

    cost() {
      const cost = this.sizes.find(s => s.width === this.currentSize && s.status === true)
      if (cost && cost.price) {
        return cost.price * this.quantity
      }
      return 0
    }
  },
  methods: {

    ...mapMutations(['cart/ADD']),

    checkSize(height) {
      this.activeSize = height
      this.activeHeight = false
    },

    checkWidth(index) {
      this.widthIndex = index
      this.width = this.widths[index]
      this.activeWidth = false
    },

    addToCart() {
      const product_size = this.sizes
      .find(size => size.width === this.currentSize && size.height === parseFloat(this.activeSize))

      const product = {
        quantity: this.quantity,
        product_id: this.product.id,
        product_size_id: product_size ? product_size.product_size_id : null,
        width: this.currentSize,
        height: this.activeSize,
        cost: this.cost
      }
      if(this.cost === 0){
        alert('error')
      }
      else{
        this['cart/ADD'](product)
      }

      
    }
  },
  mounted() {
    this.width = this.widths[0] ?? null
  }

}
</script>

