<template>
    <editor :api-key="apiKey"  @change="change" :init="conf" />
</template>

<script>

async function fileUploader(blobInfo, success) {
    let formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());
    let response = await axios.post(apiRoutes('tiny.upload'), formData)
    success(response.data.location)
}

import Editor from '@tinymce/tinymce-vue'
import axios from 'axios';
import apiRoutes from '@/routes/api-routes';

export default {
    name: 'tiny-editor',
    components: { Editor },
    data:() => ({
        apiKey: 'wy3zt36qvhur3o89yifolne6uk3oh3px8tbv2w9s954xkkys',
        conf: {
            min_height: 500,
            menubar: 'file',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste imagetools wordcount'],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            images_upload_handler: fileUploader
        },
    }),

    emits: ['update:content'],
    methods:{
        change(content){
            this.$emit('update:content',content)
        }
    }

}
</script>

