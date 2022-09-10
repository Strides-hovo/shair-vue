<template>
  <div class="products-slidebar">
    <ul class="products-slidebar__content">
      <li
          v-for="category of categories"
          :key="category.id"
          :class="{active: category.translate.slug === this.$route.params.slug }"
      >
        <router-link
            v-if="category.translate.slug"
            :to="{ name: routeName, params: { slug: category.translate.slug, id: category.id } }"
        >
          {{ category.translate.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
    props:{
      products: {
        required: true,
        default: []
      }
    },

  data() {
    return {
      routeName: 'Products'
    }
  },

  computed:{
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      productsData: 'category/GET_CATEGORIES_PRODUCTS'
    }),

    categories() {
      return this.productsData( this.language.id )
    },
  },

  methods:{
    ...mapActions(['category/SET_PRODUCTS_BY_CATEGORY',])
  },

  mounted() {
    if (this.categories.length === 0){
      this['category/SET_PRODUCTS_BY_CATEGORY']()
    }
  }

}
</script>

