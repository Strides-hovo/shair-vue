

<template>
    <!--<div class="container">-->

        <Sidebar />
        <router-view></router-view>

    <!--</div>-->
</template>

<script>

    // import Dashboard from "./components/Dashboard";
    import Sidebar from "./components/Sidebar";
    export default {
        name: 'App',
        components: {Sidebar},
        // components: {Dashboard}
    }
</script>

