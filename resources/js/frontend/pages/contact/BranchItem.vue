<template>
  <li class="branches-content__body-item"
      v-for="branch of branches"
      :key="branch.id"
  >
    <router-link
        v-if="branch.translate.slug"
        :to="{name: 'Branch', params: {slug: branch.translate.slug}}" >
      {{ branch.translate.name }}
    </router-link>

  </li>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BranchItem",
  components: {},
  computed:{
    ...mapGetters({
      language: 'lang/GET_SITE_LANGUAGE',
      BranchData: 'branch/GET_BRANCHES'
    }),
    branches(){
      return this.BranchData(this.language.id)
    }
  },
  methods:{
    ...mapActions(['branch/SET'])
  },
  mounted() {
    if (!this.branches.length){
      this['branch/SET']()
    }
  }
}
</script>

