<!--suppress JSUnresolvedVariable -->
<template>
  <div class="page__top" v-if="$route.name !== 'Home'">
    <div class="page__top-title">
               <span v-for="(crumb,i) in crumbs" :key="crumb.name">

              <router-link
                  v-if="i !== crumbs.length - 1"
                  :to="{name: crumb.name,params:{slug: crumb.slug} }"
                  class="nav-link">
                  {{ $trans._lang(crumb.name) }} >
              </router-link>
                <p v-else> {{ $trans._lang(crumb.name) }} </p>
              </span>
    </div>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
  name: 'BaseBreadcrumb',

  computed: {
    ...mapGetters({
      getCramps: "menu/GET_CRAMPS",
      language: 'lang/GET_SITE_LANGUAGE'
    }),

    crumbs() {
      return this.getCramps(this.language.id)
    },


  },
  methods: {
    ...mapActions(['menu/SET_MENUS']),

  },
  mounted(){
    if( !this.crumbs ){
      this["menu/SET_MENUS"]();
    }

  }

}
</script>

<style>
.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
