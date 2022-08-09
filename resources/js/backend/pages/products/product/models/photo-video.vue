<template>
  <div class="cart-btns">

    <div class="cart-btns__item product-add-new btn circle" @click="ButtonNewPhoto = true">
      <img src="@img/icons/add-icon.svg" alt="" />
    </div>

    <base-translate-slide :is-active="selectedItems.length > 0">
       <button class="cart-btns__item btn" @click="DeleteSelected" v-if="selectedItems.length > 0">מחיקה</button>
    </base-translate-slide>

    
  </div>
  <div class="container-content__body">
    <div class="product-content__tabs tabs">
      <span class="product-content__tabs-item" :class="{ active: activeTabs === 'photo' }"
        @click="activeTabs = 'photo'">Фотографии</span>
      <span class="product-content__tabs-item" :class="{ active: activeTabs === 'video' }"
        @click="activeTabs = 'video'">видео</span>

    </div>
    <table class="orders products productspage product-products product-images" v-if="activeTab('photo')">
      <thead>
        <tr>
          <td>
            <label class="check">
              <input type="checkbox" v-model="selectAll" @change="CheckSelected">
              <span class="fake"></span>
            </label>
          </td>
          <td> תמונה של המוצר </td>
          <td>
            הגדרות SEO
          </td>
          <td>
            סדור
          </td>
          <td>
            תמונה ראשית
          </td>
        </tr>
      </thead>
      <tbody>

        <Photo v-for="photo in photos" :key="photo.id" :photo="photo" :count="photos.length > 5 ? photos.length : 5"
          @updateRadioButtons="updateRadioButtons" v-model:selectedItem="selectedItems" />

      </tbody>
    </table>

    <div class="product-video" v-if="activeTab('video')">
      <div class="product-video__title">
        וידאו YouTube:
      </div>
      <div class="product-video__input">
        <label>
          <button>שמור</button>
          <input type="text">
        </label>
      </div>
      <div class="product-video__item">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </div>
  </div>

  <str-modal :is-active="ButtonNewPhoto" HeaderText="Upload photo" @CloseModal="ButtonNewPhoto = false">
    <div class="form-group">
      <div class="form-column file-name">
        {{ NewPhoto.image }}
      </div>
      <div class="form-column">
        <base-file-upload @UploadNewFile="UploadNewFile">

          <button class="upload-image">upload</button>
        </base-file-upload>
        <div class="input-btn">
          <button class="upload-image" @click="CreateImage" :disabled="!NewPhoto.image" >Save</button>
        </div>
      </div>
      <div class="form-column">
        <div class="input">
          <label for="">Alt</label>
          <input type="text" class="form-control" v-model="NewPhoto.alt">
        </div>
        <div class="input">
          <label for="">Title</label>
          <input type="text" class="form-control" v-model="NewPhoto.title">
        </div>
  
      </div>
    </div>

  </str-modal>
</template>

<script>
import Photo from "./photo";
import BaseFileUpload from "@backend/components/BaseFileUpload";
import BaseTranslateSlide from "@backend/components/BaseTranslateSlide.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "photo-video",
  components: { Photo, BaseFileUpload, BaseTranslateSlide },
  props: {
    photos: Array,
    product_id: Number
  },
  data: () => ({
    activeTabs: 'photo',
    selectedItems: [],
    ButtonNewPhoto: false,
    NewPhoto: { image: null }
  }),

  computed: {
    ...mapGetters({
      languageId: 'lang/getlanguageId',

    }),

    selectAll: {
      get() {
        return this.photos.length === this.selectedItems.length;
      },
      set(value) {
        this.selectedItems = value ? this.photos.map(i => i.id) : []
      }
    },



  },
  methods: {

    ...mapActions(['products/deletePhotos', 'products/createPhoto']),
    activeTab(name) {
      return this.activeTabs === name
    },
    updateRadioButtons() {
      this.photos.map(photo => photo.by_default = 0)
    },
    DeleteSelected() {
      this['products/deletePhotos'](this.selectedItems)
      this.selectedItems = []
    },


    UploadNewFile(image) {
      this.NewPhoto.image = image.src
      this.NewPhoto.name = image.name
      this.NewPhoto.product_id = this.product_id
      this.NewPhoto.language_id = this.languageId

    },
    CreateImage() {
      this['products/createPhoto'](this.NewPhoto)
      this.ButtonNewPhoto = false
      this.NewPhoto = { image: null }
    }
  },


}
</script  >
<style lang="scss" >


.lang-new__content {
  justify-content: flex-start;
}

.form-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 15px;

  .form-column {
    width: 50%;

    .upload-image {
      background: none;
      padding: 10px 15px;
      text-transform: uppercase;
      font-size: 16px;
      border: 1px solid #eee;
      transition: background .5s;
      border-radius: 15px;

      &:disabled:hover {
        background: red;
      }

      &:hover {
        background: #6e8d13c9;
        color: #fff;
      }
    }

    .input-btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 5px 0;
    }

    .input {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 5px 0;

      input.form-control {
        border: 1px solid #eee;
        padding: 5px;
      }
    }
  }

  .file-name {
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }

}
</style>
