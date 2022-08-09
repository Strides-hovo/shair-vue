<template>
    <div class="header-body__btns-item circle lang-select">
        <span class="lang-select__btn" @click="isActive = !isActive">{{ language.code }}</span>
        <ul class="lang-select__dropdown" :class="{ active: isActive }">
            <li v-for="lang in Languages" :key="lang.id" :value="lang.id" @click="CheckLanguage(lang.id)">
                <span>{{ lang.code }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'TheLanguageSelect',

    data: () => ({
        isActive: false
    }),
    methods: {
        ...mapMutations(['lang/SET_SITE_LANGUAGE']),
        ...mapActions(['lang/set']),

        CheckLanguage(lang_id) {
            this['lang/SET_SITE_LANGUAGE'](lang_id)
            this.isActive = false
            document.body.removeAttribute('class')
            document.documentElement.setAttribute('lang', this.language.code)
            document.body.classList.add(this.language.dir)
        },
    },
    computed: {
        ...mapGetters({ Languages: 'lang/getActualLanguages', language: 'lang/GET_SITE_LANGUAGE' }),
    },

    beforemounted() {
        if ( typeof this.language.id === 'undefined' ) {
            this['lang/SET_SITE_LANGUAGE']()
        }
        
    }
}
</script>

<style lang="scss" >
.lang-select__dropdown {
    -webkit-appearance: none;
}

.header-body__btns-item.lang-select {
    position: relative;
    overflow: visible;
    cursor: pointer;
}

.header-body__btns-item.lang-select.active {
    border-radius: 50% 50% 0 0;
    border-bottom: none;
}

.header-body__btns-item.lang-select .lang-select__dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 54px;
    left: -1px;
    width: calc(100% + 3px);
    min-height: 100%;
    background: rgba(255, 255, 255, 0.8);
    border-top: none;
    border: 2px solid #376B00;
    border-radius: 0 0 28px 28px;
    display: none;
}

.header-body__btns-item.lang-select .lang-select__dropdown.active {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.header-body__btns-item.lang-select .lang-select__dropdown li {
    padding: 10px 0;
}

.header-body__btns-item.lang-select .lang-select__dropdown li a {
    color: #000000;
}
</style>