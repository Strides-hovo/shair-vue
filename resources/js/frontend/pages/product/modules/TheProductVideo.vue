<template>
  <div class="pricelist-modal__img-item">

    <div class="swiper-wrapper" v-if="video.url">
      <div class="swiper-slide">
        <youtube-vue3 :videoid="video.url" :loop="0" :autoplay="0" width="100%"  />
      </div>
    </div>
    <div class="pricelist-modal-button-prev" @click="prev" >
      <base-icon icon="slider-arrow-prev" width="41" height="59"/>
    </div>
    <div class="pricelist-modal-button-next" @click="next" >
      <base-icon icon="slider-arrow-next" width="41" height="59"/>
    </div>
  </div>

  <ul class="video-list">
    <li v-for="(video,index) in videos"
        :key="video.id"
        @click="slide(index)"
    >
       {{video.id}}

    </li>
  </ul>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'
export default {
  name: "TheProductVideo",
  components: {YoutubeVue3},
  props:{
    product: {}
  },
  data: () => ({
    video: {},
    index: 0,

  }),
  computed: {
    videos() {
      return this.product.videos
    }
  },
  methods:{
    next() {
      this.index = (this.index + 1) % this.videos.length;
      this.video = this.videos[this.index];
    },
    prev() {
      this.index = this.index === 0 ? (this.videos.length - 1) : (this.index - 1) % this.videos.length;
      this.video = this.videos[this.index];
    },
    slide(index){
      this.index = index
      this.video = this.videos[this.index];
    },

    videoSet(){
      this.video = this.videos[this.index] || {};
    }
  },
  mounted() {
    this.videoSet()
  }

}

</script>
<style>
ul.video-list {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-grow: 1;
}
.video-list > li {
  font-size: 20px;
  padding: 15px;
  border: 1px solid;
  cursor: pointer;
}
</style>
