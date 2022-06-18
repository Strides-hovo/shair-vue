<template src="./index.html"></template>
<style scoped src="./lang.css"></style>


<script>



import mixinLanguage from "@/mixins/language";

export default {
    name: "Language",
   
    mixins: [mixinLanguage],

    data: () => ({

        editIcon: require('@img/icons/edit-ico.svg'),
        deleteIcon: require('@img/icons/delete-ico.svg'),
        closeIcon: require('@img/icons/close.svg'),
        settingIcon: require('@img/icons/settings.svg'),
        addIcon: require('@img/icons/add-icon.svg'),

    }),
    methods: {

        closeModal() {
            this.new_lang_modal = false
        },
        selectLanguage() {
            this.delete_btn = this.languageIds.length < 1;
        },
        selectAllLanguages() {
            if (this.all_checked) {
                this.languageIds = this.languages.map(lang => {
                    return lang.id
                });
            }
            else {
                this.languageIds = [];
            }
            this.selectLanguage()
        },
        checkLanguage(id) {
            let language = this.languages.find(lang => {
                return lang.id === id;
            });
            this.language = Object.assign({}, language);
            //this.lang_modal = !this.lang_modal;
        },

    },

}
</script>