<template>
    <img src="@img/icons/dopdownarrow.svg" alt="">
</template>

<script>

    export default {
        name: "Arrow",
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

