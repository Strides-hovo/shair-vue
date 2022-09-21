import {mapMutations} from "vuex";
import {BackendErrorHandler} from "../../helpers";

export default {
    data: () => ({
        activeSize: '2.1',
        width: null,
        activeWidth: false,
        activeHeight: false,
        quantity: 1,
        widthIndex: 0,
    }),
    props: {
        product: {}
    },
    computed: {
        sizes() {
            let sizes = this.product.sizes[this.activeSize]
            if (sizes && sizes.length){
                sizes = sizes
                    .filter(size => size.status)
                    .sort((a,b) => a.sorting - b.sorting)
            }
            return sizes || []
        },

        widths() {
            return this.sizes.map(size => size.width)
        },

        currentSize() {
            return this.widths[this.widthIndex]
        },

        cost() {
            const cost = this.sizes.find(s => s.width === this.currentSize && s.status === true)
            if (cost && cost.price) {
                return cost.price * this.quantity
            }
            return 0
        }
    },
    methods: {

        ...mapMutations(['cart/ADD']),

        checkSize(height) {
            this.activeSize = height
            this.activeHeight = false
        },

        checkWidth(index) {
            this.widthIndex = index
            this.width = this.widths[index]
            this.activeWidth = false
        },

        addToCart() {
            const product_size = this.sizes
                .find(size => size.width === this.currentSize && size.height === parseFloat(this.activeSize))

            if(this.cost === 0){
                const response = {
                    data: {
                        message: this.$trans._lang('Product Size Noting')
                    }
                }
                BackendErrorHandler({response})
            }
            else{
                const product = {
                    quantity: this.quantity,
                    product_id: this.product.id,
                    category_id: this.product.category_id,
                    discount: 0,
                    product_size_id: product_size ? product_size.product_size_id : null,
                    width: this.currentSize,
                    height: this.activeSize,
                    price: product_size.price,
                    delivery_rent: product_size.delivery_rent,
                    delivery_sale: product_size.delivery_sale
                }
                this['cart/ADD'](product)
            }


        }
    },
    mounted() {
        this.width = this.widths[0] ?? null
    }
}