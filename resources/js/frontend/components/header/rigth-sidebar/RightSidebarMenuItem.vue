<template>

  <li v-if="menu.children">
    <div class="header-menu__btns-item menu-dropdown-btn" v-if="menu.slug">
              <span class="header-menu__btn" @click="subMenu = !subMenu">
                <img src="@img/icons/menu-arrow.svg" alt="">
                {{  $trans._lang(menu.name) }}
              </span>
      <Transition name="slide-up">
        <div class="menu-dropdown-content" v-show="subMenu">
        <div v-for="ch in menu.children" :key="ch.name" >
          <router-link class="header-menu__btns-item" v-if="ch.slug"
                       :to="{ name: ch.name, params: {slug: ch.slug } }"
          >

            {{  $trans._lang(ch.name) }}
          </router-link>
        </div>


        </div>
      </Transition>
    </div>
  </li>



  <li v-else>
    <router-link class="header-menu__btns-item" v-if="menu.slug" :to="{ name: menu.name , params: { slug: menu.slug } }">
      {{  $trans._lang(menu.name) }}
    </router-link>
  </li>

</template>

<script>
export default {
  name: "RightSidebarMenu",
  props:{
    menu: {}
  },
  data() {
    return {
      subMenu: false
    }
  },
}
</script>


<style>
.menu-dropdown-content {
  transition: margin .2s cubic-bezier(0.4, 0, 1, 1);
  overflow: hidden;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all .2s linear;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  margin-top: -20px;
}
</style>
