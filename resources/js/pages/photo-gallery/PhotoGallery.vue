<template>

  <div class="cart-btns" v-if="ButtonTab">
    <div class="cart-btns__item btn">
      Сохранять
    </div>
  </div>
  <div class="cart-btns" v-else>
    <div class="cart-btns__item product-add-new btn circle">
      <img :src="require('@img/icons/add-icon.svg').default" alt="">
    </div>
    <div class="cart-btns__item btn">
      מחיקה
    </div>
    <div class="cart-btns__item btn">
      שמירה
    </div>
  </div>
  <LeftAssaid :is-active="LeftAssaid" @CloseLeftAssaid="CloseLeftAssaid">
    <div class="productpage-modal__top">
      <div class="productpage-modal__top-item">
        <span>Page Slug:</span>
        <input type="text" placeholder="אנא הזינו שם לעמוד ב URL">
      </div>
    </div>
    <div class="productpage-modal__content">
      <div class="productpage-modal__content-title">
        הגדרות META:
      </div>
      <div class="productpage-modal__content-item">
        <span>Page Title:</span>
        <input type="text" placeholder="אנא הזינו Page Title">
      </div>
      <div class="productpage-modal__content-item">
        <span>:Meta Description </span>
        <input type="text" placeholder="אנא הזינו Meta Description">
      </div>
      <div class="productpage-modal__content-item">
        <span>Meta Keywords:</span>
        <input type="text" placeholder="אנא הזינו Meta Keywords">
      </div>
    </div>
    <div class="productpage-modal__btn btn">
      שמור
    </div>

  </LeftAssaid>
  <div class="container-content">
    <div class="container-content__top container-content__top_tabs">

      <div class="container-content__top-row">
        <div class="settings-btn productpage-params__btn" @click="LeftAssaid = true">
          <img :src="require('@img/icons/settings.svg').default" alt="">
        </div>
        <div class="container-content__top-title">
          <span>{{photoGallery.title}}</span>
        </div>
      </div>
      <div class="container-content__top-row">
        <div class="container-content__tabs">
          <button @click="ButtonTab = true" :class="{ active: ButtonTab === true }"
            class="container-content__tabs-item ">
            Детали галереи
          </button>
          <button @click="ButtonTab = false" :class="{ active: ButtonTab === false }"
            class="container-content__tabs-item">
            Фото
          </button>
        </div>
      </div>
    </div>
    <div class="container-content__body container-content__body_info">
      <div class="container-content__body-info article product-params gallery-img" v-if="ButtonTab">
        <div class="info-row small">
          <div class="info-item small">
            <span>
              שם לשימוש פנימי:
            </span>
            <input type="text" placeholder="אנא הזינו שם לשימוש פנימי">
          </div>

        </div>
        <div class="info-item small">
          <span>
            description:
          </span>
          <input type="text" placeholder="אנא הזינו שם ב-Hebrew">
        </div>
        <div class="info-item">
          <span>
            טקסט תחתון ב-Hebrew:
          </span>
          <input type="text" placeholder="אנא הזינו טקסט תחתון ב-Hebrew">
        </div>
      </div>

      <div class="container-content__body" v-else>
        <!--        <div class="product-content__tabs">
          <a href="#" class="product-content__tabs-item">
            תמונות לדסקטופ
          </a>
          <a href="#" class="product-content__tabs-item active">
            תמונות לסלולר
          </a>
        </div>-->
        <table class="orders products productspage product-products product-images">
          <thead>
            <tr>
              <td>
                <label class="check">
                  <input type="checkbox">
                  <span class="fake"></span>
                </label>
              </td>
              <td>
                תמונה של המוצר
              </td>
              <td>
                הגדרות SEO
              </td>
              <td>
                סדור
              </td>
              <td>
                פעולות
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="order-row">
              <td>
                <label class="check">
                  <input type="checkbox">
                  <span class="fake"></span>
                </label>
              </td>
              <td>
                <div class="table-img" @click="FileManager = true">
                  <img :src="require('@img/article-img.png').default" alt="">
                  <modal-lnaguage :is-active="FileManager">
                    <file-manager v-if="FileManager"></file-manager>
                  </modal-lnaguage>

                  <div class="table-img__title">
                    שינוי תמונה
                    <img :src="require('@img/icons/edit-ico.svg').default" alt="">
                  </div>
                </div>
              </td>
              <td>
                <div class="table-img__info">
                  <div class="table-img__info-item">
                    <span>
                      Alt:
                    </span>
                    <input type="text" placeholder="סוכה כשרה">
                  </div>
                  <div class="table-img__info-item">
                    <span>
                      Title:
                    </span>
                    <input type="text" placeholder="סוכה כשרה">
                  </div>
                  <div class="table-img__info-item">
                    <span>
                      File name:
                    </span>
                    <input type="text" placeholder="סוכה-כשרה6667">
                  </div>
                </div>
              </td>
              <td>
                <label>
                  <select v-model="photoGallery.sorting">
                    <option :value="count" v-for="count in Galleries.length + 1" :key="count">{{ count }}</option>
                  </select>

                </label>
              </td>
              <td>
                <div>
                  <span><img :src="require('@img/icons/show.svg').default" alt="">להציג</span>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </div>

</template>

<script>


import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import apiRoutes from "@/api-routes";
// import vuexMixin from '@mixin/vuex'


export default {

  name: "PhotoGallery",
  components: {},
  // mixins: [vuexMixin],
  props: {
    id: {
      type: Number,
      requird: true
    }
  },
  data: () => ({
    photoGallery: {},
    Galleries: [],
    ButtonTab: true,
    LeftAssaid: false,
    FileManager: false,

  }),


  computed: {


  },


  methods: {

    setLanguage(id) {
      //console.log(id)
      this.language = this.languages.find(lang => +lang.id === +id)
      //console.log( this.language )
    },
    CloseLeftAssaid() {
      this.LeftAssaid = false
    }
  },
  mounted() {

    axios.get(apiRoutes('photoGallery.show', this.id)).then(response => this.photoGallery = response.data.data)
  }

}
</script>