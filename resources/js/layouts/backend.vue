<template>

    <div class="content">
      <div class="container" >

        <Sidebar />

        <router-view />

      </div>
    </div>


</template>

<script>


// import Sidebar from "@backend/components/Sidebar.vue";
    import Sidebar from "../backend/components/Sidebar.vue";

export default {
        name: 'backend',
        components: { Sidebar },
    }
</script>


<style >
  @import '../assets/css/backend.css';
</style>