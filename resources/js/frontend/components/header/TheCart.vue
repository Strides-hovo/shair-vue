<template>

    <router-link :to="{name: 'Cart'}" class="header-body__btns-item circle cart">
        <span>{{ quantity }}</span>
        <img src="@img/header/cart.svg" alt="">
    </router-link>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({ CART: 'cart/GET_CART' }),
        quantity(){
           return this.CART.reduce( (i,product) => i + product.quantity,0 )
        }
    }
}
</script>

