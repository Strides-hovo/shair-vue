<template>
    <div class="productpage-modal__top">
        <div class="productpage-modal__top-item">
            <span>Page Slug:</span>
            <input type="text" placeholder="אנא הזינו שם לעמוד ב URL" v-model="about.slug">
        </div>
    </div>
    <div class="productpage-modal__content">
<div class="productpage-modal__content-title">
                  הגדרות META:
                </div>
        <div class="productpage-modal__content-item">
            <span>Meta Title:</span>
            <input type="text" placeholder="אנא הזינו Page Title" v-model="about.meta_title">
        </div>
        <div class="productpage-modal__content-item">
            <span>:Meta Description </span>
            <input type="text" placeholder="אנא הזינו Meta Description" v-model="about.meta_description">
        </div>
        <div class="productpage-modal__content-item">
            <span>Meta Keywords:</span>
            <input type="text" placeholder="אנא הזינו Meta Keywords" v-model="about.meta_keywords">
        </div>
    </div>
    <div class="productpage-modal__btn btn" @click="UpdatePage">
        שמור
    </div>
</template>

<script>
export default {
    name: 'str-setting',
    props: {
        about: {
            type: Object
        }
    },
    emits: ['UpdatePage'],
    methods: {
        UpdatePage() {
            this.$emit('UpdatePage')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>