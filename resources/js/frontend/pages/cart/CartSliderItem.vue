<template>

  <div class="slider-item pricelist-content__item2" >
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

      <img :src="photo.image"
           :alt="photo.translate?.alt"
           :title="photo.translate?.title"
      >
      <span class="pricelist-content__item-price_mob"> ₪ {{ cost }} מחיר:  </span>
    </div>
    <div class="pricelist-content__item-text">
      <div class="pricelist-content__item-title"> {{ product.translate.name }}</div>
      <div class="pricelist-content__item-desc">
        {{ product.translate.short_description }}
      </div>

       <router-link
           class="pricelist-content__item-link"
           :to="{name: 'Product', params: {id: product.id, slug: product.translate.slug } }" >
         {{ $trans._lang('read more') }}
       </router-link>

    </div>
    <div class="pricelist-content__item-char" :class="{bigbtn: gift }">
      <div class="pricelist-content__item-price">₪ {{ cost }} מחיר:</div>
      <div class="pricelist-content__item-length" @click="activeHeight = !activeHeight">
        <img src="@img/icons/arrow-green.svg" alt="next">
        <span>{{ activeSize }}</span>
        <span>גובה:</span>

        <ul class="pricelist-content__item-dropdown" :class="{active: activeHeight}">
          <li class="height" @click.stop="checkSize('2.1')">2.1</li>
          <li class="height" @click.stop="checkSize('2.3')">2.3</li>
        </ul>

      </div>
      <div class="pricelist-content__item-size" @click="activeWidth = !activeWidth">
        <img src="@img/icons/arrow-green.svg" alt="next">
        {{ currentSize ? `${currentSize} x ${activeSize}`: null }}
          <span>גודל:</span>

        <ul class="pricelist-content__item-dropdown" :class="{active: activeWidth}">
          <li v-for="(width,i) in widths" :key="i" @click.stop="checkWidth(i)">
            {{ width }}
          </li>
        </ul>

      </div>
      <button class="pricelist-content__item-buy" @click="addToCart">הוסף לעגלה</button>
      <div class="pricelist-content__item-value" v-if="!gift">
        <button class="pricelist-item-value-inc" @click="quantity++">
          <img src="@img/icons/arrow-green.svg" alt="prev">
        </button>
        <input type="number" :value="quantity">
        <button class="pricelist-item-value-dec" @click="quantity > 1 ? quantity-- : 0 ">
          <img src="@img/icons/arrow-green.svg" alt="next">

        </button>
        <span>כמות</span>
      </div>
    </div>
  </div>

</template>

<script>
import product from "../../mixins/product";

export default {
  name: "CartSliderItem",
  mixins: [product],
  props:{
    gift: false,
    product: {}
  },
  computed:{
    photo() {
      if (this.product){
        return this.product.photos?.find(photo => photo.by_default) || this.product.photos ? this.product.photos[0] : {}
      }
    },
  },


}
</script>

<style >
  .pricelist-content__item-img,
  .pricelist-content__item-text{
    flex-grow: 1;
  }
  .pricelist-content__item-desc {
    max-height: 40px;
    overflow: hidden;
  }
</style>