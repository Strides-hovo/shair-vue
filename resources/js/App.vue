
<template>
  <component :is="$route.meta.layout">
    <slot />
  </component>

</template>

<script  >

import { mapActions, mapGetters,mapState } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapGetters({ languageId: 'lang/getLanguageId'}),


  } ,
  methods: mapActions(['lang/set']),


  async mounted() {
    if (!this.languageId) {
      this['lang/set']()
    }



  }
}

</script>



