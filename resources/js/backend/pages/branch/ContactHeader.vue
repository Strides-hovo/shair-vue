<template>
  <div class="contacts-body">
    <div class="info-item with-space">
      <span>כותרת (H1) Hebrew: </span>
      <input type="text" placeholder="אנא הזינו כותרת" v-model="contact.translate.title">
    </div>
    <div class="info-item">
      <span>טקסט “סניפים” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.branch_title">
    </div>
    <div class="info-item">
      <span>טקסט “כתבו לנו” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.write_title" >
    </div>
    <div class="info-item">
      <span>טקסט “בשאלות נפוצות כבר בדקת?” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.faq_title">
    </div>
    <div class="info-item">
      <span>טקסט “שם מלא (לחשבונית)” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.fullName_title">
    </div>
    <div class="info-item">
      <span>טקסט “סלפון” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.tel_title">
    </div>
    <div class="info-item">
      <span>טקסט “אימייל” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.email_title">
    </div>
    <div class="info-item">
      <span>טקסט “תוכן פניה” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.message_title">
    </div>
    <div class="info-item">
      <span>טקסט כפתור “שלח” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.send_title">
    </div>
    <div class="info-item with-space">
      <span>טקסט “סוכות הדר ברשתות החברתיות” Hebrew: </span>
      <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.translate.soc_set_title">
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactHeader",
  props:{
    contact: {}
  },

}
</script>

<style scoped>

</style>