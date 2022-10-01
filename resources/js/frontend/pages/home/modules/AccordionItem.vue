<template>
  <div class="faq-body__item">

    <div class="faq-body__item-title" @click="ButtonTab = !ButtonTab">
      <base-icon icon="home-plus" width="20" height="19" />
       כמה עולה סוכה?
    </div>

      <slide-up-down v-model="ButtonTab" :duration="400">
        <div class="faq-body__item-content" >
          עובדטקסט הסבר על איך זה עובד טקסט הסבר על איך זה עובד טקסט הסבר על איך זה עובדטקסט הסבר על איך זה עובד
          טקסט.
          על איך זה עובד טקסט הסבר על איך זה עובדטקסט הסבר על איך זה עובד טקסט הסבר על איך זה עובד טקסט הסבר על איך
          זה
          הסבר על איך זה עובדטקסט הסבר על איך זה עובד טקסט הסבר
        </div>
      </slide-up-down>

  </div>
</template>

<script>

export default {
  name: "AccordionItem",

  data() {
    return {
      ButtonTab: false
    }
  },

}
</script>

