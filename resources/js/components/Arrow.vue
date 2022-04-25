<template>
    <img :src="image" alt="">
</template>

<script>
    import image from '../../../public/img/icons/dopdownarrow.svg'
    export default {
        name: "Arrow",
        data:() => ({
            image
        }),
    }
</script>

<style scoped>
    .header-menu__item .dropdown-btn.active img {
        -webkit-transform: scale(-1);
        -ms-transform: scale(-1);
        transform: scale(-1);
    }
    .header-menu__item .dropdown-btn img {
        margin: 0 auto 0 0;
        -webkit-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
    }
</style>

