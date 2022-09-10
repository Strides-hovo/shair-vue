<template>
  <nav class="header-menu__btns one">
    <ul>
      <right-sidebar-menu-item
          v-for="menu in menus"
          :key="menu.name"
          :menu="menu"
      />
    </ul>
  </nav>

</template>

<script>

import RightSidebarMenuItem from "./RightSidebarMenuItem";

import {mapActions, mapGetters} from "vuex";

export default {
  name: "RightSidebarMenu",
  components: {RightSidebarMenuItem},
  computed: {
    ...mapGetters({
      language_id: 'lang/getLanguageId',
      MenuData: 'menu/GET_MENUS',
    }),

    menus() {
      return this.MenuData(this.language_id)
    }
  },
  methods: {
    ...mapActions(['menu/SET_MENUS']),

  },
  async mounted() {
    if (!this.menus || this.menus.length === 0) {
      await this['menu/SET_MENUS']()
    }
  },

}
</script>

<style >

.header-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  visibility: hidden;
}

.header-menu.active {
  pointer-events: all;
  visibility: visible;
}

.header-menu.active .header-menu__bg {
  opacity: 1;
}

.header-menu.active .header-menu__body {
  -webkit-transform: translate(0);
  -ms-transform: translate(0);
  transform: translate(0);
}

.header-menu__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  opacity: 0;
  -webkit-transition: all .4s ease;
  -o-transition: all .4s ease;
  transition: all .4s ease;
}

.header-menu__body {
  position: absolute;
  background: #FFFFFF;
  padding: 30px 0;
  right: 0;
  width: 355px;
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-transform: translate(100%, 0);
  -ms-transform: translate(100%, 0);
  transform: translate(100%, 0);
  -webkit-transition: all .4s ease;
  -o-transition: all .4s ease;
  transition: all .4s ease;
  background-image: url(/img/header/menu-bg-bottom.png);
  background-repeat: no-repeat;
  background-position: left -20px bottom 10px;
}

.header-menu__body::-webkit-scrollbar {
  width: 5px;
  height: 100%;
}

.header-menu__body::-webkit-scrollbar-thumb {
  background-color: #346600;
}

.header-menu__top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 18px 0 24px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-menu__top span {
  position: relative;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: right;
  color: #346600;
}

.header-menu__top span::after {
  content: url(/img/header/menu-bg-top.png);
  z-index: -1;
  position: absolute;
  display: block;
  top: 6px;
  left: -45px;
}

.header-menu__top-close {
  cursor: pointer;
}

.header-menu__btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 52px 0 0 0;
  position: relative;
}

.header-menu__btns::after {
  content: url(/img/header/menu-bg-bottom.png);
  z-index: -1;
  position: absolute;
  display: block;
  pointer-events: none;
  bottom: -50px;
  left: -20px;
  display: none;
}

.header-menu__btns li {
  margin: 42px 0 0 0;
}

.header-menu__btns li:first-child {
  margin: 0;
}

.header-menu__btns-item {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 18px 10px 24px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-align: right;
  color: #53A200;
  -webkit-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-menu__btns-item.menu-dropdown-btn {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.header-menu__btns-item.menu-dropdown-btn:hover {
  background: transparent;
  color: #53A200;
}

.header-menu__btns-item.menu-dropdown-btn span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-menu__btns-item.menu-dropdown-btn .header-menu__btns-item {
  padding: 10px 0 10px;
}

.header-menu__btns-item.menu-dropdown-btn.active:hover {
  background: transparent;
  color: #53A200;
}



.header-menu__btns-item .menu-dropdown-content .header-menu__btns-item:hover {
  background: transparent;
  color: #53A200;
}



.header-menu__btns-item img {
  margin: 0 4px 0 0;
}

.header-menu__btns-item:hover {
  background: #53A200;
  color: #FFFFFF;
}


.header {
  padding: 0 15px !important;
}

.header-menu__body {
  width: 305px;
}

.header-menu__top {
  padding: 0 22px;
}

.header-menu__top span {
  font-size: 24px;
}

.header-menu__top span::after {
  content: '';
  width: 90px;
  background-image: url(/img/header/menu-bg-top.png);
  height: 60px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  left: -30px;
}

.header-menu__btns {
  margin: 40px 0 0 0;
}

.header-menu__btns::after {
  content: '';
  background-image: url(/img/header/menu-bg-bottom.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 330px;
  height: 235px;
}



</style>