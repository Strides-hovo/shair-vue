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
                    <router-link :to="{ name: 'VideoGallery', params: { slug: page.translate.slug, id: page.id } }"
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

                    <base-video-player  :source="video.src" v-for="video in videos" :key="video.id" /> 
                        <!-- <base-slide-show :images="images" /> -->

                    </div>
                </div>
            </div>
            <spinner :loading="loading" />
<!--            <base-photo-page-sidebar :pages="pages" name="VideoGallery" />-->
        </div>
    </div>

    <base-meta-info :metainfo="setMetaInfo" />

</template>

<script>

import { mapActions, mapGetters } from 'vuex'
// import PhotoPageSidebar from '@frontend/components/sidebar/PhotoPageSidebar';
import BaseSlideShow from '@frontend/components/BaseSlideShow'

import Spinner from '@frontend/components/Spinner'
import { defineAsyncComponent } from 'vue'

const BaseVideoPlayer = defineAsyncComponent(() =>
  import('@frontend/components/BaseVideoPlayer.vue')
)

export default {

    name: 'VideoGallery',
    components: {  BaseSlideShow, BaseVideoPlayer, Spinner },
    props: {
        slug: String,
        id: String
    },

    data: () => ({
        ButtonMobileTab: false,
        loading: false
    }),
    methods: {
        ...mapActions(['PageVideo/set']),
    },
    watch: {
        'page.translate.slug'(slug) {
            this.$router.replace({ name: 'VideoGallery', params: { id: this.id, slug } })
            
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
            PagesData: 'PageVideo/GetPagesByLang',
            PageData: 'PageVideo/GetVideoPage',
        }),

        pages() {
            return this.PagesData(this.language.id)
        },
        page() {
            return this.PageData(this.id, this.language.id)
        },


        videos() {
            return this.page.galleries.map(g => {
                return { src: g.video, title: g.video_title }
            }) || []
        }

    },

    async mounted() {
        if (this.pages.length === 0) {
            await this['PageVideo/set']()
        }
        // console.log( document.head.querySelector('meta[name="description"]').content = 'ppp'   );
    }

}
</script>

