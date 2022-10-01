<template>

  <AboutItem
      v-for="(slide,i) in abouts"
      :key="i"
      :slide="slide"
      @destroy="destroy"
      @upload="upload"
  />

  <div class="mainpage-body__imgs-item">
    <label>
      <base-icon icon="main-add" width="25" height="25" />
      <input type="file" @change="upload" accept="image/*">
    </label>
  </div>
</template>

<script>
import AboutItem from "./AboutItem";
import imageUpload from "../../mixins/imageUpload";
import {mapActions} from "vuex";
export default {
  name: "AboutSlider",
  components: {AboutItem},
  mixins:[imageUpload],
  props:{
    page:{}
  },
  computed:{
    abouts(){
      return this.page.abouts
    }
  },

  methods: {
    ...mapActions(['home/CREATE']),

    async upload(evt, item) {
      await this.UploadFile(evt)
      const {translate, ...page} = this.page
      if (item) {
        page.abouts = page.abouts.map(sl => sl === item ? this.newFile : sl)
      } else {
        page.abouts.push(this.newFile)
      }
      this['home/CREATE'](page)
    },

    destroy(item) {
      const {translate, ...page} = this.page
      page.abouts = page.abouts.filter(sl => sl !== item)
      this['home/CREATE'](page)
    }

  }
}
</script>

