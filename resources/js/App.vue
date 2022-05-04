
<template>
        <Sidebar />
        <router-view></router-view>
</template>

<script>

    import Sidebar from "./components/Sidebar";
    export default {
        name: 'App',
        components: {Sidebar},
    }
</script>

