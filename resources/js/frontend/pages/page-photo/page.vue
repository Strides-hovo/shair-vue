<template>

    <div class="gallery">

        <div class="notfound__bg">
            <img src="@img/light-bg.png">
        </div>
        <div class="business__title title">
            <span></span>
            <h1>{{ page.translate.name }}</h1>
            <span></span>
        </div>
        <div class="combobox mobile">
            <div class="combobox__active" :class="{ active: ButtonMobileTab }"
                @click="ButtonMobileTab = !ButtonMobileTab">
                <img src="@img/icons/arrow-green.svg">
                <span>
                    גלריה סוכה לנצח
                </span>
            </div>
            <div class="combobox-list" :class="{ active: ButtonMobileTab }">
                <div class="combobox-list__item" v-for="page in pages" :key="page.id">
                    <router-link :to="{ name: 'FrontPhoto', params: { slug: page.translate.slug, id: page.id } }"
                        @click="ButtonMobileTab = false">
                        {{ page.translate.name }}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="business-body">
            <div class="products-body__content">
                <div class="business-body__content">
                    <div class="gallery-page__body">

                        <base-slide-show :images="images" />

                    </div>
                </div>
            </div>

            <photo-sidebar :pages="pages" />
        </div>
    </div>

    <base-meta-info :metainfo="setMetaInfo" />

</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import PhotoSidebar from './modules/PhotoSidebar.vue';
import BaseSlideShow from '@frontend/components/BaseSlideShow'

export default {

    name: 'PhotoGallery',
    components: { PhotoSidebar, BaseSlideShow },
    props: {
        slug: String,
        id: String
    },

    data: () => ({
        ButtonMobileTab: false,
    }),
    methods: {
        ...mapActions(['PhotoPage/set']),
    },
    watch: {
        'page.translate.slug'(slug) {
            this.$router.replace({ name: 'FrontPhoto', params: { id: this.id, slug } })
        },

    },
    computed: {
        setMetaInfo() {
            return {
                title: this.page.translate.meta_title,
                meta_keywords: this.page.translate.meta_keywords,
                meta_description: this.page.translate.meta_description,
            }
        },

        ...mapGetters({
            language: 'lang/GET_SITE_LANGUAGE',
            PagesData: 'PhotoPage/GetPagesByLnag',
            PageData: 'PhotoPage/GetPhotoPage',
        }),

        pages() {
            return this.PagesData(this.language.id)
        },
        page() {
            return this.PageData(this.id, this.language.id)
        },


        images() {
            return this.page.galleries.map(g => {
                return { src: g.image, title: g.image_title }
            }) || []
        }

    },

    async mounted() {
        if (this.pages.length === 0) {
            await this['PhotoPage/set']()
        }
        // console.log( document.head.querySelector('meta[name="description"]').content = 'ppp'   );
    }

}
</script>

