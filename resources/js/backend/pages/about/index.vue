
<template src="./index.html"></template>

<script>

import { mapActions, mapGetters } from 'vuex'
import StrSetting from "./modules/StrSetting";

export default {
    name: 'About',

    components: {  StrSetting },

    data: () => ({
        defaultLanguage: null,
        ButtonLeftAside: false,
    }),

    methods: {
        ...mapActions([
            'about/getAllPages',
            'lang/set',
            'about/UpdateAbout',
            'about/CreatePage',
        ]),

        UpdatePage() {
            if (typeof this.page.id === 'undefined') {
                this['about/CreatePage'](this.page)
            }
            else {
                this['about/UpdateAbout'](this.page)
            }
            this.CloseLeftAside()
        },
        CloseLeftAside() {
            this.ButtonLeftAside = false
        }
    },

    computed: {
        ...mapGetters({
            aboutes: 'about/getAll',
            about: 'about/getByLanguage',
            actualLanguages: 'lang/getActualLanguages',
        }),

        languageId: {
            get() {
                return this.defaultLanguage === null && this.actualLanguages.length > 0 ? this.actualLanguages[0].id : this.defaultLanguage;
            },
            set(val) {
                this.defaultLanguage = val
            }
        },

        page() {
            return this.about(this.languageId) || this.newPage
        },
        newPage() {
            return {
                content: '',
                title: '',
                language_id: this.languageId
            }
        }
    },

    mounted() {

      if (this.actualLanguages.length === 0 ){
        this['lang/set']()
      }
      this['about/getAllPages']()

    }


}
</script>

