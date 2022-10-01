<template>
  <div class="mobile-bottom">
    <a href="" class="mobile-bottom__wu">
      <base-icon icon="whatsapp-empty" width="24" height="24" />
    </a>
    <a href="" class="mobile-bottom__pricelist">
      מחירון
    </a>
    <a href="" class="mobile-bottom__tel">
      <base-icon icon="tel-empty" width="20" height="25" />
    </a>
  </div>
  <div class="tel-btn">
    <img src="@img/icons/tel.png" alt="tel">
  </div>
  <div class="callback-btn">
    <div class="callback-btn__close">
      <base-icon icon="close-bold" width="18" height="17" />
    </div>
    רוצים לדבר איתנו?
    קליק ונתקשר מיד
  </div>

  <div class="callback-content">
    <form class="footer__follow">
      <div class="callback-content__close">
        <base-icon icon="close-bold" width="18" height="17" />
      </div>
      <div class="footer__follow-title">
        רוצה לקבל ייעוץ מקצועי?
      </div>
      <div class="footer__follow-subtitle">
        השאירו פרטים ואחד הסוכנים שלנו יחזור אליך
      </div>
      <input type="text" class="footer__follow-input" placeholder="שם מלא">
      <input type="text" class="footer__follow-input" placeholder="מס’ טלפון שלך">
      <button class="footer__follow-btn">שלח</button>
    </form>
  </div>

  <div class="branches">
    <div class="notfound__bg">
      <img src="@img/light-bg.png" alt="ligth">
    </div>
    <div class="branches__title title">
      <span></span>
      צור קשר וסניפים
      <span></span>
    </div>
    <div class="container">
      <div class="branches-body">
        <div class="branches-sidebar">
          <div class="branches-sidebar__top">
            <a href="">
              {{ contact.translate.faq_title }}
            </a>
            <span>
            {{ contact.translate.write_title }}
          </span>
          </div>
            <ContactForm :contact="contact" />

          <div class="branches-sidebar__social-title">{{ contact.translate.soc_set_title }} </div>
         <ContactSoc :contact="contact" />

          <ContactInfo :contact="contact" />

        </div>
        <div class="branches-content">
          <div class="branches-content__title">סניפים</div>
          <ul class="branches-content__body">

            <BranchItem />
          </ul>
        </div>
      </div>
    </div>
  </div>

  <base-meta-info :metaInfo="setMetaInfo" v-if="page" />
</template>

<script>

import BranchItem from "./BranchItem";
import ContactForm from "./ContactForm";
import ContactSoc from "./ContactSoc";
import ContactInfo from "./ContactInfo";
import {mapActions,mapGetters} from 'vuex'

import Breadcrumb from "../../mixins/Breadcrumb";

export default {
  name: "Contact",
  emits:['footerContent'],
  mixins: [Breadcrumb],
  props:{
    slug: ''
  },
  components: {ContactInfo, ContactSoc, ContactForm, BranchItem},

  watch: {
    'page.translate.slug'(slug) {
      if (slug)
        this.$router.replace({name: 'Contact', params: {slug}})
    },
  },

  computed:{
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      contactData: 'contact/GET_CONTACT',
      pageData: 'page/GET_PAGE'
    }),

    page(){
      return this.pageData('Contact',this.language.id)
    },

    pageName(){
      return this.$trans._lang('Contact')
    },

    contact(){
      return this.contactData(this.language.id)
    },

    setMetaInfo() {
      return {
        title: this.page.translate.meta_title || '',
        meta_keywords: this.page.translate.meta_keywords,
        meta_description: this.page.translate.meta_description,
      }
    },

  },
  methods:{
    ...mapActions(['contact/SET'])
  },
  mounted() {
    if (!('id' in this.contact)){
      this['contact/SET']()
    }


  },
  beforeUpdate() {
    this.$emit('footerContent',{
      footer_text: this.page.translate.footer_text
    })
  }

}
</script>

