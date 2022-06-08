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

<style >
.header-menu__item .dropdown-content {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: 100%
}

.header-menu__item .dropdown-content.active {
  display: block
}

.header-menu__item .dropdown-content__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 19px;
  color: #9db2c7;
  border-right: 2px solid transparent;
  padding: 0 10px 0 0;
  margin: 10px 0 0
}

.header-menu__item .dropdown-content__item.active {
  border-right: 2px solid #03a9f3;
  color: #03a9f3
}


.header-menu__item .dropdown-content{
  display: block;
}
</style>