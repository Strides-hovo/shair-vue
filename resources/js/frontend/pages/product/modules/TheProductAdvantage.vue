<template>
    <ul class="pricelist-modal__desc-check">
        <li
            v-for="(advantage,i) in advantages"
            :key="i"
        >
          {{ advantage}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TheProductAdvantage',
    props: {
        product: {}
    },
    computed: {
      advantages(){
        return this.product.translate.advantage?.split('\n')
      }
    },
    methods: {

    },
    mounted() { }
}
</script>

<style lang="scss" scoped>
</style>