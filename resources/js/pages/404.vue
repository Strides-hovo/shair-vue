<template>
    <div>404 page not found</div>
</template>

<script>
    import apiRoutes from "../api-routes";

    export default {
        name: "404",
      mounted() {
          console.log(apiRoutes('language.index'))
      }
    }
</script>

<style scoped>

</style>