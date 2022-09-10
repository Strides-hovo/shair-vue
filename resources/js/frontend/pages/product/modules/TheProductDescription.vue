<template>
    <div class="pricelist-modal__desc-content">
        <p>{{ product.translate.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'TheProductDescription',
    props: {
        product: {}
    },
    computed: {},
    methods: {},
    mounted() { }
}
</script>

