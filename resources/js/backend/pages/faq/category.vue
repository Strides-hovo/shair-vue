<template>

 <StrModal
     HeaderText="Add Category Faq"
     width="300"
     :isActive="ButtonAdd"
     @CloseModal="$emit('update:ButtonAdd',false)"

 >

   <div class="new">
     <input type="text" class="name">
     <button > Create </button>
   </div>



 </StrModal>
  <tr class="order-row">
    <td><input type="text"></td>
    <td>
      <div>
         <span class="halahot-delete-btn">
           <base-icon icon="delete-ico" width="21" height="22"/>
         </span>
        <span class="halahot-edit-btn">
          <base-icon icon="edit-ico" width="16" height="22"/>
                  עריכה
        </span>
      </div>
    </td>
  </tr>
</template>

<script>
import StrModal from "../../components/UI/StrModal";
export default {
  name: "category",
  components: {StrModal},
  props: {
    ButtonAdd: {
      type: Boolean,
      default: false
    },
  },

}
</script>

<style >

table > tbody .order-row > td:first-child{
  width: 90%;
}

input{
  border-bottom: 1px solid #87A8C9;
}

.lang-new .lang-new__content-top {
  position: absolute;
  top: 0;
  right: 0;
}


table.orders.cupons  .new {
  display: block;
  justify-content: center !important;
  align-items: center;
}


</style>