<template>

  <div class="gallery">
    <file-manager v-if="isActive" />

    <div class="order-row">
      <div class="table-img__info">
        <div class="table-img__info-item"><span>Alt:</span><input type="text" placeholder="סוכה כשרה"
            v-model="NewGallery.video_alt" ></div>
        <div class="table-img__info-item"><span>Title:</span><input type="text" placeholder="סוכה כשרה"
            v-model="NewGallery.video_title" ></div>
        <div class="table-img__info-item"><span>File name:</span><input type="text" placeholder="סוכה-כשרה6667"
            v-model="NewGallery.video_name" ></div>
      </div>
      <div class="sorting">

        <label> сортировка</label>
        <select v-model="NewGallery.sorting" >
          <option :value="count" v-for="count in galleriesCount || 1" :key="count">{{ count }}</option>
        </select>

      </div>
      <div class="btns">
        <button class="cart-btns__item btn" @click="CreateGallery">Save</button>
      </div>

    </div>
  </div>




</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StrNewGallery",

  props: {
    galleriesCount: {
      type: Number,
      default: 0
    },

    NewGallery: Object,
     isActive: {
      type: Boolean,
      default: false
    },

  },

  emits: ['CreateGallery'],

  computed: {
    ...mapGetters({ selected: 'fm/selectedItems' }),
  },

  methods: {

    CreateGallery() {
      if(this.selected.length < 1){
        alert('check video')
      }
      else if(!this.NewGallery.video_alt){
        alert('check alt')
      }
      else if(!this.NewGallery.video_title){
        alert('check video_title')
      }
      else{
        this.NewGallery.video = this.selected[0].path
        this.$emit('CreateGallery' )
      }
    },

  },

}

</script>

<style scoped lang="scss">
.order-row {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin: 15px;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  border: 1px solid;
  padding: 15px;

  .table-img__info-item {
    padding: 5px;
    border: 1px solid;
  }

  input {
    background: none;
  }

  .sorting {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
  }

select {
      width: 100px;
      padding: 5px;
      border: 1px solid;
    }

  .btns{
    margin-top: 15px;
  }
}
</style>