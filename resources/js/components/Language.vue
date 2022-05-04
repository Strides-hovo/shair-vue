<template>
        <div class="cart-btns">
            <div class="cart-btns__item lang-add-new btn circle" @click="new_lang_modal = true">
                <img src="../../../public/img/icons/add-icon.svg" alt="">
            </div>
            <div class="cart-btns__item btn">удалить</div>
        </div>
        <div class="container-content">
            <div class="container-content__top">
                <div class="settings-btn">
                    <img src="../../../public/img/icons/settings.svg" alt="">
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
                <div class="lang-modal" :class="{active: lang_modal}" >
                    <div class="lang-modal__close" @click="lang_modal = false">
                        <img src="../../../public/img/icons/close.svg" alt="">
                    </div>
                    <div class="lang-modal__title">
                        עריכת שפה
                    </div>
                    <div class="lang-modal__content">
                        <div class="lang-modal__content-item">
                            <span>קיצור: </span>
                            <input type="text" placeholder="En">
                        </div>
                        <div class="lang-modal__content-item">
                            <span>שם שפה: </span>
                            <input type="text" placeholder="English">
                        </div>
                    </div>
                    <div class="lang-modal__btn btn">
                        שמור
                    </div>
                </div>
                <div class="lang-new" :class="{active: new_lang_modal}">
                    <div class="lang-new__bg"></div>
                    <div class="lang-new__content">
                        <div class="lang-new__content-top">
                                    <span class="lang-new__close">
                                        <img src="../../../public/img/icons/close.svg" alt="">
                                    </span>
                            <span class="lang-new__title">
                                       Добавить язык
                                    </span>
                        </div>
                        <div class="lang-new__content-edit">
                            <div class="lang-new__content-item">
                                <span>קיצור: </span>
                                <input type="text" placeholder="En">
                            </div>
                            <div class="lang-new__content-item">
                                <span>שם שפה: </span>
                                <input type="text" placeholder="אנא הזינו שם שפה">
                            </div>
                        </div>
                        <div class="lang-new__content-btn btn">
                            הוספה
                        </div>
                    </div>
                </div>
                <table class="orders">
                    <thead>
                    <tr>
                        <td>
                            <label>
                                <input type="checkbox">
                                <span class="fake"></span>
                            </label>
                        </td>
                        <td>
                            язык
                        </td>
                        <td>
                            Код
                        </td>
                        <td>
                            Показано на сайте
                        </td>
                        <td>
                            Действия
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="order-row unwatched">
                        <td>
                            <label>
                                <input type="checkbox">
                                <span class="fake"></span>
                            </label>
                        </td>
                        <td>
                            Hebrew
                        </td>
                        <td>
                            He
                        </td>
                        <td>
                            <label>
                                <input type="checkbox">
                                <span class="fake"></span>
                            </label>
                        </td>
                        <td>
                            <div>
                                <span class="lang-delete-btn"><img src="../../../public/img/icons/delete-ico.svg" alt=""></span>
                                редактирование
                                <span class="lang-edit-btn" @click="lang_modal = !lang_modal">
                                    <img src="../../../public/img/icons/edit-ico.svg" alt="">
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
    export default {
        name: "Language",

        data:() => ({
            lang_modal: false,
            new_lang_modal: false,
        }),

    }
</script>

<style scoped>

</style>