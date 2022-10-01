<template src="./index.html"></template>

<script>


import {mapActions, mapGetters} from "vuex";
import HomeAccordion from "./modules/HomeAccordion";

import HomeAbout from "./modules/HomeAbout";
import HomeProducts from "./modules/HomeProducts";
import HomeSliderBrand from "./modules/HomeSliderBrand";
import HomeSliderWhatsapp from "./modules/HomeSliderWhatsapp";
import HomeAdvantages from "./modules/HomeAdvantages";
import HomeFeaturedVideos from "./modules/HomeFeaturedVideos";
import HomeArticles from "./modules/HomeArticles";
import BaseMetaInfo from "../../components/BaseMetaInfo";

export default {
  name: "index",
  emits: ['footerContent'],
  props:{
    slug: String
  },
  computed:{
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      pageData: 'home/GET_PAGE'
    }),

    page(){
      return this.pageData(this.language.id)
    },

    setMetaInfo() {
      if (this.page.page ){
        return {
          title: this.page.page.translate.meta_title || '',
          meta_keywords: this.page.page.translate.meta_keywords,
          meta_description: this.page.page.translate.meta_description,
        }
      }
    },
  },
  methods:{
    ...mapActions(['home/SET'])
  },
  components: {
    HomeAccordion, //ok
    HomeAbout,
    HomeSliderBrand,
    HomeSliderWhatsapp,
    HomeAdvantages,
    HomeFeaturedVideos,
    HomeArticles,
    HomeProducts,
    BaseMetaInfo
    },

  mounted() {
    if (!('id' in this.page)){
      this['home/SET']()
    }


  },

  beforeUpdate() {
    this.$emit('footerContent',{
      footer_text: this.page.page.translate.footer_text
    })
  }


}
</script>

<style>
.main__img video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

</style>