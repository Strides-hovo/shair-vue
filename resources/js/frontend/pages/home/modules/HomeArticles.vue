<template>
    <div class="about-videos about-videos_photo">
        <div class="about-videos__title title title_arrow">
            <div class="title-arrow" v-if="article.translate.slug">
              <router-link :to="{name: 'Articles', params:{ slug: article.translate.slug }}" >

                {{ $trans._lang('All articles') }}
              <base-icon icon="home-arrow" width="10" height="16" />
              </router-link>

            </div>
            <span></span>
          {{ $trans._lang('Featured Articles') }}
            <span></span>
        </div>
        <div class="about-videos__slider">
          <swiper

              slides-per-view="4"
              :spaceBetween="16"
              :breakpoints="{
                  768: {
                    spaceBetween: 30,
                  },
              }"
          >
            <swiper-slide v-for="article in articles" :key="article.id" >
              <div class="about-videos__slider-video">
                <img :src="article.image" :alt="article.translate.image_alt" :title="article.translate.image_alt" >
              </div>
              <div class="about-videos__slider-title">
                {{ article.translate.name }}
              </div>
            </swiper-slide>


          </swiper>

        </div>

        <div class="title-arrow title-arrow_mob">
            כל מאמרים
            <img src="/img/icons/arrow.svg" alt="">
        </div>
    </div>
</template>

<script>

import {Swiper, SwiperSlide,   } from 'swiper/vue';
import 'swiper/css';
import BaseIcon from "../../../../backend/components/UI/BaseIcon";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'HomeArticles',
  components: {BaseIcon,  Swiper, SwiperSlide  },
  props:{
    articles: {
      default: [],
      type: [Array, null]
    }
  },
  computed:{
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      articlePage: 'page/GET_PAGE'
    }),

    article(){
      return this.articlePage( 'Articles', this.language.id)
    }
  },
  methods:{
    ...mapActions(['page/SET_PAGES'])
  },
  mounted() {
    if (!( 'id' in this.article)){
      this['page/SET_PAGES']()
    }
  }

}
</script>

