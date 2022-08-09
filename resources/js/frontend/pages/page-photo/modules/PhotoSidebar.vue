<template>
    <div class="products-slidebar">
        <ul class="products-slidebar__content">
            <li v-for="page in pages" :key="page.id" :class="{active: page.translate.slug === this.$route.params.slug }">
                <router-link :to="{ name: 'FrontPhoto', params: { slug: page.translate.slug, id: page.id } }">
                    {{ page.translate.name }}
                </router-link>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'PhotoSidebar',
    props: ['pages']
}
</script>

