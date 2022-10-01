<template>

  <video :src="video" controls width="300" height="150"></video>
  <input type="file" style="display:none;" @change="upload" ref="fileInput" accept="video/*">
  <button @click="uploaded">החלפת וידאו</button>
</template>

<script>
import imageUpload from "../../mixins/imageUpload";

export default {
  name: "HomeVideoItem",
  mixins: [imageUpload],
  emits: ['updateVideo'],
  props: {
    video: String,
    keys: String
  },

  methods:{
    uploaded() {
      this.$refs.fileInput.click()
    },

   async upload(evt ){
      await this.UploadFile(evt)

      this.$emit('updateVideo',this.keys, this.newFile)
      this.$refs.fileInput.value = ''
    }
  }
}
</script>

