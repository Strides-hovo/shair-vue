
import {mapActions, mapGetters} from "vuex";


export default {
    data: () => ({
        lang_modal: false,
        new_lang_modal: false,
        newLanguage: {
            dir: 'ltr',
            code: '',
            name: '',
            status: true
        },
        languageIds: [],
        language: {},
    }),

    computed: {
        ...mapGetters({ languages: 'lang/getLanguages'}),

    },
    methods: {
        ...mapActions(['lang/create','lang/update','lang/updateStatus' ,'lang/destroy']),
        createLanguage() {
            this['lang/create'](this.newLanguage)
                .catch(error => {
                if (error.response.data.status === 'Error') {
                    alert(error.response.data.message);
                }
            })
            this.new_lang_modal = !this.new_lang_modal;
            this.newLanguage.code = '';
            this.newLanguage.name = '';
            this.newLanguage.dir = 'ltr';

        },

        deleteLanguage(id = null) {
            const ids = Number(id) || this.languageIds
            this['lang/destroy'](ids)
            this.languageIds = [];


        },
        updateLanguage() {
            this['lang/update'](this.language).catch(error => {
                if (error.response.data.status === 'Error') {
                    alert(error.response.data.message);
                }
            });
            this.language = {};
            this.lang_modal = false;

        },
        updateStatus(id, status) {
            let language = {id,status}
            console.log(language)
            this['lang/updateStatus'](language)
        },

    },



}









