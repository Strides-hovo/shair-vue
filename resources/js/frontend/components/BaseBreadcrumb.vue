<template>
    <div class="page__top">
        <div class="page__top-title" v-if="prev.href">
            <router-link :to="prev.href">
                <span>
                    {{ prev.name }}
                </span>
            </router-link>

            &gt; <span>
                {{ current }}
            </span>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseBreadcrumb',
    data: () => ({
        prev: {
            href: ''
        },
        current: ''
    }),


    watch: {
        '$route'(to, from) {
            this.prev = from
            this.current = to.name
        
        }
    }
}
</script>

