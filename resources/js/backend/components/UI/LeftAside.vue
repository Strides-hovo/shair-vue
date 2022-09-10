<template>
  <Transition name="slide-fade">
    <div class="productpage-modal" v-if="isActive" >
      <div class="productpage-modal__close" @click="closeModal">
        <img src="@img/icons/close.svg" alt="">
      </div>
      <slot></slot>
    </div>
  </Transition>

</template>

<script>
export default {
    name: 'LeftAside',
  emits: ['CloseLeftAside'],
    props: {
        isActive: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        closeModal() {
            this.$emit('CloseLeftAside')
        }
    },

}
</script>

<style scoped>

.productpage-modal {
    position: fixed;
    z-index: 10;
    height: 100vh;
    left: 0;
    background: #fbfbfb;
    padding: 30px 20px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #bfbfbf;

}


.slide-fade-enter-active,
.slide-fade-leave-active{
  transition: all 0.4s ease-out;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

</style>