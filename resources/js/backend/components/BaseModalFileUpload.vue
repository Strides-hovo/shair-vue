<template>
    <str-modal :is-active="ButtonNewPhoto" :HeaderText="HeaderText" @CloseModal="CloseModal">
        <div class="form-group">
            <div class="form-column file-name">
                {{ NewPhoto.image }}
            </div>
            <div class="form-column">
                <base-file-upload @UploadNewFile="UploadNewFile" :type="type">
                    <button class="upload-image">upload</button>
                </base-file-upload>
                <div class="input-btn">
                    <button class="upload-image" @click="CreateImage" :disabled="!NewPhoto.image">Save</button>
                </div>
            </div>
            <div class="form-column">
                <div class="input">
                    <label for="">Alt</label>
                    <input type="text" class="form-control" v-model="NewPhoto.alt">
                </div>
                <div class="input">
                    <label for="">Title</label>
                    <input type="text" class="form-control" v-model="NewPhoto.title">
                </div>

            </div>
        </div>

    </str-modal>
</template>

<script>
import BaseFileUpload from './BaseFileUpload.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'BaseModalFileUpload',
    components: { BaseFileUpload },
    emits: ['CloseModal', 'CreateNewFile'],
    props: {
        HeaderText: '',
        ButtonNewPhoto: false,
        'type': {
            type: String,
         
        }
    },
    data: () => ({
        NewPhoto: { image: null },
    }),
    computed: {
        ...mapGetters({ languageId: 'lang/getLanguageId' })
    },
    methods: {

        UploadNewFile(image) {
            this.NewPhoto.image = image.src
            this.NewPhoto.name = image.name
            this.NewPhoto.language_id = this.languageId
        },

        CreateImage() {
            this.$emit('CreateNewFile', this.NewPhoto)
            this.CloseModal()
            this.NewPhoto = { image: null }
        },

        CloseModal() {
            this.$emit('CloseModal')
        }
    }
}
</script>

<style lang="scss" scoped>
.lang-new__content {
    justify-content: flex-start;
}

.form-group {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 15px;

    .form-column {
        width: 50%;

        .upload-image {
            background: none;
            padding: 10px 15px;
            text-transform: uppercase;
            font-size: 16px;
            border: 1px solid #eee;
            transition: background .5s;
            border-radius: 15px;

            &:disabled:hover {
                background: red;
            }

            &:hover {
                background: #6e8d13c9;
                color: #fff;
            }
        }

        .input-btn {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 5px 0;
        }

        .input {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 5px 0;

            input.form-control {
                border: 1px solid #eee;
                padding: 5px;
            }
        }
    }

    .file-name {
        width: 100%;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
    }

}
</style>