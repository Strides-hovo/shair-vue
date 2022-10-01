<template>
  <div class="sponsors">
    <div class="sponsors__title title">
      <span></span>
      {{ $trans._lang('Among our clients') }}
      <span></span>
    </div>
    <div class="sponsors__slider">

      <swiper
          :modules="modules"
          :slidesPerView="3"
          :spaceBetween="14"
          :slidesPerColumn="2"
          :slidesPerGroup="2"
          slidesPerColumnFill="row"
          :navigation="{
              nextEl: '.sponsors__slider-next',
              prevEl: '.sponsors__slider-prev',
          }"
          :breakpoints="{
              768: {
                spaceBetween: 30,
                slidesPerView:'auto'
              },
          }"
      >

          <swiper-slide v-for="(slide,i) in Math.ceil(brands.length / 2) " :key="i">
            <div class="sponsors__slider-row"  v-if="googleSlides[0][i]">
              <img :src="googleSlides[0][i]"  >
            </div>
            <div class="sponsors__slider-row" v-if="googleSlides[1][i]">
              <img :src="googleSlides[1][i]"  >
            </div>
            
          </swiper-slide>


      </swiper>

      <div class="sponsors__slider-prev">
        <img src="/img/icons/slider-btn.svg" alt="">
      </div>
      <div class="sponsors__slider-next">
        <img src="/img/icons/slider-btn.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import {Swiper, SwiperSlide,   } from 'swiper/vue';
import 'swiper/css';
import { Navigation,Grid } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/grid';

export default {
  name: 'sliderBrand',

  components: {  Swiper, SwiperSlide  },

  props: {
    brands: {
      type: Array,
      default: []
    },
  },

  data() {
    return {
      modules: [Navigation,Grid],
      TabGoogle: false,
      index: 0,
      image: null
    }
  },
  computed:{
    googleSlides(){

      const length = this.brands.length / 2
      const first = this.brands.slice(0,length)
      const last = this.brands.slice(length)
      return [first,last]
      
    }
  },
  methods:{

    shifting(key){
      const elem = this.brands[this.index]

      const item = this.brands[key]
      // if(elem){
      //     console.log(elem);
      //     this.image = elem
      //     this.index += 1
      //     //return elem
      // }
    }

  }
}
</script>

<style >


</style>