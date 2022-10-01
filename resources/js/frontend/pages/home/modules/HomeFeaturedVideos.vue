<template>
    <div class="about-videos">
        <div class="about-videos__title title title_arrow">
            <div class="title-arrow">
                לכל הסרטונים
                <img src="/img/icons/arrow.svg" alt="">
            </div>
            <span></span>
            סרטונים מובחרים
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
            <swiper-slide v-for="(video,i) in 5" :key="i" >
              <div class="about-videos__slider-video">
                <img src="/img/video/about-video.png" alt="">
              </div>
              <div class="about-videos__slider-title">
                שם של הסרטון שם של הסרטון
              </div>
            </swiper-slide>


          </swiper>

        </div>
        <div class="title-arrow title-arrow_mob">
            כל שאלות ותשובות
            <img src="/img/icons/arrow.svg" alt="">
        </div>
    </div>
</template>

<script>
import {Swiper, SwiperSlide,   } from 'swiper/vue';
import 'swiper/css';
export default {
    name: 'FeaturedVideos',
  components: {  Swiper, SwiperSlide  },
}
</script>

