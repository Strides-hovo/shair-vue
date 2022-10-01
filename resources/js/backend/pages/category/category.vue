<template src="./index.html"></template>

<script>

import {mapActions, mapGetters} from "vuex";
import StrSize from "./StrSize";
import AddCategory from "@backend/components/forms/AddCategory";

export default {

  components: {StrSize, AddCategory},
  name: "category",

  data: () => ({
    defaultLanguage: null,
    ButtonEdit: false,
    ButtonSeo: false,
    ButtonSize: false,
    ButtonLeftAside: false,
    ButtonNewSize: false,
    ButtonNewCategory: false,
    SelectedFileList: [],
    id: null
  }),

  computed: {

    ...mapGetters({
      categoryById: 'category/getByLanguage',
      languageId: 'lang/getLanguageId',
      categoryData: 'category/FilterSizes'
    }),

    categories() {
      return this.categoryById(this.languageId).sort((a,b) => a.sorting - b.sorting)
    },

    category() {
      return this.categoryData(this.id, this.languageId)
    }

  },

  methods: {
    ...mapActions([
      'category/set',
      'category/update',
      'category/updateSize',
      'category/create',
      'category/destroy',
      'category/export',
    ]),

    CloseLeftAside() {
      this.ButtonLeftAside = false
      setTimeout( () => {
        this.ButtonEdit = false
        this.ButtonSeo = false
        this.ButtonSize = false
      },0)
    },

    FilterSizes(id) {
      this.id = id
    },

    OpenLeftAside(form, id) {
      this.id = id
      this[form] = true
      setTimeout( () => {
        this.ButtonLeftAside = true
      },0)
    },


    closeNewCategoryModal() {
      this.ButtonNewCategory = false
    },

    UpdateField(category) {
      this['category/update'](category)
    },

    update() {
      this.category.translate.language_id = this.languageId
      this['category/update'](this.category)
      this.CloseLeftAside()
    },

    destroy(category) {
      console.log(category)
      this['category/destroy'](category)
    },


    exportdata() {
      this['category/export']()
    }

  },

  mounted() {

    if (this.categories.length === 0) {
      this['category/set']()
    }
  }

}
</script>

<style>
.products-modal-edit {
  position: fixed;
  z-index: 10;
  height: 100vh;
  left: 0;
  background: #fbfbfb;
  padding: 15px 20px;
  width: 450px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border-right: 1px solid #bfbfbf;
}
.products-modal-size {
  position: fixed;
  z-index: 10;
  height: 100vh;
  left: 0;
  background: #fbfbfb;
  padding: 15px 20px;
  width: 530px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  border-right: 1px solid #bfbfbf;
}

.products-modal-seo {
  position: fixed;
  z-index: 10;
  height: 100vh;
  left: 0;
  background: #fbfbfb;
  padding: 15px 20px;
  width: 450px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  border-right: 1px solid #bfbfbf;
}



.slide-fade-enter-active,
.slide-fade-leave-active{
  transition: all 0.4s ease-out;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}


.tab-pane.fade {
  display: none;
}

.tab-pane.fade.active {
  display: block;
}

ul.nav.nav-tabs {
  display: flex;
  justify-content: flex-start;
}

li.nav-item {
  border: 1px solid #bfbfbf;
  padding: 10px 5px;
}
</style>