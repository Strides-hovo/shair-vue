<template>
  <form class="branches-sidebar__form">
    <input :placeholder="contact.translate.fullName_title" type="text" class="branches-sidebar__form-input" v-model="mail.fullName">
    <input :placeholder="contact.translate.tel_title" type="tel" class="branches-sidebar__form-input" v-model="mail.tel">
    <input :placeholder="contact.translate.email_title" type="email" class="branches-sidebar__form-input" v-model="mail.email">
    <textarea :placeholder="contact.translate.message_title" class="branches-sidebar__form-input" v-model="mail.message"></textarea>
    <div class="branches-sidebar__form-capthca">
      <vue-recaptcha
          :sitekey="siteKey"
          @verify="verifyToken"
         />

    </div>
    <button class="branches-sidebar__form-btn" @click.prevent="sendMail"> {{ contact.translate.send_title }} </button>
  </form>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';
import {mapActions} from "vuex";
export default {
  name: "ContactForm",
  components: { VueRecaptcha },
  props:{
    contact: {}
  },
  data: () => ({
    siteKey: process.env.RECAPTCHA_KEY,
    token: null,
    mail: {}
  }),
  methods:{
    ...mapActions(['contact/SEND_MAIL']),

    sendMail(){
      if (this.mail.token){
        this['contact/SEND_MAIL'](this.mail)
      }
    },
    verifyToken(token){
      this.mail.token = token
    },
  },


}
</script>

