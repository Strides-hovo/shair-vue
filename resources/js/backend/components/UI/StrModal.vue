<template>

  <div class="lang-new" :class="{ active: isActive }">
    <div class="lang-new__bg" ref="outClick"></div>
    <div class="lang-new__content" :style="{width: width}">
      <div class="lang-new__content-top">
        <span class="lang-new__close" @click="closeModal">

          <base-icon icon="close" width="15" height="15"  />
        </span>
        <span class="lang-new__title">{{ HeaderText }}</span>
      </div>

      <slot></slot>

    </div>
  </div>


</template>

<script>
import BaseIcon from "./BaseIcon";
export default {
  name: "StrModal",
  components: {BaseIcon},
  emits: ['CloseModal'],
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
<style scoped lang="scss">



/*.lang-new {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: all .4s ease;

      &__bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        transition: all .4s ease;
      }

    &.active {
      pointer-events: all;
      opacity: 1;
      visibility: visible;
        &.lang-new__bg {
        opacity: 1;
      }
    }

    &__content {
      position: absolute;
      width: 440px;
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;
      background: #EEF6FE;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
        &-top {
          position: absolute;
          top: 0;
          right: 0;
        }
      &-btn {
        margin: 0 auto 20px 20px;
      }

    }

    &__close {
      cursor: pointer;
      width: 26px;
      height: 26px;
      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;

      }
    }

    &__title {
      font-size: 24px;
      line-height: 33px;
      color: #2B2B2B;
    }



}*/





</style>