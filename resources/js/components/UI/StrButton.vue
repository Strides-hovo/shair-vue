<template>
  <button class="cart-btns__item btn">
    <slot/>
  </button>

</template>

<script>
export default {
  name: "StrButton"
}
</script>

<style scoped>
.cart-btns__item{
  position: absolute;
  bottom: 50px;
  right: 50px;
}

</style>
