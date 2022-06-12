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
    data: () => ({
        options: SidebarOptions
    }),
    components: { SidebarMenuItem },
    methods: {
        toggleButton(item) {
            this.options.map(i => {
                i === item ? i.isActive = !i.isActive : i.isActive = false;
                return i;
            });
        }
    },
    mounted() {
        let active = this.options.map(item => {
            if (item.url === this.$route.path) {
                return item
            }
            else {
                if( item.hasItem.length > 0 ){
                    let a = item.hasItem.find(i => i.url == this.$route.path)
                    //console.log(a)
                    return a
                }
            }
        })
        //console.log(active, this.$router.currentRoute.value,this.$route.fullPath )
    }
}
</script>

