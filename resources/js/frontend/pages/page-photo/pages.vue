<template>

  <router-view v-if="this.$route.name === 'PhotoGallery'"></router-view>

  <div class="gallery" v-else>


    <a href="" @click.prevent="$router.replace('products')">Products</a>
    <a href="" @click.prevent="$router.replace('продукты')">products-2</a>
    <div class="notfound__bg">
      <img src="@img/light-bg.png" alt="">
    </div>
    <div class="business__title title">
      <span></span>
      גלריה תמונות
      <span></span>
    </div>
    <div class="combobox mobile">
      <div class="combobox__active" :class="{active: ButtonMobileTab}" @click="ButtonMobileTab = !ButtonMobileTab">
        <img src="@img/icons/arrow-green.svg" alt="">
        <span>
                    גלריה סוכה לנצח
                </span>
      </div>
      <div class="combobox-list" :class="{active: ButtonMobileTab}">
        <div class="combobox-list__item" v-for="page in pages" :key="page.id">
          <router-link :to="{ name: 'PhotoGallery', params: { slug: page.translate.slug, id: page.id } }">
            {{ page.translate.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="business-body">
      <div class="products-body__content">
        <div class="business-body__content">
          <div class="gallery-page__body">

            <div class="gallery-page__body-item" v-for="page in pages" :key="page.id">

              <router-link :to="{ name: 'PhotoGallery', params: { slug: page.translate.slug, id: page.id } }">
                                <span class="gallery-page__body-img" v-if="page.galleries">
                                    <img v-lazy="page.galleries[0].image" :alt="page.galleries[0].image_alt"
                                         :title="page.galleries[0].image_title">
                                </span>
                <span class="gallery-page__body-title">
                                    {{ page.translate.name }}
                                </span>
              </router-link>
            </div>

          </div>
        </div>
      </div>

      <photo-page-sidebar :pages="pages" routeName="PhotoGallery"/>

    </div>
  </div>

</template>

<script>

import {mapActions, mapGetters} from 'vuex'

import PhotoPageSidebar from "@frontend/components/sidebar/PhotoPageSidebar";

export default {

  name: 'Page-Photo',
  components: {PhotoPageSidebar},

  data: () => ({
    ButtonMobileTab: false
  }),
  methods: {
    ...mapActions(['PhotoPage/set'])
  },

  computed: {
    ...mapGetters({
      language_id: 'lang/getLanguageId',
      PagesData: 'PhotoPage/GetPagesByLang',
    }),

    pages() {
      return this.language_id ? this.PagesData(this.language_id) : null
    },
  },

  async mounted() {
    if (!this.pages || this.pages.length === 0) {
      await this['PhotoPage/set']()
    }


  }

}
</script>

