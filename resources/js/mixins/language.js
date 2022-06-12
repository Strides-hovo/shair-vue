import apiRoutes from "../api-routes";

export default {
    data: () => ({
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
    methods: {
        createLanguage() {

            axios.post(apiRoutes('language.create'), this.newLanguage).then(response => {
                if (response.data.status === 'Success') {
                    this.new_lang_modal = !this.new_lang_modal;
                    this.languages.push(response.data.data);
                    this.newLanguage.code = '';
                    this.newLanguage.name = '';
                    this.newLanguage.dir = 'ltr';
                }
            }).catch(error => {
                if (error.response.data.status === 'Error') {
                    alert(error.response.data.message);
                }
            });
        },
        deleteLanguage() {
            axios.delete(apiRoutes('language.destroy', this.languageIds), { ids: this.languageIds })
                .then(response => {
                    this.languages = response.data.data;
                    this.all_checked = false;
                    if (response.data.message.length > 0) {
                        alert(response.data.message.length + ' ' + response.data.message[0])
                    }
                }).catch(error => {
                    console.log(error.response)
                });
            this.languageIds = [];
            this.delete_btn = true;
        },
        updateLanguage() {
            axios.put(apiRoutes('language.update', this.language.id), this.language).then(response => {
                this.languages = this.languages.map(language => {
                    if (language.id === response.data.data.id) {
                        return response.data.data
                    }
                    return language
                });
                this.language = {};
                this.lang_modal = false;
            }).catch(error => {
                if (error.response.data.status === 'Error') {
                    alert(error.response.data.message);
                }
            });
        },
        updateStatus(id, status) {
            axios.put(apiRoutes('language.update', id), { status });
        }
    },
    mounted() {
        axios.get(apiRoutes('language.index')).then(response => {
            this.languages = response.data.data || [];
        });
    }

}









