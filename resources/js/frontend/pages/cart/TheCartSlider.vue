<template>
    <div class="cart-slider">
        <div class="cart-slider__title title">
            <span></span>
           {{ title }}
            <span></span>
        </div>
        <div class="cart-slider__item">
            <div class="swiper-wrapper">
                <div class="swiper-slide pricelist-content__item" v-for="product in products" :key="product.id">
                    <div class="pricelist-content__item-img">
                        <span class="tip">
                            קנה קבל
                            <div class="tip-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate ullam quidem
                                tenetur nam
                                exercitationem commodi! Quasi corrupti sint doloremque blanditiis odit aperiam quisquam?
                                Facere facilis
                                culpa debitis expedita fuga.
                            </div>
                        </span>
                        <img src="@img/pricelist/01.jpg" alt="">
                        <span class="pricelist-content__item-price_mob"> ₪ {{ product.cost }} מחיר:  </span>
                    </div>
                    <div class="pricelist-content__item-text">
                        <div class="pricelist-content__item-title"> {{ product.translate.name }}</div>
                        <div class="pricelist-content__item-desc">
                            {{ product.translate.short_description }}
                        </div>
                        <div class="pricelist-content__item-link">
                            read more
                        </div>
                    </div>
                    <div class="pricelist-content__item-char bigbtn">
                        <div class="pricelist-content__item-price">₪ {{ product.cost }} מחיר: </div>
                        <div class="pricelist-content__item-length">
                            <base-icon icon="arrow-green" width="18" height="10" />
                            2.30<span>גובה:</span>
                            <ul class="pricelist-content__item-dropdown">
                                <li>
                                    40x40
                                </li>
                               
                            </ul>
                        </div>
                        <div class="pricelist-content__item-size">
                            <base-icon icon="arrow-green" width="18" height="10" />
                            
                            40x40<span>גודל:</span>
                            <ul class="pricelist-content__item-dropdown">
                                <li>40x40</li>
                                
                            </ul>
                        </div>
                        <div class="pricelist-content__item-buy">הוסף לעגלה</div>
                    </div>
                </div>
                
            </div>
            <div class="cart-slider-button-prev">
                <img src="@img/cart/slider-btn.svg" alt="">
            </div>
            <div class="cart-slider-button-next">
                <img src="@img/cart/slider-btn.svg" alt="">
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'TheCartSlider',
    props:{
        title: '',
        products: {
            default: []
        }
    }
}
</script>

<style lang="scss" scoped>

</style>