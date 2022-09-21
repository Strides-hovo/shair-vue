<template>
  <tr class="order-row">
    <td>
      <label>
        <input type="checkbox"
               v-model="selectedIds"
               :value="coupon.id"
               @change="check"
        >
        <span class="fake"></span>
      </label>
    </td>
    <td>
      {{ coupon.translate?.name }}
    </td>
    <td>
       {{ coupon.operation === 'sum' ? '' : '%' }} {{ coupon.discount }}
    </td>
    <td>
      <div>
        <span class="cupons-delete-btn" @click="DeleteCoupon">
              <base-icon icon="delete-ico" width="21" height="22"/>
        </span>
        <span class="cupons-edit-btn" @click="EditButton">
          <base-icon icon="edit-ico" width="16" height="22"/>
            עריכה
        </span>
        <span class="cupons-show-btn" @click="ShowHideCoupon">
          <base-icon icon="show" width="26" height="16" v-if="coupon.status" />
          <base-icon icon="not_show" width="26" height="17" v-else />

          להציג
        </span>
        <span class="cupons-copy-btn" @click="Copy(coupon)">
          <base-icon icon="copy" width="21" height="22"/>
          שכפול
        </span>
      </div>
    </td>
  </tr>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "CouponItem",
  emits:['OpenEditModal','update:selectedIds'],
  props:{
    coupon: {},
    selectedIds: {
      default: []
    }
  },
  methods:{
    ...mapActions(['coupon/UPDATE','coupon/DESTROY','coupon/COPY']),
    EditButton(){
      this.$emit('OpenEditModal',this.coupon)
    },
    ShowHideCoupon(){
      this.coupon.status = !this.coupon.status
      this['coupon/UPDATE'](this.coupon)
    },
    check(){
      this.$emit('update:selectedIds', this.selectedIds)
    },
    DeleteCoupon(){
      this['coupon/DESTROY']([this.coupon.id])
    },
    Copy(coupon){
      this['coupon/COPY'](coupon)
    }
  }


}
</script>

<style scoped>

</style>