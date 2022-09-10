<template>
  <div class="products-slidebar">
    <ul class="products-slidebar__content">
      <li v-for="page of pageLinks" :key="page.id" :class="{active: page.translate.slug === this.$route.params.slug }">
          <router-link :to="{ name:routeName, params: { _slug: page.translate.slug, id: page.id } }">
          {{ page.translate.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  name: "PageSidebar",

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
      PagesData: 'PhotoPage/GetPagesByLang'
    }),
    pageLinks() {
      return this.pages ? this.pages : this.PagesData(this.language.id)
    }
  },

}
</script>

