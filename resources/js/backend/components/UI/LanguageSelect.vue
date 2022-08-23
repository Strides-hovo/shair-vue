<template>
  <div class="select-top">
    <select v-model="language_id">
      <option v-for="lang in actualLanguages" :key="lang.id" :value="lang.id">
        {{ lang.code }}
      </option>
    </select>
  </div>
</template>
 
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "LanguageSelect",

  methods: {
    ...mapMutations(['lang/setAdminLanguageId','products/UPDATE_LANGUAGE']),
  },

  computed: {

    ...mapGetters({ actualLanguages: 'lang/getActualLanguages' }),
    
    language_id: {
      get() {
        return this.$store.getters['lang/getLanguageId']
      },
      set(val) {
        this['lang/setAdminLanguageId'](val)
      }
    },

  },



}
</script>

