<template>
  <div class="pricelist-modal__cost">
    <div class="pricelist-modal__cost-price">
      {{ cost }} ₪
    </div>
    <div class="pricelist-modal__cost-size" @click="activeWidth = !activeWidth">
      <base-icon icon=arrow-green width="18" height="10" />
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


import TheProductMobileStep from './TheProductMobileStep.vue'
import product from "../../../mixins/product";

export default {
  name: 'TheProductCost',
  components: { TheProductMobileStep },
  mixins: [product],
  props:{
    product: {}
  }

}
</script>

