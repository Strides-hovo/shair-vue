<template>
    <div class="cart ">
        <div class="cart__title title">
            <span></span>
            עגלת קניות
            <span></span>
        </div>

        <div class="cart-body">
            <div class="cart-body__top">
                <div class="cart-body__col">הסרה</div>
                <div class="cart-body__col">סה"כ</div>
                <div class="cart-body__col">כמות</div>
                <div class="cart-body__col">תיאור מוצר</div>
                <div class="cart-body__col">תמונת מוצר</div>
            </div>
            <div class="cart-body__content">
                
                <div class="cart-body__item" v-for="order in orders" :key="order.id">
                    <div class="cart-body__col">
                        <button class="cart-body__item-remove">
                            <base-icon icon="trash" width="35" height="37" />
                        </button>
                    </div>
                    <div class="cart-body__col cart-body__item-price">
                        {{ order.cost }} ₪
                    </div>
                    <div class="cart-body__col">
                        <div class="cart-body__item-value">
                            <button>
                                <base-icon icon="cart-pluse" width="17" height="17" />
                            </button>
                            <input type="text" value="1">
                            <button>
                                <base-icon icon="cart-minuse" width="17" height="1" />
                            </button>
                        </div>
                    </div>
                    <div class="cart-body__col">
                        <div class="cart-body__item-name">
                            {{ getProduct(order.product_id).translate.short_description }}
                            <br>
                            <!-- {{ order.product.size.width }} -->
                            <br>
                            <!-- {{ order.product.height }} -->
                        </div>
                    </div>
                    <div class="cart-body__col">
                        <div class="cart-body__item-img">
                            <img 
                            :src="photo.image" 
                            :alt="photo.translate.alt"
                            :title="photo.translate.title"
                            >
                            <span><img src="@img/icons/lens-cart.svg"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'FrontCart',
    data: () => ({
        product: {},
        photo2: {}
    }),
    computed: {
        ...mapGetters({
            orders: 'cart/GET_CART', 
            productData: 'products/GET_PRODUCT',
            language: 'lang/GET_SITE_LANGUAGE',
        }),
        photo(){
            return this.product.photos.find(photo => photo.by_default) || this.product.photos[0]
        }

    },
    methods: {
        ...mapActions(['cart/SET','products/set']),

        getProduct(id){
            this.product = this.productData(id,this.language.id)
            return this.product
        },

        getPhoto(id){
            const product = this.productData(id,this.language.id)
            console.log(product.photos);
            
                return product.photos.find(photo => photo.by_default) || product.photos[0]
            
            
        }

    },
    mounted () {
        if (! ('id' in this.product)) {
            this['products/set']()
        }
        this.getPhoto(5)
    },
}
</script>

