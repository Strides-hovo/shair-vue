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

          <!--     menus     -->

          <li>
            <router-link class="header-menu__btns-item" :to="{ name: 'Home' }">
              מחירון
            </router-link>
          </li>
          <li>
            <router-link class="header-menu__btns-item" :to="{ name: 'About',params: {slug: 'test'} }">
              About
            </router-link>
          </li>
          <li>
            <router-link class="header-menu__btns-item" :to="{ name: 'Articles',params: {slug: 'test'} }">
              Articles
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
                  <router-link class="header-menu__btns-item" :to="{ name: 'PhotoGalleries' }">
                    PhotoGallery
                  </router-link>
                  <router-link class="header-menu__btns-item" to="/page-video">
                    Video Gallery
                  </router-link>

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

import {mapGetters,mapActions} from "vuex";
import {generate_routes} from '@/helpers'

export default {
  name: "BaseMenu",

  props: {
    isActive: false,
    subMenu: false
  },
  computed: {
    ...mapGetters({
      language_id: 'lang/getLanguageId',
      PagesData: 'page/GET_ROUTES',
    }),


    /*pages() {
      const pages = this.PagesData(this.language_id)
      return pages
    },

    menus(){
      generate_routes(this.pages)
      const routes = this.$router.getRoutes()
          .filter(r => !r.path.includes('admin') && !r.path.includes('*'))
          .map(r => ({slug: r.path,sub_menu: r.meta.sub_menu,name: r.meta.name  }) )
      return routes
    }*/
  },
  methods: {
    ...mapActions(['page/SET_PAGES']),
    close() {
      this.$emit('closeMenu')
    }
  },
  beforeMount() {
    // if (!this.pages || this.pages.length === 0) {
    //   this['page/SET_PAGES'](this.language_id)
    // }


  },
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