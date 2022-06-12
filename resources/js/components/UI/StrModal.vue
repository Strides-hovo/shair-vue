<template>

  <div class="lang-new" :class="{ active: isActive }">
    <div class="lang-new__bg" ref="outClick"></div>
    <div class="lang-new__content" :style="{width: width}">
      <div class="lang-new__content-top">
        <span class="lang-new__close" @click="closeModal">
          <img :src="closeIcon.default" alt="">
        </span>
        <span class="lang-new__title">{{ HeaderText }}</span>
      </div>

      <slot></slot>

    </div>
  </div>


</template>

<script>
export default {
  name: "StrModal",
  data: () => ({
    closeIcon: require('@img/icons/close.svg'),
  }),
  props: {
    HeaderText: {
      type: String,
      default: 'Добавить язык'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '440px'
    }

  },

  methods: {
    closeModal() {
      this.$emit('CloseModal')
    }
  },
  mounted() {
    document.addEventListener('click', evt => {
      if (evt.target === this.$refs['outClick']) {
        this.closeModal()
      }
    })
  }
}
</script>

<style scoped>
</style>