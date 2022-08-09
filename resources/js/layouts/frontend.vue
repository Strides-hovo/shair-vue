<template>

  <div class="content">
    
        <the-header />
        
        <router-view />
  </div>


  <the-footer />



</template>

<script>
import TheHeader from "@frontend/components/header/TheHeader";
import TheFooter from "@frontend/components/footer/TheFooter.vue";


export default {
  name: 'frontend',
  components: { TheHeader,TheFooter }
}
</script>

<style >
@import '../assets/css/style.css';
/* @import '../assets/css/frontend.css'; */
</style>