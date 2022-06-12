<template>
    <div class="productpage-modal" :class="{ active: isActive }">
        <div class="productpage-modal__close" @click="closeModal">
            <img :src="require('@img/icons/close.svg').default" alt="">
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LeftAssaid',
    props: {
        isActive: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        closeModal() {
            this.$emit('CloseLeftAssaid')
        }
    },

}
</script>

<style>
.productpage-modal {
    position: fixed;
    z-index: 10;
    height: 100vh;
    left: 0;
    background: #fbfbfb;
    padding: 30px 20px;
    width: 600px;
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
    -webkit-transform: translate(-100%, 0);
    -ms-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    pointer-events: none;
    visibility: hidden;
    border-right: 1px solid #bfbfbf;
}

.productpage-modal.active {
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
    pointer-events: all;
    visibility: visible;
}
</style>