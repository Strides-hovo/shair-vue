<template>
  <div class="mainpage-body__clients-item" >
    <img :src="brand">
    <div class="mainpage-clients__btns">

      <div class="mainpage-clients__btns-item" @click="destroy(brand)">
        <base-icon icon="main-delete" width="20" height="23"/>
      </div>

      <div class="mainpage-clients__btns-div">
        <base-icon icon="main-div" width="1" height="15"/>
      </div>

      <div class="mainpage-clients__btns-item" @click="uploaded">
        <base-icon icon="main-edit" width="16" height="22"/>
        <input type="file" style="display:none;" @change="upload($event,brand)" ref="fileInput" accept="image/*">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandItem",
  props:{
    brand: String
  },
  emits:['destroy','upload'],
  methods:{
    uploaded() {
      this.$refs.fileInput.click()
    },

    destroy(brand){
      this.$emit('destroy',brand)
    },

    upload(evt,brand ){
      this.$emit('upload',evt,brand )
      this.$refs.fileInput.value = ''
    }
  }
}
</script>

