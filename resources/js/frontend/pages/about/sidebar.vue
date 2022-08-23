<template>
    <div class="products-slidebar">
      <ul class="products-slidebar__content">
        <li  v-for="(page,i) in pages" :key="i" :class="{active: i === 0}">
          <a href="#" >{{ page }}</a>
        </li>

      </ul>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
      props: {
          pages: Array
      },

    }
</script>

<style lang="scss" scoped>

</style>