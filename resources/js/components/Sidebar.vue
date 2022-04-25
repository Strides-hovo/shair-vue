<template>
    <header class="header">
        <div class="header-profile">
            <div class="header-profile__ico">
                <img src="../../../public/img/profile-img.png" >
            </div>
            <div class="header-profile__name">
                <span></span>
                גיא איתן
                <div class="header-profile__dropdown">
                    <a href="" class="header-profile__dropdown-item">
                        Выйти
                        <img src="../../../public/img/icons/exit.svg" alt="">
                    </a>
                    <a href="" class="header-profile__dropdown-item">
                        изменить пароль
                        <img src="../../../public/img/icons/changepas.svg" alt="">
                    </a>
                </div>
            </div>
        </div>


        <div class="header-menu one">
            <SidebarMenu ></SidebarMenu>
        </div>
    </header>


</template>

<script>
    import SidebarMenu from "./SidebarMenu";
    import SidebarMenuItem from "./SidebarMenuItem";


    export default {
        name: "Sidebar",
        components: {SidebarMenuItem, SidebarMenu},
        data: () => ({

        }),
        computed: {
            getOptions(){
                console.log(this.$store)
            }
        },
    }
</script>

<style scoped>

</style>