<template>
  <div class="header-menu" :class="{ active: isActive }">
    <div class="header-menu__bg"  @click="close()"></div>
    <div class="header-menu__body">
      <div class="header-menu__top">
        <div class="header-menu__top-close" @click="close()">
          <img src="@img/header/closeBtn.svg" alt="">
        </div>
        <span>
          תפריט
        </span>
      </div>
      <nav class="header-menu__btns one">
        <ul>
          <li>
            <router-link class="header-menu__btns-item" :to="{ name: 'FrontHome' }">
              מחירון
            </router-link>
          </li>
          <li>
            <div class="header-menu__btns-item menu-dropdown-btn">
              <span class="header-menu__btn" @click="subMenu = !subMenu">
                <img src="@img/icons/menu-arrow.svg" alt="">
                השכרת סוכות
              </span>
              <Transition name="slide-up">
                <div class="menu-dropdown-content" v-show="subMenu">
                  <router-link class="header-menu__btns-item" :to="{ name: 'FrontPagePhoto' }">
                    PhotoGallery
                  </router-link>
                  <!-- <router-link class="header-menu__btns-item" to="/page-videos">
                    Video Gallery
                  </router-link> -->

                </div>
              </Transition>

            </div>
          </li>

          <li>
            <a href="" class="header-menu__btns-item">
              מחירון
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: "BaseMenu",

  props: {
    isActive: false,
    subMenu: false
  },
  methods: {
    close() {
      this.$emit('closeMenu')
    }
  }
}
</script>

<style >
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