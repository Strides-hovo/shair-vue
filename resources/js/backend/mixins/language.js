import apiRoutes from "@/routes/api-routes";
import {mapActions, mapGetters} from "vuex";


export default {
    data: () => ({
        lang_modal: false,
        new_lang_modal: false,
        delete_btn: true,
        all_checked: false,

        newLanguage: {
            dir: 'ltr',
            code: '',
            name: '',
            status: true
        },
        languageIds: [],
        language: {},
    }),
    methods: {
        ...mapActions(['lang/set','lang/create','lang/update','lang/updateStatus' ,'lang/destroy']),
        createLanguage() {
            this['lang/create'](this.newLanguage).catch(error => {
                if (error.response.data.status === 'Error') {
                    alert(error.response.data.message);
                }
            });
            this.new_lang_modal = !this.new_lang_modal;
            this.newLanguage.code = '';
            this.newLanguage.name = '';
            this.newLanguage.dir = 'ltr';
        },

        deleteLanguage(languageIds = []) {
            this['lang/destroy']([languageIds] ?? this.languageIds).catch(error => {

            });
            this.languageIds = [];
            this.delete_btn = true;

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
    computed: {
        ...mapGetters({ languages: 'lang/getLanguages'})
    },
    mounted() {
        if (this.languages.length === 0){
            this['lang/set']()
        }


    }

}









