<template>
  <file-manager :viewType="viewType"></file-manager>
  <button class="selected" @click="checkImages">Select</button>

</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "Library",
  computed: {
    ...mapGetters({selected: 'fm/selectedItems'}),
    

    viewType() {
      return (this.$store.state.fm[
        this.$store.state.fm.activeManager
      ].viewType = "grid");
    },

    Portions() {
      return this.$store.getters.getPortions;
    },
  },
  methods:{
    checkImages(){
      console.log(this.selected)
    }
  },
 

};
</script>


<style>
[title~="Copy"],
[title~="Cut"],
[title~="Paste"],
[title~="Back"],
[title~="Forward"],
[title~="Hidden"] {
  display: none;
}

.fm {
  width: 100%;
}
</style>