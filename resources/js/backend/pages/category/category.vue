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
      },400)
    },

    FilterSizes(id) {
      this.id = id
    },

    OpenLeftAside(form, id) {
      this.id = id

      this[form] = true
      this.ButtonLeftAside = true
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