<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'BaseMetaInfo',
    props: {
        metainfo: {
            title: {
                type: String,
                default: ''
            },
            meta_description: {
                type: String,
                default: ''
            },
            meta_keywords: {
                type: String,
                default: ''
            },
        }
    },
    watch: {
        'metainfo'(val) {
            this.change(val)
        }
    },
    mounted() {
        this.change(this.metainfo)
    },
    methods: {
        change(metainfo) {
            document.title = metainfo.title
            document.head.querySelector('meta[name="description"]').content = metainfo.meta_description
            document.head.querySelector('meta[name="keywords"]').content = metainfo.meta_keywords
        }
    }
}
</script>

