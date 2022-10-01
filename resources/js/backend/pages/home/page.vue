<template>

  <left-aside :is-active="ButtonLeftAside" @CloseLeftAside="ButtonLeftAside = false">
    <MyBaseSetting v-model:ButtonLeftAside="ButtonLeftAside" pageName="Home" />
  </left-aside>

  <div class="cart-btns">
    <button class="cart-btns__item btn" @click="save">
      שמור
    </button>
  </div>


  <div class="container-content">
    <div class="container-content__top">

      <div class="settings-btn products-seo-btn" @click="ButtonLeftAside=true">
        <base-icon icon="setting" width="15" height="16" />
      </div>



      <LanguageSelect />

      <div class="container-content__top-title">
        הגדרות מוצרים
        <span>מוצרים למכירה
			</span>
      </div>
    </div>
    <div class="container-content__body container-content__body_info">
      <div class="container-content__body-info mainpage">
        <div class="mainpage-body">
          <div class="mainpage-body__col">
            <div class="mainpage-body__col-title">
              אזור מוצר מקודם:
              <span>ודיאו: </span>
            </div>
            <div class="mainpage-body__col-video">

              <HomeVideoItem :video="page.main_video" @updateVideo="updateVideo" keys="main_video" />

            </div>

           <HomeIcons v-model:icons="page.icons" v-model:page="page" />

          </div>
          <div class="mainpage-body__col">
            <div class="mainpage-body__col-title">
              וידאו ראשי:
              <span></span>
            </div>
            <div class="mainpage-body__col-video">

              <HomeVideoItem :video="page.video" @updateVideo="updateVideo" keys="video" />

            </div>
            <div class="mainpage-body__col-title">
              בין לקוחותנו:
            </div>
            <div class="mainpage-body__clients">
             <BrandSlider v-model:page="page" />
            </div>
            <div class="mainpage-body__col-title small-space">
              מי אנחנו:
              <span>
											תמונות:
										</span>
            </div>
            <div class="mainpage-body__imgs">

              <AboutSlider  v-model:page="page" />

            </div>
            <div class="info-item">
              <span>כותרת: </span>
              <input type="text" placeholder="אנא הזינו כותרת " v-model="page.translate.about_title">
            </div>
            <div class="info-item">
              <span>טקסט: </span>
              <input type="text" placeholder="אנא הזינו כותרת " v-model="page.translate.about_content">
            </div>
            <div class="info-item">
              <span>לינק: </span>
              <input type="text" placeholder="אנא הזינו כותרת " v-model="page.about_link">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import HomeVideoItem from "./HomeVideoItem";
import IconsItem from "./IconsItem";
import BrandSlider from "./BrandSlider";
import AboutSlider from "./AboutSlider";
import LanguageSelect from "../../components/UI/LanguageSelect";

import HomeIcons from "./HomeIcons";
import MyBaseSetting from "../../components/forms/MyBaseSetting";

export default {
  name: "BackendHome",
  components: {MyBaseSetting, HomeIcons, LanguageSelect, AboutSlider, BrandSlider, IconsItem, HomeVideoItem},
  data() {
    return {
      ButtonLeftAside: false
    }
  },
  computed:{
    ...mapGetters({
      languageId: 'lang/getLanguageId',
      pageData: 'home/GET_PAGE'
    }),

    page(){
      return this.pageData(this.languageId)
    }

  },
  methods:{
    ...mapActions(['home/SET','home/CREATE']),

    save(){
      this['home/CREATE'](this.page)
    },

    updateVideo(name, video){
      this.page[name] = video
      this.save()
      console.log(name)
    }


  },

  mounted() {
    if (! ('id' in this.page)){
      this['home/SET']()
    }

  }

}
</script>



