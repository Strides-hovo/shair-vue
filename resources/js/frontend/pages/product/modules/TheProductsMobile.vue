<template>
    <div class="combobox mobile">
        <div class="combobox__active">
            <base-icon icon='arrow-green' width="18" height="10" />
            <span>
                מסגרת סוכה מברזל
            </span>
        </div>
        <div class="combobox-list">
            <div class="combobox-list__item">
                item 1
            </div>
            <div class="combobox-list__item">
                item 1
            </div>
            <div class="combobox-list__item">
                item 1
            </div>
            <div class="combobox-list__item">
                item 1
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheProductsMobile',
    props: {
        products: {
          default: []
        }
    }
}
</script>

<style lang="scss" scoped>
</style>