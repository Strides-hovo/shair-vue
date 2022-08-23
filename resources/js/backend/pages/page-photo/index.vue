<template src="./index.html"></template>
<!-- <template ></template> -->


<script>



import { mapGetters, mapActions } from 'vuex'
import AddPage from '@backend/components/forms/AddPage'

export default {
  name: 'BackendPagePhoto',
  components: { AddPage },
  data: () => ({
    showIcon: require('@img/icons/show.svg').default,
    unshow: require('@img/icons/close.svg').default,
    NewPage: {
      translate: {
        name: '',
        slug: '',
        meta_title: '',
      }
    },

    ButtonNewPageModal: false,
  }),

  computed: {
    ...mapGetters({
      pages: 'PhotoPage/GetPhotoPages',
      languageId: 'lang/getLanguageId',
    }),

  },

  methods: {
    ...mapActions([

      'PhotoPage/set',
      'PhotoPage/create',
      'PhotoPage/update',
      'PhotoPage/destroy',
      // 'PhotoPage/updateField',
    ]),



    closeNewPageModal() {
      this.ButtonNewPageModal = false
    },


     saveNewPage(NewPage) {
  
      NewPage.translate.language_id = this.languageId
      this['PhotoPage/create'](NewPage)
      this.NewPage = {
        translate: {
          name: '',
          slug: '',
          meta_title: '',
        }
      }
      this.ButtonNewPageModal = false
    },

    DeletePage(id) {
      this['PhotoPage/destroy'](id)
    },

    UpdatePage(page) {
      this['PhotoPage/update'](page)
    },

    UpdateGalleryField(gallery) {
      this['PhotoPage/updateField'](gallery)
    },

    UpdateGallery(gallery) {
      if (typeof gallery['galleries'] !== "undefined") {
        this['PhotoPage/update'](gallery)
      }
      else {
        this['PhotoPage/updateField'](gallery)
      }
    },


  },


  mounted() {
    if (this.pages.length === 0) {
      this['PhotoPage/set']()
    }
  }

}

</script>

<style>
.table-img__info-item {
  margin: auto;
}

.table-img__info-item input {
  font-size: 16px;
  line-height: 22px;
  color: #2b2b2b;
  border-bottom: 1px solid #87a8c9;
  padding: 8px 0 5px;
  width: 100%;
  max-width: 352px;
  background-color: transparent;
}
</style>