<template>
  <div class="page__top">
    <div class="page__top-title">
              <span v-for="(crumb,i) in crumbs" :key="crumb.name">
                <router-link :to="crumb.path" v-if="i !== crumbs.length - 1" class="nav-link">
                  {{ $trans._lang(crumb.name) }}  >
                </router-link>
                <p v-else> {{ $trans._lang(crumb.name) }} </p>
              </span>
    </div>
  </div>
</template>

<script>


import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'BaseBreadcrumb',
  data: () => ({
    forward: '',
    current: '',
    break: [],
    routeNames: []
  }),
  computed: {
    ...mapGetters({ getCramps: "Breadcrumb/GET_CRAMPS" }),

    getNames(){
      return this.$route.meta?.parent
    },

    crumbs(){
      return this.getCramps(this.getNames)
    }

  },
    methods:{

    ...mapMutations(['Breadcrumb/ADD_CRAMP']),

      getCramp(){
        this['Breadcrumb/ADD_CRAMP']({
          path: this.$route.path,
          name: this.$route.name
        })
      },
    },


  watch: {
      '$route'(to, from) {
        this['Breadcrumb/ADD_CRAMP']({
          path: this.$route.path,
          name: this.$route.name
        })

      }
  },

  mounted() {
     this.getCramp()

  }
}
</script>
<style>
.nav-link{
  text-decoration: none;
  color: inherit;
}
</style>
