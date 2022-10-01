<template>
  <div class="contacts-social">
    <div class="contacts-social__title">
      לינקים לרשתות חברתיות:
    </div>
    <div class="contacts-social__body">
      <div class="contacts-social__body-item">
        <div class="info-item">
          <span>לינק:</span>
          <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.whatsapp">
        </div>
        <div class="contacts-social__body-img" >
          <base-icon icon="whatsapp-big" width="63" height="63" />
        </div>
      </div>
      <div class="contacts-social__body-item">
        <div class="info-item">
          <span>לינק:</span>
          <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.twitter">
        </div>
        <div class="contacts-social__body-img">
          <base-icon icon="twitter-big" width="63" height="63" />
        </div>
      </div>
      <div class="contacts-social__body-item">
        <div class="info-item">
          <span>לינק:</span>
          <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.youtube">
        </div>
        <div class="contacts-social__body-img">

          <base-icon icon="youtube-big" width="63" height="63" />
        </div>
      </div>
      <div class="contacts-social__body-item">
        <div class="info-item">
          <span>לינק:</span>
          <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.facebook">
        </div>
        <div class="contacts-social__body-img">
          <base-icon icon="facebook-big" width="63" height="63" />
        </div>
      </div>
      <div class="contacts-social__body-item">
        <div class="info-item">
          <span>לינק:</span>
          <input type="text" placeholder="אנא הזינו טקסט" v-model="contact.instagram">
        </div>
        <div class="contacts-social__body-img">
          <base-icon icon="instagram-big" width="63" height="63" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ContactSocial",
  props:{
    contact: {}
  }

}
</script>

<style scoped>

</style>