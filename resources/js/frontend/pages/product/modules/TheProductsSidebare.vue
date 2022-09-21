<template>
  <div class="products-slidebar">

    <ul class="products-slidebar__content" v-if="categories.length">
      <li
          v-for="category of categories"
          :key="category.id"
          :class="{active: category.id === Number(this.$route.params.id) }"
      >
        <router-link
            v-if="page.translate.slug"
            :to="{ name: routeName, params: { slug: page.translate.slug, id: category.id } }"
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
      page: {
        required: true,
        type: Object
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
      catData: 'category/GET_FRONT_CATEGORIES'
    }),

    categories(){
      return this.catData(this.language.id)
    }
  },

  methods:{
      ...mapActions(['category/set'])
  },

  async mounted() {
      if ( this.categories && !this.categories.length ){
       await this['category/set']()
      }

  }


}
</script>

<style>
  li.active > a{
    color: #fff;
  }
</style>