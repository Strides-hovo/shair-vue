<template>
  <div class="branches-new" :class="{active: ButtonNewBranch}">
    <div class="branches-new__bg"></div>
    <div class="branches-new__content">
      <div class="branches-new__content-top">
        <span class="branches-new__close" @click="closeModal">
          <base-icon icon="close" width="15" height="15" />
        </span>
        <span class="branches-new__title">
            הוספת סניף
          </span>
      </div>
      <div class="branches-new__content-edit">
        <div class="branches-new__content-item small">
          <span>טקסט “שם החנות” {{ language.code }}: </span>
          <input type="text" placeholder="שם החנות" v-model="branch.translate.name_title">
        </div>
        <div class="branches-new__content-item">
          <span>שם החנות: </span>
          <input type="text" placeholder="הובלות ומשלוחים בכל אזור המרכז, ירושלים, הצפון והדרום -*פעיל*" v-model="branch.translate.name">
        </div>
        <div class="branches-new__content-item small">
          <span>טקסט “כתובת” (Google Map Longitude) {{ language.code }}: </span>
          <input type="text" placeholder="כתובת" v-model="branch.map_lng">
        </div>
        <div class="branches-new__content-item small">
          <span>טקסט “כתובת” (Latitude Google Map) {{ language.code }}: </span>
          <input type="text" placeholder="כתובת" v-model="branch.map_lat">
        </div>
        <div class="branches-new__content-item small">
          <span>כתובת: </span>
          <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.address_title">
        </div>
        <div class="branches-new__content-item small">
          <span>כתובת: </span>
          <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.address">
        </div>
        <div class="branches-new__content-item small">
          <span>טקסט “טלפון” {{ language.code }}: </span>
          <input type="text" placeholder="כתובת" v-model="branch.translate.tel_title">
        </div>
        <div class="branches-new__content-item small">
          <span>טלפון: </span>
          <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.tel">
        </div>
        <div class="branches-new__content-item small">
          <span>טקסט “אימייל” {{ language.code }}: </span>
          <input type="text" placeholder="כתובת" v-model="branch.translate.email_title">
        </div>
        <div class="branches-new__content-item small">
          <span>אימייל: </span>
          <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.email">
        </div>
        <div class="branches-new__content-item small">
          <span>טקסט “שעות פעילות: ימים א-ה” {{ language.code }}: </span>
          <input type="text" placeholder="כתובת" v-model="branch.translate.time_title">
        </div>
        <div class="branches-new__content-item">
          <span>שעות פעילות: ימים א-ה” {{ language.code }}: </span>
<!--          <input type="text" >-->
          <textarea placeholder="23:30 - 8:00 / :'ו םוי 17:00 - 8:00 /  :ש&quot; צומ 23:30 - 20:30 " v-model="branch.translate.time" ></textarea>
        </div>
        <div class=" branches-new__content-item small">
          <span>טקסט “מה בחנות:” {{ language.code }}: </span>
          <input type="text" placeholder="כתובת " v-model="branch.translate.whats_title">
        </div>
        <div class=" branches-new__content-item">
          <span>מה בחנות:</span>
          <textarea v-model="branch.translate.whats_text"
              placeholder="ניתן להזמין ולקבל במשלוח מהיר סוכות לנצח קומפלט כולל בד מצנח לסוכה, סכך לסוכה, במבוקים להנחת הסכך על מסגרת הסוכה, תיק לברזלי הסוכה, בדי תמונה מצויירים, סוכות לילדים. כמו כן, ניתן לרכוש אביזרים לסוכה כגון: בד לסוכה, מסגרת ברזל לסוכה, מוטות בודדים לסוכה ועוד.שירות משלוחים מהיר לכל הארץ.">
          </textarea>
        </div>

        <div class=" branches-modal-edit__content-item small">
          <span>טקסט “מה בחנות:” {{ language.code }}: </span>
          <input type="text" placeholder="כתובת " v-model="branch.translate.slug">
        </div>
        <div class=" branches-modal-edit__content-item small">
          <span>טקסט “מה בחנות:” {{ language.code }}: </span>
          <input type="text" placeholder="כתובת " v-model="branch.translate.meta_title">
        </div>
        <div class=" branches-modal-edit__content-item small">
          <span>טקסט “מה בחנות:” {{ language.code }}: </span>
          <input type="text" placeholder="כתובת " v-model="branch.translate.meta_keywords">
        </div>
        <div class=" branches-modal-edit__content-item">
          <span>מה בחנות:</span>
          <textarea v-model="branch.translate.footer_text"></textarea>
        </div>

      </div>
      <button class=" branches-new__content-btn btn" @click="createBranch">
        שמור
      </button>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "BranchNew",
  emits:['update:ButtonNewBranch'],
  props:{
    ButtonNewBranch: false,
  },
  data: () => ({
    branch: {
      translate: {}
    }
  }),
  computed:{
    ...mapGetters({languageId: 'lang/getLanguageId',language: 'lang/getLanguage' })
  },
  methods:{
    ...mapActions(['branch/CREATE']),
    closeModal(){
      this.$emit('update:ButtonNewBranch',false)
    },
    createBranch(){
      this.branch.translate.language_id = this.languageId
      this['branch/CREATE'](this.branch)
      this.$emit('update:ButtonNewBranch',false)
      this.branch = {translate: {}}
    }
  }

}
</script>
<style>
.branches-new__content{
  overflow-y: scroll;
}
</style>
