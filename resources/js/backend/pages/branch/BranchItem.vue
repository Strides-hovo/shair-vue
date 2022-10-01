<template>
  <tr class="order-row">
    <td>
      {{ branch.translate?.name }}
    </td>
    <td>
      <label>
        <select v-model="branch.sorting" @change="updateSorting">
          <option :value="sort" v-for="sort of count" :key="sort">
            {{ sort }}</option>
        </select>
      </label>
    </td>
    <td>
      <div>
        <span class="articles-delete-btn" @click="deleteBranch">
          <base-icon icon="delete-ico" width="21" height="22" />
        </span>
        <span class="branches-edit-btn" @click="openModal">

          <base-icon icon="edit-ico" width="16" height="22" />
          עריכה</span>
        <span @click="updateBranch">
          <base-icon v-if="branch.status" icon="show" width="26" height="16" />
          <base-icon v-else icon="not_show" width="26" height="16" />
          להציג
        </span>
      </div>
    </td>
  </tr>
</template>

<script>
import BaseIcon from "../../components/UI/BaseIcon";
import {mapActions} from "vuex";

export default {
  name: "BranchItem",
  emits:['update:ButtonEdit','update:activeBranchId'],
  components: {BaseIcon},
  props:{
    ButtonEdit: false,
    branch: {},
    count: 0
  },

  methods:{
    ...mapActions(['branch/UPDATE','branch/DESTROY']),
    openModal(){
      this.$emit('update:ButtonEdit',true)
      this.$emit('update:activeBranchId',this.branch.id)
    },
    updateBranch() {
      this.branch.status = !this.branch.status
      this['branch/UPDATE'](this.branch)
    },

    updateSorting() {
      this['branch/UPDATE'](this.branch)
    },

    deleteBranch(){
      this['branch/DESTROY'](this.branch)
    }
  }
}
</script>

