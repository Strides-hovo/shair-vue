<template src="./index.html"></template>


<script>



import { mapGetters, mapActions } from 'vuex'
import AddPage from '@backend/components/forms/AddPage'

export default {
  name: 'BackendVideoPages',
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
      VideoPages: 'PageVideo/GetVideoPages',
      languageId: 'lang/getlanguageId',
    }),

  },

  methods: {
    ...mapActions([
      'lang/set',
      'PageVideo/set',
      'PageVideo/create',
      'PageVideo/update',
      'PageVideo/destroy',
      'PageVideo/updateField',
    ]),



    closeNewPageModal() {
      this.ButtonNewPageModal = false
    },


     saveNewPage(NewPage) {
  
      NewPage.translate.language_id = this.languageId
      this['PageVideo/create'](NewPage)
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
      this['PageVideo/destroy'](id)
    },

    UpdatePage(page) {
      this['PageVideo/update'](page)
    },

    UpdateGalleryField(gallery) {
      this['PageVideo/updateField'](gallery)
    },

    UpdateGallery(gallery) {
      if (typeof gallery['galleries'] !== "undefined") {
        this['PageVideo/update'](gallery)
      }
      else {
        this['PageVideo/updateField'](gallery)
      }
    },


  },


  mounted() {
    if (this.VideoPages.length === 0) {
      this['PageVideo/set']()
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