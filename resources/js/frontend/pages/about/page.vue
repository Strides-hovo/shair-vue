<template>

  <div class="about-page">

    <div class="combobox mobile">
      <div class="combobox__active"
           :class="{ active: ButtonMobileTab }"
            @click="ButtonMobileTab = !ButtonMobileTab">
         <img src="@img/icons/arrow-green.svg" >
         <span>
             {{ $trans._lang('about_sidebar') }}
        </span>
      </div>
      <div class="combobox-list" :class="{active: ButtonMobileTab}">
        <div class="combobox-list__item" v-for="(page,i) in pages" :key="i" >
          <a href="#" >{{ page }}</a>
        </div>

      </div>
    </div>
    <div class="about-page__title title">
      <span></span>
      {{ page.translate.title }}

      <span></span>
    </div>
    <div class="about-page__body">
      <div class="products-body__content" >
        <div v-html="page.translate.content"> </div>
        <div class="about-page__body-btn">

          <a href="#">{{ page.translate.btn_price_list }}</a>
          <a href="#">{{ page.translate.btn_products }}</a>
        </div>

      </div>


      <sidebar :pages="pages" />
    </div>
  </div>
  <base-meta-info :metainfo="setMetaInfo" v-if="page" />
</template>

<script>
import Sidebar from './sidebar.vue'
import {mapActions, mapGetters} from 'vuex'

import baseBreadcrumb from "../../components/BaseBreadcrumb";

export default {

  name: 'about',
  components: {Sidebar, baseBreadcrumb},
  emits:['footerContent'],
  data: () => ({
    pages: [
      ' אודות סוכות הדר',
      ' הלכות סוכה כשרה',
      ' שאלות נפוצות לסוכות לנצח',
      ' אחריות לסוכה',
      'המלצות לרכישת סוכות הדר',
      ' סוכות לעסקים',
      'משלוחים לסוכות לנצח ולסכך לסוכה',
      'הגדלת סוכה לנצח',
      ' קטלוג סוכות הדר',
      ' עמוד מחירון סוכות המלא'
    ],
    ButtonMobileTab:false
  }),

  watch: {
    'page.translate.slug'(slug) {
      if (slug)
      this.$router.replace({name: 'About', params: {slug}})
    },

  },
  computed: {
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      GET_PAGE: 'about/GET_PAGE',
    }),
    setMetaInfo() {
      return {
        title: this.page.translate.meta_title || '',
        meta_keywords: this.page.translate.meta_keywords,
        meta_description: this.page.translate.meta_description,
      }
    },
    page() {
      return this.GET_PAGE(this.language.id)
    }

  },

  methods: {
    ...mapActions(['about/SET_PAGE']),

  },
  mounted() {
    if (!this.page.translate.id) {
      this['about/SET_PAGE']()
    }
    this.$emit('footerContent',{
      footer_text: 'about'
    })
  },


}
</script>

