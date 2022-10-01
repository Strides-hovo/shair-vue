import { mapMutations } from "vuex";

export default {

  methods: {

    ...mapMutations(["menu/ADD_CRAMP"]),

    setGrump(){
      const options = {
        cramp: {name: this.pageName},
        names: this.$route.meta["parent"],
      }
      this["menu/ADD_CRAMP"](options)
    }

  },

  mounted(){
    this.setGrump()
  },



};
