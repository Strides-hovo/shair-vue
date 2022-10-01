<template>
  <div class="branches-modal-edit" :class="{active: ButtonEdit}">
    <div class="branches-modal-edit__close" @click="closeModal">
      <base-icon icon="close" width="15" height="15" />
    </div>
    <div class="branches-modal-edit__title">
      עריכת סניף
    </div>
    <div class="branches-modal-edit__content">
      <div class="branches-modal-edit__content-item small">
        <span>טקסט “שם החנות” {{ language.code }}: </span>
        <input type="text" placeholder="שם החנות" v-model="branch.translate.name_title" >
      </div>
      <div class="branches-modal-edit__content-item">
        <span>שם החנות: </span>
        <input type="text" placeholder="הובלות ומשלוחים בכל אזור המרכז, ירושלים, הצפון והדרום -*פעיל*" v-model="branch.translate.name">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>טקסט “כתובת” (Google Map Longitude) {{ language.code }}: </span>
        <input type="text" placeholder="כתובת" v-model="branch.map_lng">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>טקסט “כתובת” (Latitude Google Map) {{ language.code }}: </span>
        <input type="text" placeholder="כתובת" v-model="branch.map_lat">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>כתובת: </span>
        <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.address_title">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>כתובת: </span>
        <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.address">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>טקסט “טלפון” {{ language.code }}: </span>
        <input type="text" placeholder="כתובת" v-model="branch.translate.tel_title">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>טלפון: </span>
        <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.tel">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>טקסט “אימייל” {{ language.code }}: </span>
        <input type="text" placeholder="כתובת" v-model="branch.translate.email_title">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>אימייל: </span>
        <input type="text" placeholder="דרור 3, תל אביב" v-model="branch.translate.email">
      </div>
      <div class="branches-modal-edit__content-item small">
        <span>טקסט “שעות פעילות: ימים א-ה” {{ language.code }}: </span>
        <input type="text" placeholder="כתובת" v-model="branch.translate.time_title">
      </div>
      <div class="branches-modal-edit__content-item">
        <span>שעות פעילות: ימים א-ה” {{ language.code }}: </span>

        <textarea placeholder="23:30 - 8:00 / :'ו םוי 17:00 - 8:00 /  :ש&quot; צומ 23:30 - 20:30 " v-model="branch.translate.time"></textarea>
      </div>
      <div class=" branches-modal-edit__content-item small">
        <span>טקסט “מה בחנות:” {{ language.code }}: </span>
        <input type="text" placeholder="כתובת " v-model="branch.translate.whats_title">
      </div>
      <div class=" branches-modal-edit__content-item">
        <span>מה בחנות:</span>
        <textarea v-model="branch.translate.whats_text"></textarea>
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
    <button class="branches-modal-edit__btn btn" @click="updateBranch">
      שמור
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BranchEdit",
  emits:['update:ButtonEdit'],
  props:{
    ButtonEdit:false,
    branch: {}
  },
  computed:{
    ...mapGetters({language: 'lang/getLanguage'})
  },
  methods:{
    ...mapActions(['branch/UPDATE']),
    closeModal(){
      this.$emit('update:ButtonEdit',false)
    },

    updateBranch() {
      this['branch/UPDATE'](this.branch)
      this.closeModal()
    }
  }
}
</script>

