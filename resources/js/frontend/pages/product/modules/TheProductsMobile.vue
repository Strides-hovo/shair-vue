<template>
    <div class="combobox mobile">
        <div class="combobox__active"
             :class="{active: ButtonMobileTab}"
             @click="ButtonMobileTab = !ButtonMobileTab"
        >
            <base-icon icon='arrow-green' width="18" height="10" />
            <span>
                מסגרת סוכה מברזל
            </span>
        </div>
        <div class="combobox-list" :class="{active: ButtonMobileTab}">
            <div class="combobox-list__item"
                 v-for="product in products"
                 :key="product.id"
            >
               <router-link
                   class="nav-link"
                   v-if="product.translate.slug"
                   :to="{name: 'Product', params: {id: product.id, slug: product.translate.slug } }" >
                 {{ product.translate.name }}
               </router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TheProductsMobile',
    props: {
        products: {
          default: []
        }
    },
  data:() => ({
      ButtonMobileTab: false,
  })
}
</script>

<style scoped>
.nav-link {
  color: #fff;
  text-decoration: none;
}
</style>