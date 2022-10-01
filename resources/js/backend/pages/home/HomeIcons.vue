<template>
  <div class="info-item">
    <span>כותרת: </span>
    <input type="text" placeholder="אנא הזינו כותרת למוצר" v-model="page.translate.icon_title">
  </div>
  <div class="info-item">
    <span>טקסט: </span>
    <input type="text" placeholder="אנא הזינו טקסט למוצר" v-model="page.translate.icon_content">
  </div>
  <div class="info-item">
    <span>לינק: </span>
    <input type="text" placeholder="אנא הזינו כותרת למוצר" v-model="page.icon_link">
  </div>
  <div class="mainpage-body__col-title section-title">
    איקונים:
  </div>
  <div class="mainpage-body__icons">

    <IconsItem v-for="(icon,i) in icons" :key="icon.id" :icon="icon" @UploadIcon="UploadIcon" />

    <UploadIcon  @UploadNewFile="UploadNewFile" />

  </div>
</template>

<script>
import IconsItem from "./IconsItem";
import {mapActions} from "vuex";
import UploadIcon from "./UploadIcon";
export default {
  name: "HomeIcons",
  components:{UploadIcon, IconsItem},
  props:{
    icons: {
      default: [],
    },
    page: {}
  },
  methods:{
    ...mapActions(['home/CREATE_ICON','home/UPDATE_ICON']),
    UploadNewFile(icon){
      const options = {page: this.page,icon  }
      this['home/CREATE_ICON']( options )
    },

    UploadIcon(icon){
      console.log(icon)
      this['home/UPDATE_ICON']( icon )
    }

  }
}
</script>

