<template>
  <div class="header-menu" :class="{ active: isActive }">
    <div class="header-menu__bg" @click="close()"></div>
    <div class="header-menu__body">
      <div class="header-menu__top">
        <div class="header-menu__top-close" @click="close()">
          <img src="@img/header/closeBtn.svg" alt="">
        </div>
        <span>
          תפריט
        </span>
      </div>

      <right-sidebar-menu/>

    </div>
  </div>
</template>

<script>


import RightSidebarMenu from "./RightSidebarMenu";

export default {
  name: "TheRightSidebar",
  components: { RightSidebarMenu },
  props: {
    isActive: false,
  },
  methods:{
    close() {
      this.$emit('closeMenu')
    }
  }


}
</script>

