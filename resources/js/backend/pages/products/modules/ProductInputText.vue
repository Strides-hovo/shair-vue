<template>
  <div class="info-item">
        <span>
          {{ label }}
        </span>
    <input type="text" @input="change" :placeholder="label" v-model="name">
  </div>
</template>

<script>
export default {
  name: "ProductInput",
  emits:['update:name'],
  props: {
    name: {
      required: true,
      default: null
    },
    label: {
      required: true,
      default: null
    },
  },
  methods:{
    change(){
      this.$emit('update:name',this.name)
    }
  }
}
</script>

