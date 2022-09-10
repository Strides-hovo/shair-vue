<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'BaseMetaInfo',
  props: {
    metaInfo: {
      title: {
        type: String,
        default: 'Shakra',
        required: false
      },
      meta_description: {
        type: String,
        default: 'Shakra',
        required: false
      },
      meta_keywords: {
        type: String,
        default: 'Shakra',
        required: false
      },
    }
  },
  watch: {
    'metaInfo'(val) {
      this.change(val)
    }
  },
  mounted() {
    this.change(this.metaInfo)
  },
  methods: {
    change(metaInfo) {
      if(metaInfo){
        document.title = metaInfo.title
        document.head.querySelector('meta[name="description"]').content = metaInfo.meta_description
        document.head.querySelector('meta[name="keywords"]').content = metaInfo.meta_keywords
      }

    }
  }
}
</script>

