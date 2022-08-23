<template src="./index.html"></template>
<style scoped src="./lang.css"></style>


<script>

import mixinLanguage from "@backend/mixins/language";
import BaseTranslateSlide from "../../components/BaseTranslateSlide";


export default {
    name: "language",
    mixins: [mixinLanguage],
    components: {BaseTranslateSlide},
    computed:{
        all_checked: {
          get(){
            return this.languageIds.length === this.languages.length
          },
          set(value){
            this.languageIds = value ? this.languages.map(i => i.id) : []
          }
        }
    },

    methods: {
        closeModal() {
            this.new_lang_modal = false
        },
        checkLanguage(id) {
            let language = this.languages.find(lang => {
                return lang.id === id;
            });
            this.language = Object.assign({}, language);
        },


    },

}
</script>