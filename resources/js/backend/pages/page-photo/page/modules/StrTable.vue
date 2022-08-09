<template>
  <table class="orders products productspage product-products product-images">
    <thead>
      <tr>
        <td>
          <label class="check">
            <input type="checkbox" v-model="selectAll" @change="CheckGallery">
            <span class="fake"></span>
          </label>
        </td>
        <td></td>
        <td></td>
        <td>סדור</td>
        <td>פעולות</td>
      </tr>
    </thead>
    <tbody>

      <tr class="order-row" v-for="gallery in PhotoGallery.galleries" :key="gallery.id">
        <td>
          <label class="check">
            <input type="checkbox" v-model="selectedGalleryIds" :value="gallery.id" @change="CheckGallery">
            <span class="fake"></span>
          </label>
        </td>
        <td>
          <div class="table-img">
            <img :src="gallery.image">
            <base-file-upload @UploadNewFile="UpdateImage" >
              <div class="table-img__title" @click="ChangeImage(gallery.id)">שינוי תמונה
              <img src="@img/icons/edit-ico.svg" alt="">
            </div>
              </base-file-upload>
            
          </div>
        </td>
        <td>
          <div class="table-img__info">
            <div class="table-img__info-item">
              <span>Alt:</span>
              <input type="text" placeholder="סוכה כשרה" v-model="gallery.image_alt"
                @change="UpdateGalleryItem(gallery.id)">
            </div>
            <div class="table-img__info-item">
              <span>Title:</span>
              <input type="text" placeholder="סוכה כשרה" v-model="gallery.image_title"
                @change="UpdateGalleryItem(gallery.id)">
            </div>
            <div class="table-img__info-item">
              <span>File name:</span>
              <input type="text" placeholder="סוכה-כשרה6667" v-model="gallery.image_name"
                @change="UpdateGalleryItem(gallery.id,true)">
            </div>
          </div>
        </td>
        <td>
          <label>
            <select v-model="gallery.sorting" @change="UpdateGalleryItem(gallery.id)">
              <option :value="count" v-for="count in PhotoGallery.galleries.length" :key="count">{{ count }}
              </option>
            </select>

          </label>
        </td>
        <td>
          <div>
            <span @click="gallery.status = !gallery.status; UpdateGalleryItem(gallery.id)"><img
                :src="gallery.status ? showIcon : unshow" alt="">להציג</span>
          </div>
        </td>
      </tr>

    </tbody>
  </table>

  

  <!-- <base-library-images :is-active="ButtonEditGallery" @CloseModal="CloseModal" HeaderText="" :width="'600px'"
    @UpdateImage="UpdateImage" /> -->



</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import BaseLibraryImages from '../../../../components/UI/BaseLibraryImages.vue';
import BaseFileUpload from '../../../../components/BaseFileUpload.vue';

export default {
  name: "str-table",
  components: { BaseLibraryImages,BaseFileUpload },
  props: {
    PhotoGallery: {
      type: Object,
      required: true
    },
    selected: {
      type: Array
    }
  },

  emits: ['UpdateGalleryItem', 'UpdateImage', 'update:selected'],

  data: () => ({

    showIcon: require('@img/icons/show.svg').default,
    unshow: require('@img/icons/close.svg').default,
    ButtonEditGallery: false,
    Gallery: {},
    selectedGalleryIds: []
  }),

  computed: {
    selectAll: {
      get: function () {
        return this.PhotoGallery.galleries ? this.selectedGalleryIds.length === this.PhotoGallery.galleries.length : false
      },
      set: function (value) {
        this.selectedGalleryIds = value ? this.PhotoGallery.galleries.map(i => i.id) : []
      }
    },

    ...mapGetters({ images: 'PhotoPage/getImages' })
  },

  methods: {
    ...mapActions(['PhotoPage/setImages']),

    UpdateGalleryItem(id,replace = false) {
      //console.log(replace, 'id');
      this.$emit('UpdateGalleryItem', id,replace)
    },

    ChangeImage(id) {
      this.ButtonEditGallery = true;
      this.Gallery.id = id
      this.Gallery.photo_gallery_id = this.PhotoGallery.galleries.find(g => g.id === id).photo_gallery_id
    },

    UpdateImage(image) {
      
      this.Gallery.image = image.src
      this.Gallery.image_name = image.name
      this.Gallery.photo_page_id = this.PhotoGallery.id
      
      this.$emit('UpdateImage', this.Gallery)
      this.Gallery = {}
      this.ButtonEditGallery = false;
    },

    CloseModal() {
      this.ButtonEditGallery = false
    },





    CheckGallery() {
      this.$emit('update:selected', this.selectedGalleryIds)
    }

  },

  async mounted() {
    if (this.images.length === 0) {
      this['PhotoPage/setImages']()
    }

  }
}
</script>

