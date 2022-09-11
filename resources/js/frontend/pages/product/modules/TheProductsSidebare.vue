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
      categories: {
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

    
  },

  
  


}
</script>

