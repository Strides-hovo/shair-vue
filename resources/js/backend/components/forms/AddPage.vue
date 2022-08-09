<template>
    <str-modal :is-active="ButtonNewPageModal" HeaderText="Добовить новый страницу" @closeModal="closeModal">

        <div class="container-content__body-info">
            <div class="table-img__info-item">
                <span>Page Name:</span>
                <input type="text" placeholder="סוכה כשרה" v-model="NewPage.translate.name">
            </div>
            <div class="table-img__info-item">
                <span>Sorting:</span>
                <label class="label">
                    <select v-model="NewPage.sorting" class="sorting">
                        <option :value="sort" v-for="sort in (SortLength + 1)">{{ sort }}</option>
                    </select>
                </label>
                <hr>
            </div>

            <div class="table-img__info-item">
                <p> Slug: </p>
                <input type="text" placeholder="" v-model="NewPage.translate.slug">
            </div>
            <div class="table-img__info-item">
                <span>Meta Title:</span>
                <input type="text" placeholder="Hebrew" v-model="NewPage.translate.meta_title">
            </div>
            <button class="create-btn" @click="saveNewPage"> Save </button>
        </div>

    </str-modal>
</template>

<script>
export default {
    name: 'add-page',
    emits: ['closeModal', 'saveNewPage'],
    props: {
        ButtonNewPageModal: false,
        HeaderText: {
            type: String,
            default: "Добовить новый страницу"
        },
        NewPage: Object,
        SortLength: Number
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        saveNewPage() {
            this.$emit('saveNewPage', this.NewPage)
        }
    }

}
</script>

<style lang="scss" scoped>
.container-content__body-info {
    display: flex;
    flex-direction: column;

    .table-img__info-item {
        margin: 5px 0;

        .sorting {
            padding: 10px;
            width: 150px;
        }

        input,
        .label {
            border-bottom: 1px solid #87a8c9;
            width: 100%;
            display: inline-block;
            padding: 10px 0;
            max-width: 360px;
        }
    }

    .create-btn {
        padding: 7px 15px;
        background: #82AD00;
        border: 1px solid #FFFFFF;
        filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.35));
        border-radius: 40px;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        width: 40%;
        margin-top: 20px;
    }
}
</style>