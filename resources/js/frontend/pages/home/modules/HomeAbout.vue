<template>

  <div class="about">
    <div class="about__title title">
      <span></span>
      {{ page.translate.about_title }}
      <span></span>
    </div>
    <div class="container">
      <div class="about-body">
        <div class="about-body__col">
          <div class="about-body__col-title">
            {{ page.translate.about_title }}
          </div>
          <div class="about-body__col-desc">
            {{ page.translate.about_content }}
          </div>
          <a class="about-body__col-btn" :href="page.about_link" target="_blank">
            {{ $trans._lang('read more') }}
          </a>
        </div>
        <div class="about-body__col about-body__col_img">
          <div class="about-body__img">

            <AboutSlider :abouts="page.abouts" />
<!--            <AboutSlick />-->

        </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>





import AboutSlider from "./AboutSlider";
import AboutSlick from "./AboutSlick";


export default {
  components: {
    AboutSlick,
    AboutSlider,
  },
  props:{
    page: {}
  },
  data() {
    return {
    };
  },

  beforeUpdate() {
    /*const swiper = this.$refs.Swiper
    const dir =   this.$store.state.lang.SITE_LANGUAGE.dir*/
  }
}

</script>

