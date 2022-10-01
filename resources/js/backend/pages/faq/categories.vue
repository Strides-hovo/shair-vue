<template>
  <div class="cart-btns">
    <button class="cart-btns__item halahot-new-btn btn circle" @click="ButtonAdd=true">
      <base-icon icon="add-icon" width="14" height="14" />
    </button>

  </div>
  <div class="container-content">
    <div class="container-content__top">
      <LanguageSelect />
      <div class="container-content__top-title">
        עמודי תוכן
        <span>שאלות נפוצות</span>
      </div>
    </div>
    <div class="container-content__body">

      <table class="orders cupons shipping-cities halahot">
        <thead>
        <tr>
          <td>
            כותרת
          </td>

          <td>
            פעולות
          </td>
        </tr>
        </thead>
        <tbody>
            <Category v-model:ButtonAdd="ButtonAdd" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import BaseIcon from "../../components/UI/BaseIcon";
import Category from "./category";

import {mapGetters,mapActions} from 'vuex'
export default {
  name: "categories",
  components: {Category, BaseIcon},
  computed: {
    name() {
      return this.data
    }
  },
  data() {
    return {
      ButtonAdd: false
    }
  },
  methods: {
    name() {

    }
  },
  mutations: {

  }

}
</script>

