<template>
<!--  <transition name="aside">-->
    <div class="productpage-modal" :class="{ active: isActive }" >
      <div class="productpage-modal__close" @click="closeModal">
        <img src="@img/icons/close.svg" alt="">
      </div>
      <slot></slot>
    </div>
<!--  </transition>-->

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

<style >
.productpage-modal {
    position: fixed;
    z-index: 10;
    height: 100vh;
    left: 0;
    background: #fbfbfb;
    padding: 30px 20px;
    max-width: 600px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    transform: translate(-100%, 0);
    pointer-events: none;
    visibility: hidden;
    border-right: 1px solid #bfbfbf;
}

.productpage-modal.active {
    transform: translate(0);
    pointer-events: all;
    visibility: visible;
}

/*.aside-enter-active,
.aside-leave-active {
  transition: opacity .5s;
  transform: translate(0);
}

.aside-enter,
.aside-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;

}*/


</style>