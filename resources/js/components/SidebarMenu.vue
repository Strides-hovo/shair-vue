<template>
    <ul class="list-group">
        <SidebarMenuItem v-for="item in options" :key="item.title" :item="item" @toggleButton="toggleButton" />
    </ul>
</template>

<script>
    import SidebarMenuItem from "./SidebarMenuItem";
    import SidebarOptions from '@/store/modules/Sidebar-options'

    export default {
        name: "SidebarMenu",
        props: {

        },
        data: () => ({
            options: SidebarOptions
        }),
        computed: {
            getUrls(){
                /*const b = Array.from(this.options).map(option => {
                    console.log(option)
                    return option.url
                });

                console.log( b );*/
                //return this.$router.getRoutes()
            }
        },
        components: {SidebarMenuItem},
        methods: {
            toggleButton(item){
                this.options.map(i => {
                    i === item ? i.isActive = !i.isActive : i.isActive = false;
                    return i;
                });
            }
        }
    }
</script>

