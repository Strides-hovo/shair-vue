<template>
  <router-view v-if="$route.name === 'Article'"/>
  <div class="articles" v-else>
    <div class="articles__title title">
      <span></span>
      מאמרים
      <span></span>
    </div>
    <div class="container">
      <div class="articles-body">
        <div href="" class="articles-body__item" v-for="page in pages" :key="page.id">
          <div class="articles-body__item-info">
            <div class="articles-body__item-title">
              {{ page.translate.name }}
            </div>
            <div class="articles-body__item-desc">
              {{ page.translate.short_description }}
            </div>
            <router-link v-if="page.translate.slug"
                         :to="{name: 'Article', params: {id: page.id, _slug: page.translate.slug}  }"
                         class="articles-body__item-btn">
              {{ $trans._lang('read more') }}
            </router-link>

          </div>
          <div class="articles-body__item-img">
            <img :src="page.image" :alt="page.translate.image_alt" :title="page.translate.image_title">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Articles',

  data() {
    return {
      fronted: true
    }
  },
  computed: {
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      GET_ARTICLES: 'article/GET_ARTICLES_TR',
    }),

    pages() {
      return this.GET_ARTICLES(this.language.id)
    },

    page() {
      return this.pages.find(p => typeof p.translate.slug !== 'undefined')
    }

  },
  watch:{
    'page.page.translate.slug'(slug){
      this.$router.replace({ name: 'Articles', params: { slug } })
    }
  },

  methods: {
    ...mapActions(['article/SET_ARTICLES'])
  },

  mounted() {
    if (this.pages  && (this.pages.length === 0 || !this.pages.recommended )) {
      this['article/SET_ARTICLES'](true)
    }

    const slug = this.page?.page.translate?.slug
    if (slug && this.$route.name === 'Articles'){
      this.$router.replace({ name: 'Articles', params: {slug } })
    }

  },


}
</script>

