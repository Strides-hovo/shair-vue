<template>
    <div class="lang-new" :class="{active: isActive}">
        <div class="lang-new__bg"></div>
        <div class="lang-new__content">
            <div class="lang-new__content-top">
                <span class="lang-new__close" @click="close">
                    <img :src="closeIcon.default" alt="">
                </span>
                <span class="lang-new__title">Добавить язык</span>
            </div>
            <slot></slot>


        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            closeIcon: require('@img/icons/close.svg'),
        }),
        props: {
            isActive: {
                type: Boolean
            }
        },
        name: "ModalLnaguage",
        methods: {
            close() {
                this.$emit('closeModal', this.isActive)
            }
        }
    }
</script>

<style scoped>


    .lang-new {
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all .4s ease;
        -o-transition: all .4s ease;
        transition: all .4s ease;
    }

    .lang-new.active {
        pointer-events: all;
        opacity: 1;
        visibility: visible;
    }

    .lang-new.active .lang-new__bg {
        opacity: 1;
    }

    .lang-new__bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        -webkit-transition: all .4s ease;
        -o-transition: all .4s ease;
        transition: all .4s ease;
    }

    .lang-new__content {
        position: absolute;
        width: 440px;
        top: 0;
        bottom: 0;
        left: 50%;
        -webkit-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        z-index: 1;
        background: #EEF6FE;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .lang-new__content-top {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background-color: #fff;
        height: 66px;
        border-bottom: 3px solid #286B9E;
        padding: 0 20px;
    }


    .lang-new__close {
        cursor: pointer;
        width: 26px;
        height: 26px;
    }

    .lang-new__close img {
        width: 100%;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        -o-object-position: center;
        object-position: center;
    }

    .lang-new__title {
        font-size: 24px;
        line-height: 33px;
        color: #2B2B2B;
    }

</style>

