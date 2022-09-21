<template>
  <div class="product-photo__modal" :class="{active: ButtonModal}">
    <div class="product-photo__modal-bg"></div>
    <div class="product-photo__modal-content">
      <div class="product-photo__modal-close" @click="CloseModal">
        <base-icon icon="modal-close" width="48" height="47" />
      </div>
      <div class="product-photo__modal-img">
        <img :src="photo.image"
             :alt="photo.translate?.alt"
             :title="photo.translate?.title"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePhotoModal",
  emits:['update:ButtonModal'],
  props:{
    ButtonModal: false,
    photo: {}
  },
  methods:{

    CloseModal(){

      this.$emit('update:ButtonModal',false)
    }
  }
}
</script>

<style scoped>

</style>