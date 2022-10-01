<template>
  <div class="products-item" v-if="product.translate.slug">
    <div class="products-item__img">
      <span v-if="product.flag !== 'noting'">
        {{ product.translate.flag_text }}
      </span>

      <img v-if="photo"
           :src="photo.image"
           :alt="photo.translate.alt"
           :title="photo.translate.title"
      >
      <!-- <img src="" v-else> -->

    </div>
    <div class="products-item__content">
      <div class="products-item__content-title">{{ product.translate.name }}</div>
      <div class="products-item__content-desc">
        {{ product.translate.short_description }}
      </div>
      <div class="products-item__content-btn">
        <router-link :to="{name: routeName ,params: { slug: product.translate.slug} }">
          {{ $trans._lang('go to product') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    product: {},
    routeName: {
      default: 'Product',
      required: false
    }
  },

  computed: {
    photo() {
      return this.product.photos?.find(ph => ph.by_default) || this.product.photos[0]
    }
  },
  methods: {
    
  }

}
</script>

<style>
.products-item {
  min-height: 217px;
}

.products-item__content {
  width: 100%;
}
</style>