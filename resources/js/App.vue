
<template>
  <component :is="$route.meta.layout">
    <slot />
  </component>

</template>

<script  >

import { mapActions, mapGetters } from "vuex";

export default {
  name: 'App',
  computed: mapGetters({ languageId: 'lang/getlanguageId' }),
  methods: mapActions(['lang/set']),

  async mounted() {
    if (!this.languageId) {
      this['lang/set']()
    }
console.log(this.$route );
  }
}

</script>



