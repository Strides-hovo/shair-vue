<template>
  <div class="container-content__top-row">
    <div class="switcher">
      <label>
        <input type="checkbox"
          v-model="products_status"
               @change="updateStatus"
        />
        <span class="fake">
                    <span>מופעל</span>
                    <span>מושבת</span>
                </span>
      </label>
      <span> ניתן לרכוש באתר </span>
    </div>
    <div class="container-content__tabs">
      <button class="container-content__tabs-item" :class="{ active: ButtonSaleTab }" @click="toggleTab('sale')">
        מוצרים למכירה
      </button>
      <button class="container-content__tabs-item" :class="{ active: ButtonRentTab }" @click="toggleTab('rent')">
        מוצרים להשכרה
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'TheProductsStatus',
  emits: ['toggleTab'],
  props: {
    ButtonSaleTab: false,
    ButtonRentTab: false,
    products_status: false
  },
  computed: {

  },
  methods: {
    ...mapActions(['products/status']),

    toggleTab(type) {
      this.$emit('toggleTab', type)
    },

    updateStatus() {
      this['products/status'](this.products_status)
    }
  }

}
</script>

