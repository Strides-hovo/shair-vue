<template>
  <div class="pricelist-modal__img">
    <div class="pricelist-modal__img-title mobile">
      מסגרת סוכה
    </div>

    <div class="pricelist-modal__img-top" @click="toggleTab">
      <button :class="{active: VideoTab}">וידאו</button>
      <button :class="{active: PhotoTab}">תמונות</button>
    </div>

    <div v-if="PhotoTab">
      <div class="pricelist-modal__img-item">
            <span class="pricelist-modal-zoom" @click="ButtonModal = true">
                <img src="@img/certificates/lens.png" alt="">
            </span>
        <div class="swiper-wrapper" v-if="photo.image">
          <div class="swiper-slide">
            <img :src="photo.image"
                 :alt="photo.translate?.alt"
                 :title="photo.translate?.title"
            >
          </div>
        </div>
        <div class="pricelist-modal-button-prev" @click="prev" >
          <base-icon icon="slider-arrow-prev" width="41" height="59"/>
        </div>
        <div class="pricelist-modal-button-next" @click="next" >
          <base-icon icon="slider-arrow-next" width="41" height="59"/>
        </div>
      </div>

      <ul class="pricelist-modal__img-list page">
        <li v-for="(photo,index) in photos"
            :key="photo.id"
            @click="slide(index)"
        >
          <img :src="photo.image"
               :alt="photo.translate?.alt"
               :title="photo.translate?.title"
          >
        </li>
      </ul>
    </div>

    <div v-if="VideoTab">
      <the-product-video :product="product" />
    </div>

    <div class="product-body__img-btn" v-if="product.Instruction_file">
      <a download :href="product.Instruction_file" >
      דף הרכבה להורדה
      </a>
    </div>
  </div>

  <base-photo-modal  v-model:ButtonModal="ButtonModal" :photo="photo" />

</template>

<script>
import TheProductVideo from "./TheProductVideo";
import BasePhotoModal from "@frontend/components/BasePhotoModal";
export default {
  name: 'TheProductGallery',
  components:{TheProductVideo, BasePhotoModal},
  props: {
    product: {}
  },
  data: () => ({
    VideoTab: false,
    PhotoTab: true,
    photo: {},
    index: 0,
    ButtonModal: false,
  }),

  computed: {
    photos() {
      return this.product.photos
    }
  },

  methods: {
    toggleTab() {
      this.VideoTab = !this.VideoTab
      this.PhotoTab = !this.PhotoTab
    },

    slide(index) {
      this.index = index
      this.photo = this.photos[this.index];
    },

    gallery() {
      const photos = this.photos
      if (photos && photos.length > 0) {
        this.photo = photos.find(photo => photo.by_default) || photos[0]
      }
    },
    next() {
      this.index = (this.index + 1) % this.photos.length;
      this.photo = this.photos[this.index];
    },
    prev() {
      this.index = this.index === 0 ? (this.photos.length - 1) : (this.index - 1) % this.photos.length;
      this.photo = this.photos[this.index];
    },
  },

  mounted() {
    this.gallery()
  }
}
</script>

