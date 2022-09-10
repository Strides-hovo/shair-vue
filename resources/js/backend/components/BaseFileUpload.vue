<template>
  <input type="file" style="display: none" @change="UploadFile" ref="fileInput" :accept="type">
  <button class="str-file-upload" @click="uploaded">
    <slot/>
  </button>

</template>

<script>
import apiRoutes from "@/routes/api-routes";

export default {
  name: "BaseFileUpload",
  emits: ['UploadNewFile'],
  props: {
    'type': {
      type: String,
      default: 'image/*'
    }
  },
  methods: {

    async UploadFile(evt) {
      let SelectedFile = evt.target.files[0]
      const file = new FormData()
      file.append('file', SelectedFile, SelectedFile.name)
      let response = await axios.post(apiRoutes('image.upload'), file)
      const image = {
        src: response.data,
        name: response.data.split('/').slice(-1)[0].split('.')[0]
      }
      this.$emit('UploadNewFile', image)
      this.$refs.fileInput.value = ''
    },

    uploaded() {
      this.$refs.fileInput.click()
    }
  },


}
</script>
<style>
.str-file-upload {
  background: none;
}
</style>
