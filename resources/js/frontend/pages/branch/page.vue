<template>

  <div class="branch">
    <div class="notfound__bg">
      <img src="@img/light-bg.png" alt="">
    </div>
    <div class="container">
      <div class="branch-body">
        <div class="branch-body__map">

<!--          <GoogleMap :api-key="Map_key" style="width: 100%; height: 500px" :center="center" :zoom="15" v-if="branch">-->
<!--            <Marker :options="{ position: center }" />-->
<!--          </GoogleMap>-->

        </div>
        <div class="branch-body__info">
          <div class="branch-body__title title">
            <span></span>
            {{ branch?.translate.name_title }}
            <span></span>
          </div>
          <div class="branch-body__info-body">
            <div class="branch-body__info-col">
              <div class="branch-body__info-item">
                <div class="branch-body__info-title">
                  {{ branch?.translate.whats_title }}
                </div>
                <div class="branch-body__info-desc">
                  {{ branch?.translate.whats_text }}
                </div>
              </div>
            </div>
            <BranchInfo :branch="branch" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <base-meta-info :metaInfo="setMetaInfo" v-if="branch" />
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import BranchInfo from "./BranchInfo";
import {mapActions, mapGetters} from 'vuex'
import Breadcrumb from "../../mixins/Breadcrumb";

export default {
  name: "FrontBranch",
  emits:['footerContent'],
  mixins:[Breadcrumb],
  data() {
    return {
      Map_key: process.env.MAP_API
    }
  },
  props:{
    slug: ''
  },
  components: {BranchInfo, GoogleMap, Marker },

  watch: {
    'branch.translate.slug'(slug) {
      if (slug)
        this.$router.replace({name: 'Branch', params: {slug}})
    },
  },
  computed:{
    ...mapGetters({
      BranchData: 'branch/GET_BRANCH',
      language: 'lang/GET_SITE_LANGUAGE'
    }),

    branch(){
      return this.BranchData(this.slug,this.language.id)
    },

    pageName(){
      if (this.branch){
        return this.branch.translate.name
      }
    },

    setMetaInfo() {
      return {
        title: this.branch.translate.meta_title || '',
        meta_keywords: this.branch.translate.meta_keywords,
        meta_description: this.branch.translate.meta_description,
      }
    },

    center(){
      if (this.branch && typeof this.branch.map_lat === "number" && typeof this.branch.map_lng === "number" ){
        return {
          lat: this.branch.map_lat, lng: this.branch.map_lng
        }
      }
        else{
        return {
          lat: 0.000, lng: 0.000
        }
      }

    },

  },
  methods:{
    ...mapActions(['branch/SET'])
  },

  mounted() {
    this['branch/SET']()
  },

  beforeUpdate() {
    if (this.branch){
      this.$emit('footerContent',{
        footer_text: this.branch.translate.footer_text
      })
    }

  }
}
</script>

