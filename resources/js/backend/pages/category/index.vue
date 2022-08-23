<template src="./index.html"></template>

<script>

import {mapActions, mapGetters} from "vuex";
import StrSize from "./StrSize";

export default {

  components: {StrSize},
  name: "category",

  data: () => ({
    defaultLanguage: null,
    Teleport: false,
    ButtonEdit: false,
    ButtonSeo: false,
    ButtonSize: false,
    ButtonLeftAside: false,
    ButtonNewSize: false,
    ButtonNewCategory: false,
    // category: {},
    SelectedFileList: [],
    id: null
  }),

  computed: {

    ...mapGetters({
      actualLanguages: 'lang/getActualLanguages',
      allCategories: 'category/all',
      categoryById: 'category/getByLanguage',
      languageId: 'lang/getLanguageId',
      categoryData: 'category/FilterSizes'
    }),


    categories() {
      return this.categoryById(this.languageId)
    },

    category() {
      return this.categoryData(this.id, this.languageId)
    }

  },

  methods: {
    ...mapActions([
      'lang/set',
      'category/set',
      'category/update',
      'category/updateSize',
      'category/create',
      'category/destroy',
      'category/export',
    ]),

    CloseLeftAside() {
      this.ButtonLeftAside = false,
          this.ButtonEdit = false,
          this.ButtonSeo = false,
          this.ButtonSize = false,
          this.Teleport = false
    },

    FilterSizes(id) {
      this.id = id
    },

    OpenLeftAside(form, id) {

      this.id = id
      this[form] = true
      this.Teleport = true
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
      this.ButtonLeftAside = false
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
    if (this.actualLanguages.length === 0) {
      this['lang/set']()
    }
    if (this.allCategories.length === 0) {
      this['category/set']()
    }
  }

}
</script>

<style>
.aside-enter-active,
.aside-leave-active {
  transition: opacity .5s;
}

.aside-enter,
.aside-leave-to {
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