<template>

  <LeftAside
      :is-active="ButtonLeftAside"
      @CloseLeftAside="ButtonLeftAside = false">

    <MyBaseSetting
        page-name="Contact"
        v-model:ButtonLeftAside="ButtonLeftAside"
    />

  </LeftAside>


  <div class="cart-btns" v-if="activeTab === 'branch'">
    <div class="cart-btns__item branches-new-btn btn circle" @click="ButtonNewBranch = true">
      <base-icon icon="add-icon" width="14" height="14"/>
    </div>
  </div>

  <div class="container-content">
    <div class="container-content__top container-content__top_tabs">
      <div class="container-content__top-row">
        <div class="settings-btn products-seo-btn" @click="ButtonLeftAside = true">
          <base-icon icon="setting" width="15" height="16"/>
        </div>

        <LanguageSelect/>

        <div class="container-content__top-title">
          סניפים וצור קשר
        </div>
      </div>
      <div class="container-content__top-row">
        <div class="container-content__tabs">
          <button @click="toggleTab('contact')" class="container-content__tabs-item"
                  :class="{active: activeTab === 'contact'}">
            טקסטים
          </button>
          <button @click="toggleTab('branch')" class="container-content__tabs-item"
                  :class="{active: activeTab === 'branch'}">
            סניפים
          </button>
        </div>
      </div>
    </div>

    <div class="container-content__body" v-if="activeTab === 'branch'">

      <BranchEdit
          v-model:ButtonEdit="ButtonEdit"
          :branch="activeBranch"
      />
      <BranchNew
          v-model:ButtonNewBranch="ButtonNewBranch"
      />
      <table class="orders cupons shipping-cities branches">
        <thead>
        <tr>
          <td>
            שם סניף
          </td>
          <td>
            סדר
          </td>
          <td>
            פעולות
          </td>
        </tr>
        </thead>
        <tbody>
        <BranchItem
            v-for="branch of branches"
            :key="branch.id"
            :branch="branch"
            v-model:ButtonEdit="ButtonEdit"
            v-model:activeBranchId="activeBranchId"
            :count="branches.length"
        />
        </tbody>
      </table>
    </div>

    <div v-if="activeTab === 'contact'">
      <BackendContact v-model:contact="contact"/>
    </div>


  </div>
</template>

<script>

import BranchEdit from "./BranchEdit";
import BranchItem from "./BranchItem";
import BranchNew from "./BranchNew";
import BackendContact from "./Contact";

import MyBaseSetting from "../../components/forms/MyBaseSetting";

import {mapActions, mapGetters} from 'vuex'

export default {
  name: "BackendBranch",
  components: {BackendContact, BranchItem, BranchEdit, BranchNew, MyBaseSetting},

  data: () => ({
    activeTab: 'contact',
    ButtonLeftAside: false,
    ButtonEdit: false,
    activeBranchId: null,
    ButtonNewBranch: false
  }),
  computed: {
    ...mapGetters({
      languageId: 'lang/getLanguageId',
      contactData: 'contact/GET_CONTACT',
      branchData: 'branch/GET_BRANCHES',

    }),

    contact() {
      return this.contactData(this.languageId)
    },
    branches() {
      return this.branchData(this.languageId)?.sort((a,b) => a.sorting - b.sorting)
    },

    activeBranch() {
      const branch = this.branches.find(br => br.id === Number(this.activeBranchId))
      console.log(branch)
          if(branch && ('translate' in branch) ){
            branch.translate.branch_id = branch.id
            return branch
          }
          else{
            return {translate: {branch_id: 1}}
          }
    }

  },
  methods: {
    ...mapActions([
      'contact/SET',
      'branch/SET',
    ]),

    toggleTab(key) {
      this.activeTab = key
    },

  },
  mounted() {
    if (!('id' in this.contact)) {
      this['contact/SET']()
    }
    if (!this.branches.length) {
      this['branch/SET']()
    }
  }

}
</script>

