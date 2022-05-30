<template>
        <div class="cart-btns">
            <div class="cart-btns__item lang-add-new btn circle" @click="new_lang_modal = true">
                <img :src="addIcon.default" alt="">
            </div>
            <button :disabled="delete_btn" class="cart-btns__item btn" @click="deleteLanguage">удалить</button>
        </div>
        <div class="container-content">
            <div class="container-content__top">
                <div class="settings-btn">
                    <img :src="settingIcon.default" alt="">
                </div>
                <div class="select-top">
                    <select>
                        <option value="">ע</option>
                        <option value="">ע</option>
                        <option value="">ע</option>
                    </select>
                </div>
                <div class="container-content__top-title">
                    Языки
                </div>
            </div>
            <div class="container-content__body">

                <form class="lang-modal" :class="{active: lang_modal}" @submit.prevent="updateLanguage">
                    <div class="lang-modal__close" @click="lang_modal = false">
                        <img :src="closeIcon.default" alt="">
                    </div>
                    <div class="lang-modal__title">
                        עריכת שפה
                    </div>
                    <div class="lang-modal__content">
                        <div class="lang-modal__content-item">
                            <span>קיצור: </span>
                            <input type="text" placeholder="En" v-model="language.code">
                        </div>
                        <div class="lang-modal__content-item">
                            <span>שם שפה: </span>
                            <input type="text" placeholder="English" v-model="language.name">
                        </div>
                        <div class="lang-modal__content-item">
                            <span>שם שפה: </span>
                            <select name="ltr" v-model="language.dir">
                                <option value="ltr">LTR</option>
                                <option value="rtl">RTL</option>
                            </select>
                        </div>
                    </div>
                    <button class="lang-modal__btn btn">
                        שמור
                    </button>
                </form>

                <Modal :is-active="new_lang_modal" @closeModal="closeModal">
                    <form @submit.prevent="createLanguage">
                    <div class="lang-new__content-edit">
                        <div class="lang-new__content-item">
                            <span>קיצור: </span>
                            <input type="text" placeholder="En" v-model="newLanguage.code">
                        </div>
                        <div class="lang-new__content-item">
                            <span>שם שפה: </span>
                            <input type="text" placeholder="אנא הזינו שם שפה" v-model="newLanguage.name">
                        </div>
                        <div class="lang-new__content-item">
                            <span>שם שפה: </span>
                            <select name="ltr" v-model="newLanguage.dir">
                                <option value="ltr">LTR</option>
                                <option value="rtl">RTL</option>
                            </select>
                        </div>
                    </div>
                    <button class="lang-new__content-btn btn">
                        הוספה
                    </button>
                    </form>
                </Modal>

                <table class="orders">
                    <thead>

                    <tr>
                        <td>
                            <label>
                                <input type="checkbox"
                                       @change="selectAllLanguages"
                                       v-model="all_checked"
                                        :checked="all_checked">
                                <span class="fake"></span>
                            </label>
                        </td>
                        <td>язык</td>
                        <td>Код</td>
                        <td>Напровление</td>
                        <td>Показано на сайте</td>
                        <td>Действия</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="order-row unwatched" v-for="lang of languages" :key="language.id" >
                        <td>
                            <label>
                                <input type="checkbox"
                                       @change="selectLanguage"
                                       :value="lang.id"
                                       v-model="languageIds">
                                <span class="fake"></span>
                            </label>
                        </td>
                        <td>{{lang.name}}</td>
                        <td>{{ lang.code }}</td>
                        <td>{{ lang.dir }}</td>
                        <td>
                            <label>
                                <input type="checkbox"
                                       :checked="lang.status"
                                        v-model="lang.status"
                                       @change="updateStatus(lang.id,lang.status)"
                                        >
                                <span class="fake"></span>
                            </label>
                        </td>
                        <td>
                            <div>
                                <span class="lang-delete-btn"><img :src="deleteIcon.default" alt=""></span>
                                редактирование
                                <span class="lang-edit-btn" @click="checkLanguage(lang.id), lang_modal = !lang_modal;">
                                    <img :src="editIcon.default" alt="">
                                </span>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
    import Modal from '../components/UI/ModalLnaguage'

    import { createLanguage,deleteLanguage,updateLanguage,updateStatus } from '../http/language'

    export default {
        name: "Language",
        components: {Modal},
        data:() => ({
            editIcon: require('@img/icons/edit-ico.svg'),
            deleteIcon: require('@img/icons/delete-ico.svg'),
            closeIcon: require('@img/icons/close.svg'),
            settingIcon: require('@img/icons/settings.svg'),
            addIcon: require('@img/icons/add-icon.svg'),

            lang_modal: false,
            new_lang_modal: false,
            delete_btn: true,
            all_checked: false,

            newLanguage: {
                dir: 'ltr',
                code: '',
                name: ''
            },
            languages: [],
            languageIds: [],
            language: {},
        }),
        methods:{

            createLanguage,
            deleteLanguage,
            updateLanguage,
            updateStatus,
            closeModal(status){
                this.new_lang_modal = !status
            },
            selectLanguage(){
                this.delete_btn = this.languageIds.length < 1;
            },
            selectAllLanguages(){
                if (this.all_checked){
                    this.languageIds = this.languages.map(lang =>{
                        return lang.id
                    });
                }
                else{
                    this.languageIds = [];
                }
                this.selectLanguage()
            },
            checkLanguage(id){
                let language = this.languages.find(lang => {
                    return lang.id === id;
                });
                this.language = Object.assign({}, language);
                //this.lang_modal = !this.lang_modal;
            },

        },
        mounted() {
            axios.get('/api/admin/language').then(response => {
                this.languages = response.data.data || [];
            });

            /*console.log(helper )*/
        }
    }
</script>

<style scoped>

    .cart-btns__item {
        margin: 0 0 0 10px;
    }
    .btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 25px;
        background: #82ad00;
        border: 1px solid #fff;
        filter: drop-shadow(0 2px 5px rgba(0, 0, 0, .35));
        border-radius: 40px;
        font-size: 16px;
        line-height: 22px;
        color: #fff;
    }
    .lang-modal {
        position: fixed;
        z-index: 10;
        height: 100vh;
        left: 0;
        background: #FBFBFB;
        padding: 5px 20px;
        width: 350px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
        -webkit-transform: translate(-100%, 0);
        -ms-transform: translate(-100%, 0);
        transform: translate(-100%, 0);
        pointer-events: none;
        visibility: hidden;
        border-right: 1px solid #BFBFBF;
    }

    .lang-modal.active {
        -webkit-transform: translate(0);
        -ms-transform: translate(0);
        transform: translate(0);
        pointer-events: all;
        visibility: visible;
    }

    .lang-modal__close {
        cursor: pointer;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .lang-modal__title {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #286B9E;
    }

    .lang-modal__content {
        margin: 13px 0 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }

    .lang-modal__content-item {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(50% - 20px);
        flex: 0 0 calc(50% - 20px);
        margin: 0 0 0 40px;
    }

    .lang-modal__content-item:first-child {
        margin: 0;
    }

    .lang-new__content-edit {
        margin: auto 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        padding: 0 20px;
    }

    .lang-new__content-item {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(32% - 20px);
        flex: 0 0 calc(32% - 20px);
        margin: 0 0 0 40px;
    }

    .lang-new__content-item:first-child {
        margin: 0;
    }
    .lang-new__content-btn {
        margin: 0 auto 20px 20px;
    }

    .lang-modal__btn {
        margin: auto 0 100px;
        -ms-flex-item-align: end;
        align-self: flex-end;
    }
    .lang-modal__content-item span {
        font-weight: 700;
        font-size: 14px;
        line-height: 25px;
        color: #2B2B2B;
    }

    .lang-modal__content-item input {
        margin: 2px 0 0 0;
        background-color: transparent;
        padding: 0 0 7px;
        font-size: 14px;
        line-height: 25px;
        color: #2B2B2B;
        border-bottom: 1px solid #B7B7B7;
        width: 100%;
    }


    .lang-new__content-item span {
        display: block;
        font-size: 18px;
        line-height: 25px;
        color: #286B9E;
    }

    .lang-new__content-item input {
        margin: 2px 0 0;
        color: #286B9E;
        width: 100%;
        font-size: 16px;
        line-height: 25px;
        font-size: 16px;
        line-height: 25px;
        padding: 0 0 8px;
        background-color: transparent;
        border-bottom: 1px solid #87A8C9;
    }

    .lang-new__content-item input::-webkit-input-placeholder {
        color: #8CB3D1;
    }

    .lang-new__content-item input::-moz-placeholder {
        color: #8CB3D1;
    }

    .lang-new__content-item input:-ms-input-placeholder {
        color: #8CB3D1;
    }

    .lang-new__content-item input::-ms-input-placeholder {
        color: #8CB3D1;
    }

    .lang-new__content-item input::placeholder {
        color: #8CB3D1;
    }
</style>