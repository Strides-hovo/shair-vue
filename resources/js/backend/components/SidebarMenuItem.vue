<template>
    <div class="header-menu__item dropdown" v-if="item.hasItem.length > 0" @click="toggleButton(item)">
        <div class="dropdown-btn" :class="{'active': item.isActive} ">
            <Arrow />
           {{ item.text }}
        </div>
        <slide-up-down v-model="item.isActive" :duration="250" >
        <div class="dropdown-content active"  >
                <router-link v-for="i in item.hasItem" :key="i.text" :to="i.url"
                             class="dropdown-content__item">
                    {{ i.text }}
                </router-link>
        </div>
    </slide-up-down>
    </div>
    <router-link
            v-else
            :to="item.url"
            class="header-menu__item">
        {{ item.text}}
    </router-link>
</template>

<script>

    import Arrow from "./Arrow";
    export default {
        name: "SidebarMenuItem",
      emits:['toggleButton'],
        components: {Arrow},
        props: {
            item: Object,
        },

        methods:{
            toggleButton(item){
                this.$emit('toggleButton',item);
            }
        }
    }
</script>

