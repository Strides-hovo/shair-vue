<template>
  <video class="video-js gallery-page__body-item" loop ref="videoPlayer" v-if="source" :controls="options" preload="metadata">
    <source :src="source" type="video/mp4" />
  </video>
</template>

<script>
  // VideoItem.js
//   import videojs from "video.js";
//   import "video.js/dist/video-js.min.css";



  export default {
    props: {
        source: String
    },
    data() {
      return {
        player: null,
        options: {
          controls: true,
          width: 270,
          height: 200
        },
      };
    },
    mounted() {
    //   this.player = videojs(this.$refs.videoPlayer, this.options);
    //   console.log( this.player.error_ );
        //console.log(this.$refs.videoPlayer);
    },
  };
</script>