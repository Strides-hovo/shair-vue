<template>


        <router-view></router-view>

</template>

<script>
    import Sidebar from "./Sidebar";
    import Language from "./Language";
    export default {
        name: "Dashboard",
        components: {Language, Sidebar}
    }
</script>

