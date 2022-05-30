function createLanguage() {
    axios.post('/api/admin/language', this.newLanguage).then(response => {
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
}

function deleteLanguage() {
    axios.delete(`api/admin/language-delete/${this.languageIds}`, {ids: this.languageIds})
        .then(response => {
            this.languages = response.data.data;
            this.all_checked = false;
            if (response.data.message.length > 0){
                alert(response.data.message.length + ' ' +response.data.message[0])
            }
        }).catch(error => {
            console.log(error.response )
    });
    this.languageIds = [];
    this.delete_btn = true;
}

function updateLanguage() {
    axios.put(`/api/admin/language/${this.language.id}`, this.language).then(response => {
        this.languages.map(lang => {
            if (lang.id === response.data.data.id) {
                lang.name = response.data.data.name;
                lang.code = response.data.data.code;
                lang.dir = response.data.data.dir;
            }
        });
        this.language = {};
        this.lang_modal = false;
    }).catch(error => {
        if (error.response.data.status === 'Error') {
            alert(error.response.data.message);
        }
    });
}

function updateStatus(id,status){
    axios.put(`/api/admin/language/${id}`,{id,status});
}

module.exports = {
    createLanguage, deleteLanguage, updateLanguage,updateStatus
};
