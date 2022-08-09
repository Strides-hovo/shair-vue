<template>

  <str-modal :is-active="isActive" :HeaderText="HeaderText" @CloseModal="CloseModal">
    <ul class="list-img-group" @click="ActiveClass">
      <li class="list-item" v-for="img in images" ref="list">
        <img :src="img" alt="" ref="img">
      </li>
    </ul>
    <span>
      <button class="cart-btns__item btn" @click="UpdateImage">Save</button>
    </span>
  </str-modal>

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BaseLibraryImages",
  emits: ['UpdateImage'],

  data: () => ({
    Image: {}
  }),

  props: {
    isActive: false,
    HeaderText: ''
  },

  methods: {
    ...mapActions(['PhotoPage/setImages']),

    ActiveClass(evt) {
      let list = this.$refs.list
      if (!list) return
      list.forEach(li => {
        li.classList.remove('active')
      })

      evt.target.parentElement.classList.add('active')
      const image = evt.target.getAttribute('src')
      this.Image.src = image
      this.Image.name = image.split('/').slice(-1)[0].split('.')[0]

    },

    UpdateImage() {
      this.$emit('UpdateImage', this.Image)
      this.Image = {}
    },
    
    CloseModal() {
      this.$emit('CloseModal')
    }
  },

  computed: {
    ...mapGetters({ images: 'PhotoPage/getImages' }),
  },


  async mounted() {
    if (this.images.length === 0) {
      this['PhotoPage/setImages']()
    }
  }
}
</script>

<style scoped>
.list-img-group {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: center;
  max-height: 500px;
  overflow-y: scroll;
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