<template>

    <div class="content">
      <div class="container" >

        <Sidebar />

        <router-view />

      </div>
    </div>


</template>

<script>

// import('../assets/css/backend.css')
// import Sidebar from "@backend/components/Sidebar.vue";
    import Sidebar from "../backend/components/Sidebar.vue";

export default {
        name: 'backend',
        components: { Sidebar },
    }
</script>


<style >
  @import '../assets/css/backend.scss';
  @import '../assets/css/backend-last.scss';
</style>