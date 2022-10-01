<template>

  <brand-item
      v-for="(brand,i) in brands"
      :key="i" :brand="brand"
      @destroy="destroy"
      @upload="upload"
  />

  <div class="mainpage-body__clients-item">
    <label>
      <base-icon icon="main-add" width="25" height="25"/>
      <input type="file" @change="upload" accept="image/*">
    </label>
  </div>
</template>

<script>

import imageUpload from "../../mixins/imageUpload";
import {mapActions} from "vuex";
import BrandItem from "./BrandItem";

export default {
  name: "BrandSlider",
  components: {BrandItem},
  mixins: [imageUpload],
  props: {
    page: {
      required: true,
      default: {}
    }
  },
  data: () => ({
    pageData: {}
  }),
  computed: {
    brands() {
      return this.page.brands
    },

  },
  methods: {
    ...mapActions(['home/CREATE']),

    async upload(evt, brand) {
      await this.UploadFile(evt)
      const {translate, ...page} = this.page
      if (brand) {
        page.brands = page.brands.map(br => br === brand ? this.newFile : br)
      }
      else {
        page.brands.push(this.newFile)
      }
      this['home/CREATE'](page)
    },

    destroy(brand) {
      const {translate, ...page} = this.page
      page.brands = page.brands.filter(br => br !== brand)
      this['home/CREATE'](page)
    }

  }

}
</script>

