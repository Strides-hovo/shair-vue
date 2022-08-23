<template>

    <router-view v-if="this.$route.name === 'VideoGallery'" ></router-view>


    <div class="gallery" v-else>

        <div class="notfound__bg">
            <img src="@img/light-bg.png" alt="">
        </div>
        <div class="business__title title">
            <span></span>
            גלריה תמונות
            <span></span>
        </div>
        <div class="combobox mobile">
            <div class="combobox__active" :class="{active: ButtonMobileTab}" @click="ButtonMobileTab = !ButtonMobileTab">
                <img src="@img/icons/arrow-green.svg" alt="">
                <span>
                    גלריה סוכה לנצח
                </span>
            </div>
            <div class="combobox-list" :class="{active: ButtonMobileTab}">
                <div class="combobox-list__item" v-for="page in pages" :key="page.id">
                    <router-link :to="{ name: 'VideoGallery', params: { slug: page.translate.slug, id: page.id } }">
                        {{ page.translate.name }}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="business-body">
            <div class="products-body__content">
                <div class="business-body__content">
                    <div class="gallery-page__body">

                        <div class="gallery-page__body-item" v-for="page in pages" :key="page.id">

                            <router-link :to="{ name: 'VideoGallery', params: { slug: page.translate.slug, id: page.id } }">
                                <span class="gallery-page__body-img" v-if="page.galleries">
                                
                                

                                    <video v-lazy="page.galleries[0].video" :alt="page.galleries[0].video_alt"
                                        :title="page.galleries[0].video_title"  controls></video>
                                </span>
                                <span class="gallery-page__body-title">
                                    {{ page.translate.name }}
                                </span>
                            </router-link>

                        </div>



                    </div>
                </div>
            </div>

<!--            <photo-page-sidebar :pages="pages" />-->
        </div>
    </div>



</template>

<script>

import { mapActions, mapGetters } from 'vuex'
// import PhotoPageSidebar from '@frontend/components/sidebar/PhotoPageSidebar';


export default {

    name: 'Page-Video',
    // components: { PhotoPageSidebar},

    data: () => ({
        ButtonMobileTab: false
    }),
    methods: {
        ...mapActions(['PageVideo/set'])
    },

    computed: {
        ...mapGetters({
            language: 'lang/GET_SITE_LANGUAGE',
            PagesData: 'PageVideo/GetPagesByLang',
        }),

        pages() {
            return this.PagesData(this.language.id)
        },
    },

    async mounted() {
        if (this.pages.length === 0) {
            await this['PageVideo/set']()
        }
        

    }

}
</script>

