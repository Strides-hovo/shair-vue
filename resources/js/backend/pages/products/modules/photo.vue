<template>
  <tr class="order-row">
    <td>
      <label class="check">
        <input type="checkbox" 
        :value="photo.id"
        @change="Check" 
        v-model="selectedItem"

        >
        <span class="fake"></span>
      </label>
    </td>
    <td>
      <div class="table-img">
        <img :src="photo.image" alt="">
        <div class="table-img__title" @click="ButtonImageModal = true">
          שינוי תמונה
          <base-file-upload @UploadNewFile="UploadNewFile">
            <img src="@img/icons/edit-ico.svg" alt="">
          </base-file-upload>
        </div>
      </div>
    </td>
    <td>
      <div class="table-img__info">
        <div class="table-img__info-item">
          <span>
            Alt:
          </span>

          <input type="text" placeholder="סוכה כשרה" v-model="photo.translate.alt" @change="update">
        </div>
        <div class="table-img__info-item">
          <span>
            Title:
          </span>
          <input type="text" placeholder="סוכה כשרה" v-model="photo.translate.title" @change="update">
        </div>
        <div class="table-img__info-item">
          <span>
            File name:
          </span>
          <input type="text" placeholder="סוכה-כשרה6667" v-model="photo.name" @change="updateName">
        </div>
      </div>
    </td>
    <td>
      <label>
        <select v-model="photo.sorting" @change="update">
          <option :value="i" v-for="i in count" :key="i">{{ i }}</option>
        </select>
      </label>
    </td>
    <td>
      <label class="radio">
        <input type="radio" name="product-img" :checked="photo.by_default" @change="changeByDefault">
        <span class="fake"></span>
      </label>
    </td>
  </tr>

</template>

<script>


import { mapActions, mapGetters, mapMutations } from "vuex";
import BaseFileUpload from "@backend/components/BaseFileUpload";

export default {

  name: "photo",
  components: { BaseFileUpload },
  emits: ['updateRadioButtons','update:selectedItem'],

  props: {
    photo: Object,
    count: Number,
    selectedItem: null
  },

  data: () => ({
    ButtonImageModal: false,
    // selectedItem: Number
  }),

  computed: {
    ...mapGetters({languageId: 'lang/getLanguageId' }),

  },

  methods: {

    ...mapActions(['products/UpdatePhoto']),

    UploadNewFile(image) {
      this.photo.image = image.src
      this.photo.name = image.name

      this.update()
    },

    changeByDefault(evt) {
      this.$emit('updateRadioButtons')
      this.photo.by_default = evt.target.value === 'on' ? 1 : 0
      this.update()
    },

    update() {
      this.photo.translate.language_id = this.languageId

      this['products/UpdatePhoto'](this.photo)
    },

    updateName(){
      this.photo.newName = true
      this.update()
      delete this.photo.newName
    },
    Check() {
      this.$emit('update:selectedItem',this.selectedItem)

    }
  },


 
}
</script>

<style scoped>
</style>