<template>
  <table class="orders products productspage product-products product-images">
    <thead>
      <tr>
        <td>
          <label class="check">
            <input type="checkbox"  v-model="selectAll" @change="CheckGallery">
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


      <tr class="order-row"
          v-for="gallery in videoGallery.galleries"
          :key="gallery.id">
        <td>
          <label class="check">
            <input type="checkbox"
                   v-model="selectedGalleryIds"
                   :value="gallery.id"
                   @change="CheckGallery"
            >
            <span class="fake"></span>
          </label>
        </td>
        <td>
          <div class="table-img">
            <video :src="gallery.video" controls width="150"></video>

            <div class="table-img__title" @click="ChangeVideo(gallery.id)">שינוי תמונה
              <img src="@img/icons/edit-ico.svg" alt="">
            </div>
          </div>
        </td>
        <td>
          <div class="table-img__info">
            <div class="table-img__info-item">
              <span>Alt:</span>
              <input type="text" placeholder="סוכה כשרה"
                     v-model="gallery.video_alt"
                      @change="UpdateGalleryItem(gallery.id)"
              >
            </div>
            <div class="table-img__info-item">
              <span>Title:</span>
              <input type="text" placeholder="סוכה כשרה"
                     v-model="gallery.video_title"
                @change="UpdateGalleryItem(gallery.id)"
              >
            </div>
            <div class="table-img__info-item">
              <span>File name:</span>
              <input type="text" placeholder="סוכה-כשרה6667"
                     v-model="gallery.video_name"
                @change="UpdateGalleryItem(gallery.id)"
              >
            </div>
          </div>
        </td>
        <td>
          <label>
            <select v-model="gallery.sorting">
              <option :value="count" v-for="count in videoGallery.galleries.length" :key="count"
                @change="UpdateGalleryItem(gallery.id)">{{ count }}
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

  <str-modal :is-active="ButtonEditGallery" @CloseModal="CloseModal" HeaderText="" :width="'600px'">
    <ul class="list-img-group" @click="ActiveClass">
      <li class="list-item" v-for="video in videos" ref="list">
        <video :src="video" ></video>

      </li>
    </ul>
    <span>
      <button class="cart-btns__item btn" @click="UpdateVideo">Save</button>
    </span>

  </str-modal>

</template>

<script>
import axios from 'axios';
import apiRoutes from '@/routes/api-routes';

export default {
  name: "str-table",

  props: {
    videoGallery: {
      type: Object,
      required: true
    },
    selected: {
      type: Array
    }
  },

  emits: ['UpdateGalleryItem','UpdateVideo','update:selected'],

  data: () => ({

    showIcon: require('@img/icons/show.svg').default,
    unshow: require('@img/icons/close.svg').default,

    ButtonEditGallery: false,
    videos: [],
    Gallery: {},
    selectedGalleryIds: []
  }),

  computed: {

    selectAll: {
      get: function () {
        return this.videoGallery.galleries ? this.selectedGalleryIds.length === this.videoGallery.galleries.length : false;
      },
      set: function (value) {
        let selected = [];
        if (value) {
          this.videoGallery.galleries.forEach(function (g) {
            selected.push(g.id);
          });
        }
        this.selectedGalleryIds = selected;
      }
    }
  },

  methods: {
    UpdateGalleryItem(id) {
      this.$emit('UpdateGalleryItem', id)
    },

    ChangeVideo(id) {
      this.ButtonEditGallery = true;
      this.Gallery.id = id
    },

    UpdateVideo() {
     this.$emit('UpdateVideo',this.Gallery)
      this.ButtonEditGallery = false;
    },

    CloseModal() {
      this.ButtonEditGallery = false
    },

    VideosSetSize() {
      let videos = this.$refs.video;
      videos.forEach(img => {
        if (img.width < 80 || img.height < 90) {
          let offset = (100 - img.height) / img.height + 1
          img.style.transform = `scale(${offset})`
        }
      });
    },

    ActiveClass(evt) {
      let list = this.$refs.list

      list.forEach(li => {
        li.classList.remove('active')
      })

      evt.target.parentElement.classList.add('active')
      this.Gallery.video = evt.target.getAttribute('src')
    },

    CheckGallery(){
      this.$emit('update:selected',this.selectedGalleryIds)
    }

  },

  async mounted() {
    this.videos = await axios.get(apiRoutes('get.images','video')).then(r => r.data)

  }
}
</script>

<style>
.list-img-group {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: center;
}

.list-item {
  width: 100px;
  height: 100px;
  margin: 5px;
  border: 1px solid;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.list-item.active {
  border: 4px solid green;
}

.list-item img {
  width: 100%;
}
</style>