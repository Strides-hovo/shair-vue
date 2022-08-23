<template>
  <div class="info-image">
    <div class="info-image__img">
      <img :src="page.image">
      <base-file-upload
          @UploadNewFile="UpdateImage">
        <div class="info-image__img-title">
          שינוי תמונה
          <base-icon icon="edit" width="16" height="22"/>
        </div>

      </base-file-upload>

    </div>

    <div class="info-image__info">
      <div class="table-img__info">
        <div class="table-img__info-item">
          <span>Alt:</span>
          <input type="text" placeholder="סוכה כשרה" v-model="page.translate.image_alt"
                 @change="UpdateImageData()">
        </div>
        <div class="table-img__info-item">
          <span>Title:</span>
          <input type="text" placeholder="סוכה כשרה" v-model="page.translate.image_title"
                 @change="UpdateImageData()">
        </div>
        <div class="table-img__info-item">
          <span>File name:</span>
          <input type="text" placeholder="סוכה-כשרה6667" v-model="page.image_name"
                 @change="UpdateImageData(true)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import BaseFileUpload from "../../components/BaseFileUpload";
import {mapActions} from "vuex";

export default {
  name: "PageImageBlock",
  components: {BaseFileUpload},
  // emits: ['UpdateImage'],
  props: {
    page: {}
  },

  methods: {

    ...mapActions(['article/UPDATE']),

    UpdateImage(image) {
      const page = this.page
      page.image = image.src
      page.image_name = image.name

      this['article/UPDATE'](page)
    },


    UpdateImageData(image_name = false) {
      const page = this.page
      page.replace = image_name
      this['article/UPDATE'](page)

    }
  }
}
</script>

<style scoped>
.table-img__info-item {
  width: 300px;
  border-bottom: 1px solid;
}

.table-img__info-item input {
  background: none;
  padding: 10px 0;
}

.table-img__info-item span {
  margin-left: 15px;
}
</style>