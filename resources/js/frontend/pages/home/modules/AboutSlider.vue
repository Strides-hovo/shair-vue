<!--suppress JSValidateTypes -->
<template>
  <swiper
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper }"

      dir="rtl"
      class="about-big-img"
  >
    <swiper-slide
        v-for="(slide,i) in abouts"
        :key="i" >
      <img :src="slide" />
    </swiper-slide>

  </swiper>
  <swiper
      @swiper="setThumbsSwiper"
      ref="Swiper"
      :spaceBetween="10"
      :slidesPerView="2"
      :freeMode="true"
      :watchSlidesVisibility="true"
      :watchSlidesProgress="true"
      dir="rtl"
      @slideChange="onSlideChange"
      class="about-small-img"
  >
    <swiper-slide
        v-for="(slide,i) in abouts"
        :key="i"
    >
      <img
          :src="slide" />
    </swiper-slide>

  </swiper>
</template>

<script>

import 'swiper/css';

import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Thumbs]);
export default {
  name: "AboutSlider",
  props:{
    abouts: {
      default: []
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
      console.log(swiper)
    },
    onSlideChange(evt){
      console.log(evt)
    },

  },
}
</script>

