<template>
  <StrModal
      :is-active="ButtonNewCategory"
      HeaderText="Добовить новый Категорию "
      @closeModal="closeNewCategoryModal"
      width="600px"
  >
    <div class="container-content__body-info">
      <div class="table-img__info-item">
        <span>Category Name:</span>
        <input type="text" placeholder="סוכה כשרה" v-model="NewPage.translate.name">
      </div>

      <div class="table-img__info-item">
        <p> Slug: </p>
        <input type="text" placeholder="" v-model="NewPage.translate.slug">
      </div>
      <button class="create-btn" @click="addCategory"> Save </button>
    </div>
  </StrModal>


</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data : () => ({
    NewPage: {
      translate: {}
    }
  }),
  props: {
    ButtonNewCategory: false,

  },
  computed: {
    ...mapGetters({languageId: 'lang/getLanguageId'})
  },
  methods: {
    ...mapActions(['category/create']),
    addCategory(){
      this.NewPage.translate.language_id = this.languageId
      this['category/create'](this.NewPage)
      this.closeNewCategoryModal()
    },

    closeNewCategoryModal(){
      this.$emit('update:ButtonNewCategory',false)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-content__body-info {
  display: flex;
  flex-direction: column;
  align-items: baseline;

  .table-img__info-item {
    margin: 5px 0;
    width: 300px;

    .sorting {
      padding: 10px;
      width: 150px;
    }

    input,
    .label {
      border-bottom: 1px solid #87a8c9;
      width: 100%;
      display: inline-block;
      padding: 10px 0;
      max-width: 360px;
    }
  }

  .create-btn {
    padding: 7px 15px;
    background: #82AD00;
    border: 1px solid #FFFFFF;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.35));
    border-radius: 40px;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    width: 40%;
    margin-top: 20px;
  }
}
</style>