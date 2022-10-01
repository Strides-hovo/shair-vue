<template>
  <div class="contacts-body">
    <div class="info-item">
      <span>טקסט “שעות הפעילות” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.time_title">
    </div>
    <div class="info-item">
      <span>טקסט פירוט שעות הפעילות Hebrew: </span>
      <textarea :value="arrayToString(contact.translate.time_list)"
                @change="tileList"
                class="textarea"></textarea>
<!--      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.time_list">-->
    </div>
    <div class="info-item">
      <span>טקסט “לבירורים והזמנות צרו קשר בטלפון” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.additional_title">
    </div>
    <div class="info-item">
      <span>מס’ טלפון Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.additional_tel">
    </div>
    <div class="info-item">
      <span>טקסט “פקס” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.fax_title">
    </div>
    <div class="info-item">
      <span>מס’ פקס Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.fax">
    </div>
    <div class="info-item">
      <span>טקסט “כתבו לנו” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.write_us_title">
    </div>
    <div class="info-item">
      <span>כתובת אימייל Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.write_us_email">
    </div>
    <div class="info-item">
      <span>טקסט “כתובת” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.address_title">
    </div>
    <div class="info-item">
      <span>כתובת Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.address">
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  props:{
    contact: {}
  },
  computed: {
    interface: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods:{
    tileList(evt){
      const value = evt.target.value.split('\n')
      console.log(value)
      const tr = {
        translate: {
          time_list: value
        }
      }
      //this.$emit('update:contact.translate.time_list',value)
      this.contact.translate.time_list = value
      console.log( this.contact.translate.time_list )
    },

    arrayToString(array){
      if (array && array.length){
        return array.map( item => item += '\n' ).join('')
      }
    }

  }
}
</script>




<style>
  .textarea{
    width: 100%;
    margin: -8px 0 0;
    font-size: 16px;
    line-height: 22px;
    background: transparent;
    border-bottom: 1px solid #87A8C9;
    height: 63px;
    text-decoration: underline;
  }
</style>
