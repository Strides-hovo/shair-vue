<template>
  <div class="mainpage-body__icons-item">
    <div class="mainpage-body__icons-img with-upload" >
      <label>
        <base-icon icon="main-add" width="25" height="25"/>
        <input type="file" @change="Upload" ref="fileInput" accept="image/*">
      </label>
    </div>
    <div class="mainpage-body__icons-input" >
      <textarea v-model="icon.translate.title"></textarea>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import imageUpload from "../../mixins/imageUpload";

export default {
  name: "UploadIcon",
  emits:['UploadNewFile'],
  mixins: [imageUpload],
  data:() => ({
    icon: {
      translate: {}
    }
  }),
  computed:{
    ...mapGetters({languageId: 'lang/getLanguageId'})
  },
  methods:{
    ...mapActions(['home/CREATE_ICON']),

    async Upload(evt) {
      await this.UploadFile(evt)
      this.icon.icon = this.newFile
      this.icon.translate.language_id = this.languageId
      this.$emit('UploadNewFile', this.icon)
      this.icon = {translate: {}}
      this.$refs.fileInput.value = ''
    },

  }
}
</script>

