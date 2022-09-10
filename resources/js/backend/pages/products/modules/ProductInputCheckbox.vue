<template>
  <div class="info-col__body-item">
    <label>
      <input type="checkbox" @change="change" v-model="name">
      <span class="fake"></span>
      <span class="text">
                  נמצא במלאי - מחירון
                </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ProductInputCheckbox",
  emits:['update:name'],
  props:{
    name: {
      required: true,
      type: [String, Boolean ]
    },
    label: {
      required: true,
      type: String
    },
  },
  methods:{
    change(){
      this.$emit('update:name',this.name)
    }
  }
}
</script>

<style scoped>

</style>