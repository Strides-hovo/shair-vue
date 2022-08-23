<template>
  <svg :width="width" :height="height" :fill="fill ?? 'none'" xmlns="http://www.w3.org/2000/svg" v-html="path">
  </svg>

</template>

<script>
import icons from "./icons";

export default {

  name: 'BaseIcon',
  props: ['icon','fill','width','height'],

  data() {
    return {
      path: icons[this.icon]
    }
  },
  mounted() {

  }
}
</script>

