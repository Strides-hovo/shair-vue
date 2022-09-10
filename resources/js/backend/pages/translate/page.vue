<template>
  <div class="cart-btns">
    <button class="cart-btns__item btn" @click="save">
      מחיקה
    </button>
  </div>

  <div class="container-content">
    <div class="container-content__top">

      <LanguageSelect />

      <div class="container-content__top-title">
        עמודי מדיה
        <span>
								המלצות
        </span>
      </div>
    </div>
    <div class="container-content__body">

      <div class="container-content__body-beforetable">

        <div class="info-item input-group" v-for="(value,key) in translates" :key="key">
								<span>{{ key }} </span>
          <input type="text" placeholder="" :value="value" @change="update(key,$event.target.value)">
        </div>

      </div>

    </div>
  </div>

</template>

<script>

import {mapGetters} from "vuex";
import apiRoutes from "@/routes/api-routes";


export default {

  name: "Translate",

  computed:{
    ...mapGetters({language_id: "lang/getLanguageId", language: "lang/getLanguage" }),

    translates(){
      return this.$trans._translate(this.language ? this.language.code : null) || {}
    },

  },

  methods: {
     save(){
      const data = {
        key: this.language.code,
        data: this.translates
      }
     axios.post(apiRoutes('translate.store'),data)

    },
    update(key,value){
      this.translates[key] = value
    },

  },


}
</script>
<style scoped>
  .container-content__body-beforetable{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .input-group{
    margin: 0 15px !important;
    padding: 20px 0;
  }
</style>
