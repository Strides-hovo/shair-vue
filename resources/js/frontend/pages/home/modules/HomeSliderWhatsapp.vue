<template>
  <div class="reviews">
    <div class="reviews__bg-preson">
      <img src="/img/reviews/bg-person.png" alt="">
    </div>
    <div class="reviews__title title">
      <span></span>
      {{ $trans._lang('recommend us') }}
      <span></span>
    </div>
    <div class="reviews-tab">
      <div class="reviews-tab__btns">
        <div class="reviews-tab__btns-item js-tab-trigger"
             data-tab="1"
             @click="TabGoogle = false"
             :class="{active: !TabGoogle}"
        >
          {{ $trans._lang('Thanksgiving letters') }} </div>

        <div class="reviews-tab__btns-item js-tab-trigger"
             :class="{active: TabGoogle}"
             data-tab="2"
             @click="TabGoogle = true"
        >
          <span>({{ googleSlide.length }})</span>
          {{ $trans._lang('Google Recommendations') }}</div>
      </div>
      <div class="reviews-tab__content js-tab-content" :class="{active: !TabGoogle}" >

        <div class="reviews-tab__content-slider">

          <swiper
              :modules="modules"
              slides-per-view="auto"
              :spaceBetween="16"
              :loop="true"
              dir="rtl"
              :grabCursor="true"
              :navigation="{
                  nextEl: '.reviews-swiper-button-next',
                  prevEl: '.reviews-swiper-button-prev',
              }"
              :breakpoints="{
                  768: {
                    spaceBetween: 30,
                  },
              }"
          >
            <swiper-slide
                v-for="(slide,i) in 10"
                :key="i"
            >

              <img src="/img/tents/01.png" alt="">
            </swiper-slide>
          </swiper>

          <div class="reviews-swiper-button-prev">
            <img src="/img/icons/slider-btn.svg" alt="">
          </div>
          <div class="reviews-swiper-button-next">
            <img src="/img/icons/slider-btn.svg" alt="">
          </div>

        </div>

      </div>
      <div class="reviews-tab__content js-tab-content" :class="{active: TabGoogle}" >
        <div class="reviews-tab__content-slider">
          <swiper
              :modules="modules"
              slides-per-view="auto"
              :spaceBetween="16"
              :loop="true"
              :grabCursor="true"
              dir="rtl"
              :navigation="{
                  nextEl: '.reviews-swiper-button-next',
                  prevEl: '.reviews-swiper-button-prev',
              }"
              :breakpoints="{
                  768: {
                    spaceBetween: 30,
                  },
              }"

          >
            <swiper-slide
                v-for="(slide,i) in googleSlide"
                :key="i"
            >
              <img v-lazy="{src:'/img/reviews/01.png'}" :alt="slide">
            </swiper-slide>
          </swiper>

          <div class="reviews-swiper-button-prev">
            <img src="/img/icons/slider-btn.svg" alt="">
          </div>
          <div class="reviews-swiper-button-next">
            <img src="/img/icons/slider-btn.svg" alt="">
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

import {Swiper, SwiperSlide,   } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';


export default {
  name: 'sliderWhatsapp',
  components: {  Swiper, SwiperSlide  },
  data() {
    return {
      modules: [Navigation],
      TabGoogle: false,
      googleSlide: Array.from({length: 10}, () => Math.floor(Math.random() * 40))
    }
  },


}
</script>

