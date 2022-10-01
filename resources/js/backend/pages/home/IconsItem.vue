<template>

  <div class="mainpage-body__icons-item">
    <div class="mainpage-body__icons-img">
      <img :src="icon.icon" alt="">
      <div class="mainpage-body__icons-btns">
        <div class="mainpage-body__icons-btn" @click="destroy">
          <base-icon icon="main-delete" width="20" height="23"/>
        </div>
        <div class="mainpage-body__icons-div">

          <base-icon icon="main-div" width="1" height="15"/>
        </div>
        <div class="mainpage-body__icons-btn" @click="uploaded">
          <base-icon icon="main-edit" width="16" height="22"/>
          <input type="file" style="display:none;" @change="Upload" ref="fileInput" accept="image/*">
        </div>
      </div>
    </div>
    <div class="mainpage-body__icons-input">
      <textarea :value="icon.translate.title" @change="updateTitle"></textarea>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import BaseIcon from "../../components/UI/BaseIcon";
import imageUpload from "../../mixins/imageUpload";

export default {
  name: "IconsItem",
  emits: ['UploadIcon'],
  mixins:[imageUpload],
  components: {BaseIcon},
  props: {
    icon: {
      required: true,
    }
  },
  computed:{
    ...mapGetters({languageId: 'lang/getLanguageId'})
  },
  methods: {
    ...mapActions(['home/CREATE','home/DELETE_ICON']),

    destroy() {
      this['home/DELETE_ICON'](this.icon)
    },

    updateTitle(evt) {
      const icon = {
        id: this.icon.id,
        icon: this.icon.icon,
        translate: {
          title: evt.target.value,
          language_id: this.languageId,
          home_icon_id: this.icon.id,
        },
      }
      this.$emit('UploadIcon', icon)
    },

    async Upload(evt) {
      await this.UploadFile(evt)

      const icon = {
        icon: this.newFile,
        id: this.icon.id
      }
      this.$emit('UploadIcon', icon)
      this.$refs.fileInput.value = ''
    },

    uploaded() {
      this.$refs.fileInput.click()
    }

  }
}
</script>

<style scoped>

</style>