<template>
<div class="cart-btns">
    <div class="cart-btns__item branches-new-btn btn circle">
        <img :src="addIcon.default" alt="">
    </div>
</div>
<div class="container-content">
    <div class="container-content__top">
        <div class="container-content__top-title">
            עמודי מדיה
            <span>
               Фотогалереи 2
            </span>
        </div>
    </div>
    <div class="container-content__body">
        <table class="orders cupons shipping-cities branches gallery-img">
            <thead>
                <tr>
                    <td>
                        שם צורת משלוח
                    </td>
                    <td>
                        סדר
                    </td>
                    <td>
                        פעולות
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr class="order-row">
                    <td>
                        גלריה סוכה לנצח
                    </td>
                    <td>
                        <label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </label>
                    </td>
                    <td>
                        <div>
                            <span class="articles-delete-btn"><img :src="deleteIcon.default" alt=""></span>
                            <a href="#" class="branches-edit-btn"><img :src="editIcon.default" alt="">עריכה</a>
                            <span><img :src="showIcon.default" alt="">להציג</span>
                        </div>
                    </td>
                </tr>
               
            </tbody>
        </table>
    </div>
</div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex'

export default {
    name: 'PhotoGallery',

    data: () => ({
        addIcon: require('@img/icons/add-icon.svg'),
        deleteIcon: require('@img/icons/delete-ico.svg'),
        editIcon: require('@img/icons/edit-ico.svg'),
        showIcon: require('@img/icons/show.svg'),

    }),
    computed:{
        ...mapGetters({languages: 'language/getLanguages'} )
    },
    methods:{
        ...mapActions(['language/allLanguages'])
    },
    mounted(){
        this['language/allLanguages']();
    }
}
</script>

<style>

</style>
