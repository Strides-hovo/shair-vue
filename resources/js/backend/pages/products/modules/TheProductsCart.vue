<template>
    <tr class="order-row">
        <td>
            <label>
                <input type="checkbox" 
                v-model="selectedIds" 
                @change="check" 
                :value="product.id"
                />
                <span class="fake"></span>
            </label>
        </td>
        <td>
            <img :src="product.photos[0].image" alt="" v-if="product.photos[0]" />
        </td>
        <td>{{ product.translate.name }}</td>
        <td>{{ product.category?.translate.name }}</td>
        <td>
            <div>
                <router-link :to="{ name: 'BackendProduct', params: { id: product.id } }">
                    <span class="packages-copy-btn" @click.prevent="copy">
                        <img src="@img/icons/copy.svg" alt="" />שכפול
                    </span>
                    edit <img src="@img/icons/more-arrow.svg" alt="" />
                </router-link>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'TheProductsCart',
    emits:['update:selectedIds','copy'],
    props: {
        product: {},
        selectedIds: {
            default: []
        }
    },
    methods: {
        check() {
            this.$emit('update:selectedIds', this.selectedIds)
        },
        copy(){
            this.$emit('copy',this.product)
        }
    }
}
</script>

