<template>
    <div class="header-menu__item dropdown" v-if="item.hasItem.length > 0" @click="toggleButton(item)">
        <div class="dropdown-btn" :class="{'active': item.isActive} ">
            <Arrow />
           {{ item.title }}
        </div>
        <slide-up-down v-model="item.isActive" :duration="250">
        <div class="dropdown-content" >
                <router-link v-for="i in item.hasItem" :key="i.title" :to="i.url"
                             class="dropdown-content__item">
                    {{ i.title }}
                </router-link>
        </div>
    </slide-up-down>
    </div>
    <router-link
            v-else
            :to="item.url"
            class="header-menu__item">
        {{ item.title}}
    </router-link>
</template>

<script>

    import Arrow from "./Arrow";
    export default {
        name: "SidebarMenuItem",
        components: {Arrow},
        props: {
            item: Object,
        },
        data:() => ({

        }),
        methods:{
            toggleButton(item){
                this.$emit('toggleButton',item);
            }
        }
    }
</script>

