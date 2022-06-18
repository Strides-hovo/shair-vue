<template src="./str-filemanager.html"></template>
<style src="./str-filemanager.scss" lang="scss">
</style>


<script>





import StrButton from "../../../components/UI/StrButton";
import StrNewGallery from "./StrNewGallery";

import { mapGetters } from "vuex";

import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import axios from "axios";
import apiRoutes from "../../../routes/api-routes";
import crop from './crop'


export default {
  name: "StrFileManager",
  components: { StrButton, Cropper, StrNewGallery },
  mixins: [crop],
  props: {
    photoGallery: Object
  },
  data: () => ({

  select: null,

    img: {
      src: null,
      type: null,
      width: 100,
      height: 100,
    },
    file: {},
    images: [],
    selected_images: [],

    newImage: {
      sorting: 1,
      image_alt: '',
      image_title: '',
      image_name: '',
      image: '',
      photo_gallery_id: null
    }
  }),


  emits: ['checkImages', 'saveGallery'],
  computed: {
    //...mapGetters({selected: 'fm/selectedItems', portions: 'Portions/getPortions'}),
 


  },

  watch: {
    
  },

  methods: {
    checkImages(evt) {
      const src = evt.target.getAttribute('src')

      if (!this.selected_images.includes(src)) {
        this.img.src = src;
        this.selected_images.push(src)
      } else {
        let i = this.selected_images.findIndex(el => el === src)
        this.selected_images.splice(i, 1);
      }
      //console.log(  );
      //this.select = true
      //this.$emit('checkImages',  this.selected[0].path )
    },

    checkPortions(evt) {
      const portion = this.portions.find(i => i.id === +evt.target.value)


      if (portion) {
        this.coordinates.width = portion.width
        this.coordinates.height = portion.height
        // this.$refs.cropper.zoom(0);
        // this.$refs.cropper.refresh();

      }
      // console.log(portion, this.coordinates)
    },


    crop() {
      const { canvas } = this.$refs.cropper.getResult();
      console.log(canvas);
      canvas.toBlob((blob) => {
        // Do something with blob: upload to a server, download and etc.
      }, this.coordinates.type);
    },

    // custom(){
    //   const canvas = this.$refs.canvas;
    //   const photo = this.$refs.img;
    //   const ctx = canvas.getContext("2d");
    //   const img = new Image();
    //   img.src = photo.src;
    //   console.log("img src:", img.src);
    //   img.onload = () => {
    //     ctx.drawImage(img, photo.x, photo.y, photo.width, photo.height);
    //   };

    // },




  



    uploadImage() {

      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {

        const form = new FormData();

        canvas.toBlob(blob => {
          form.append('file', blob);
          axios.post(apiRoutes('image.upload'), form)
            .then(r => console.log(r))
            .catch(err => console.log(err))
        });

        //console.log(form,canvas, this.file )
      }

    },

    updateSize({ coordinates }) {
      this.coordinates.width = Math.round(coordinates.width);
      this.coordinates.height = Math.round(coordinates.height);

      // console.log(coordinates)
    },






    // saveGallery() {
    //   this.select = false
    //   this.$emit('saveGallery')
    // },
    onChange({ coordinates, canvas }) {
      this.coordinates = coordinates;


      // console.log(coordinates, canvas);
    }
  },
  mounted() {
    axios.get(apiRoutes('get.images')).then(response => this.images = response.data)
    //console.log(this.portions)
  },


}
</script>

