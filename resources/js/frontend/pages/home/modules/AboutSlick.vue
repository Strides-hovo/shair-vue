<template>
  <swiper
      class="swiper"
      :modules="modules"

      :slides-per-view="3"
      :space-between="30"
      :navigation="true"
      @swiper="setSwiperRef"
      @resize="handleResize"

      @slide-change="check"

      :dir="'ltr'"
  >
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
    <swiper-slide class="slide">Slide 4</swiper-slide>
    <swiper-slide class="slide">Slide 5</swiper-slide>
    <swiper-slide class="slide">Slide 6</swiper-slide>
    <swiper-slide class="slide">Slide 7</swiper-slide>
    <swiper-slide class="slide">Slide 8</swiper-slide>
  </swiper>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import SwiperClass, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
export default defineComponent({
  name: 'swiper-example-change-direction',
  title: 'Change direction',
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {

    const store = useStore()

    let swiperRef = null
    const setSwiperRef = (swiper) => {
      swiperRef = swiper
    }
    const dir = computed(() => {
      return store.state.lang.SITE_LANGUAGE.dir
    })

    const check = (evt) => {

      // console.log(evt.rtl, 2)
    }

    const handleResize = () => {
      //dir="rtl"
      // swiperRef.rtl = dir
      // swiperRef.rtlTranslate = dir
      // console.log(swiperRef.rtl, swiperRef )
      swiperRef?.changeDirection(window.innerWidth <= 1024 ? 'vertical' : 'horizontal')
    }

    return {
      modules: [Navigation],
      setSwiperRef,
      handleResize,
      check,
      dir
    }
  }
})
</script>