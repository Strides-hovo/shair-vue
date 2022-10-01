<template>
  <div  class="container-content__body container-content__body_info">
    <div class="container-content__body-info article contacts">
      <ContactHeader v-model:contact="contact" />
      <ContactSocial v-model:contact="contact" />
      <ContactInfo  v-model:contact="contact" />
    </div>
    <div class="cart-btns">
      <button class="cart-btns__item btn" @click="updateOrCreate">
        שמירה
      </button>
    </div>
  </div>
</template>

<script>
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import ContactHeader from "./ContactHeader";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "BackendContact",
  components: {ContactHeader, ContactSocial, ContactInfo},
  props:{
    contact: {}
  },
  computed:{

  },
  methods:{
    ...mapActions([
        'contact/SET',
        'contact/UPDATE_OR_CREATE'
    ]),

    updateOrCreate(){
      this['contact/UPDATE_OR_CREATE'](this.contact)
      console.log('cont',  this.contact)
    }

  },



}
</script>

<style scoped>

</style>