<template>
  <div class="cart-slider">
    <div class="cart-slider__title title">
      <span></span>
      {{ title }}
      <span></span>
    </div>
    <div class="cart-slider__item">
      <div class="slider">

        <swiper
            :modules="modules"
            :navigation="{
                prevEl: prev,
                nextEl: next,
              }"
            :breakpoints="breakpoints"
            :slides-per-view="5"
        >
          <swiper-slide
              v-for="product in products"
              :key="product.id"
          >
            <CartSliderItem
                :product="product"
                :gift="gift"
            />
          </swiper-slide>

        </swiper>
      </div>

      <div ref="prev" class="cart-slider-button-prev">
        <base-icon icon="cart-slider-btn" width="130" height="433" />
      </div>
      <div ref="next" class="cart-slider-button-next">
        <base-icon icon="cart-slider-btn" width="130" height="433" />
      </div>

    </div>
  </div>

</template>


<script>

import CartSliderItem from "./CartSliderItem";
import {Swiper, SwiperSlide,   } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { ref } from 'vue';

export default {
  name: 'TheCartSlider',
  components: { CartSliderItem, Swiper, SwiperSlide  },
  data: () => ({
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    },


  }),
  props: {
    title: '',
    products: {
      default: []
    },
    gift: false
  },

  methods:{
    // modules(){
    //   return {
    //     modules: [Navigation.name ],
    //     prev: null,
    //     next: null,
    //   };
    // },
    // next() {
    //   console.log( this.$refs.hits );
    //   // this.$refs.hits.$swiper.slideNext();
    //   this.index = (this.index + 1) % this.products.length;
    // },
    // prev() {
    //   // this.$refs.hits.slidePrev();
    //   this.index = this.index === 0 ? (this.products.length - 1) : (this.index - 1) % this.products.length;
    // },

    /*getGalleryIds(){
      let output = [];
      const border = this.products.length - (this.index + this.limit)

      if(border > 0){
        output = this.products.slice(this.index,this.limit + this.index)
      }
      else{
        const next = this.index - this.products.length
        const prev = this.limit + next
        output = this.products.slice(next)
        output = output.concat( this.products.slice(0,prev))
      }
      return output;
    },
    */

  },


  setup() {
    const prev = ref(null);
    const next = ref(null);

    return {
      modules: [Navigation],
      prev,next
    };
  },
}
</script>

<style>
.swiper-button-prev,
.swiper-button-next{
  color: #000;
}
</style>