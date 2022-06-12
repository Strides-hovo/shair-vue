<template>
    <div class="cart-btns">
        <div class="cart-btns__item branches-new-btn btn circle">
            <img :src="require('@img/icons/add-icon.svg').default" alt="">
        </div>
    </div>


    <div class="container-content">
        <div class="container-content__top">
            <div class="container-content__top-row">

                <div class="select-top">
                    <select @change="changeLanguage" v-model="language">
                        <option :value="lang.id" v-for="lang in actualLanguages" :key="lang.id">{{ lang.code }}
                        </option>
                    </select>
                </div>
                <div class="container-content__top-title">
                    עמודי מדיה
                    <span>
                        Фотогалереи 2
                    </span>
                </div>
            </div>

        </div>
        <div class="container-content__body">
            <table class="orders cupons shipping-cities branches gallery-img">
                <thead>
                    <tr>
                        <td>
                            Название
                        </td>
                        <td>
                            сортировка
                        </td>
                        <td>
                            Действия
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="order-row" v-for="gallery in pageFilter" :key="gallery.id">
                        <td>
                            {{ gallery.title }}
                        </td>
                        <td>
                            <label>
                                <select v-model="gallery.sorting" :value="gallery.sorting"
                                    @change="changeSorting($event.target.value, gallery.id)">
                                    <option v-for="item in pageFilter.length" :value="item">{{ item }}</option>
                                </select>
                            </label>
                        </td>
                        <td>
                            <div>
                                <span class="articles-delete-btn"><img
                                        :src="require('@img/icons/delete-ico.svg').default" alt=""></span>
                                <router-link :to="{ name: 'PhotoGallery', params: { id: gallery.id } }"
                                    :class="'branches-edit-btn'">
                                    <img :src="require('@img/icons/edit-ico.svg').default" alt="">עריכה
                                </router-link>

                                <span><img :src="gallery.status === 1 ? showIcon : unshow">להציג</span>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import apiRoutes from '@/api-routes';
// import vuexMixin from '@mixin/vuex'
// import pageFilter from '@/filters/pagePhotoGalleries'
import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'PagePhotoGalleries',

    //mixins: [vuexMixin],

    data: () => ({
        showIcon: require('@img/icons/show.svg').default,
        unshow: require('@img/icons/close.svg').default,
        language: 1,
        PagePhotoGalleries: [],
        

    }),


    computed: {
        ...mapGetters({
            languages: 'language/getLanguages',
            actualLanguages: 'language/getActualLanguages',
           
        }),
      

        defaultLanguage() {
            return this.actualLanguages[this.language - 1]
        },
        pageFilter() {
            return this.PagePhotoGalleries.map(item => {
                if (typeof this.defaultLanguage !== undefined) {
                    if (item.language_id === this.defaultLanguage.id) {
                        return item.photo_galleries
                    }
                }
            }).filter(Boolean)[0]
        },
        
    },











    methods: {

        ...mapActions(['language/allLanguages']),

        changeSorting(sorting, id) {
            axios.put(apiRoutes('photoGallery.update', id), { sorting: sorting })
        },
        changeLanguage(evt) {

            let a = this.actualLanguages.find(lang => lang.id == evt.target.value);
            
            console.log( this.defaultLanguage,a  );
        }
    },

    mounted() {
        axios.get(apiRoutes('pagePhotoGallery.index')).then(response => this.PagePhotoGalleries = response.data.data)
        this['language/allLanguages']();
        
        //this.$store.getters.getLanguageById(2)
    }
}
</script>