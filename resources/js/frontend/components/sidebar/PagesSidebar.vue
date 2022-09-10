<template>
  <div class="products-slidebar">
    <ul class="products-slidebar__content">
      <li v-for="page of pages" :key="page.id" :class="{active: page.translate.slug === this.$route.params.slug }">
          <router-link v-if="page.translate.slug"
          :to="{ name:routeName, params: { slug: page.translate.slug, id: page.id } }">
          {{ page.translate.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  name: "PagesSidebar",

  props: {
    pages: {
      type: Array,
      required: false
    },
    routeName: String

  },
  computed: {
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
    }),

    pagesList(){
      return this.pages.filter(page => page.category )
    }

  },

}
</script>

