<template>
  <div class="mainpage-body__imgs-item">
    <img :src="slide">
    <div class="mainpage-clients__btns">
      <div class="mainpage-clients__btns-item" @click="destroy">
        <base-icon icon="main-delete" width="20" height="23" />
      </div>
      <div class="mainpage-clients__btns-div">
        <base-icon icon="main-div" width="1" height="15" />
      </div>
      <div class="mainpage-clients__btns-item" @click="uploaded">
        <base-icon icon="main-edit" width="16" height="22" />
        <input type="file" style="display:none;" @change="upload($event)" ref="fileInput" accept="image/*">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutItem",
  emits:['destroy','upload'],
  props:{
    slide: String
  },
  methods:{
    uploaded() {
      this.$refs.fileInput.click()
    },

    destroy(){
      this.$emit('destroy',this.slide)
    },

    upload(evt ){
      this.$emit('upload',evt,this.slide )
      this.$refs.fileInput.value = ''
    }
  }
}
</script>

