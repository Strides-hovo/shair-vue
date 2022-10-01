<template>

  <div class="content">
    
        <the-header />
        
        <router-view @footerContent="footerContent" />
  </div>

  <the-footer :content="footer" />

</template>

<script>
import TheHeader from "@frontend/components/header/TheHeader";
import TheFooter from "@frontend/components/footer/TheFooter.vue";

export default {
  name: 'frontend',
  components: { TheHeader,TheFooter },
  data() {
    return {
      footer: {},

    }
  },
  methods:{
    footerContent(footer){
      this.footer = footer
    }
  }
}
</script>

<style >
@import '../assets/css/style.css';
/* @import '../assets/css/frontend.scss';*/
</style>