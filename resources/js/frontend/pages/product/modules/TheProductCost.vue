<template>
  <div class="pricelist-modal__cost">
    <div class="pricelist-modal__cost-price">
      {{ cost }} ₪
    </div>
    <div class="pricelist-modal__cost-size" @click="activeWidth = !activeWidth" >
      <base-icon icon='arrow-green' width="18" height="10"/>
      <span>{{ currentSize ?  `${currentSize} x ${activeSize}`: null  }} </span>
      גודל:

      <ul class="pricelist-content__item-dropdown" :class="{active: activeWidth}">
        <li v-for="(width,i) in widths"
            :key="i"
            @click.stop="checkWidth(i)"
        >
          {{ width }}
        </li>

      </ul>
    </div>
    <div class="pricelist-modal__cost-length" @click="activeHeight = !activeHeight">
      <base-icon icon='arrow-green' width="18" height="10"/>
      <span>{{ activeSize }}</span>
      גובה:

      <ul class="pricelist-content__item-dropdown" :class="{active: activeHeight}">
        <li class="height" @click.stop="checkSize('2.1')">2.1</li>
        <li class="height" @click.stop="checkSize('2.3')">2.3</li>
      </ul>
    </div>
    <div class="pricelist-modal__cost-count">
      <button @click="count++">
        <base-icon icon='arrow-green' width="18" height="10"/>
      </button>
      <input type="number" :value="count">
      <button @click="count > 0 ? count-- : 0 ">
        <base-icon icon='arrow-green' width="18" height="10"/>
      </button>
      <span> כמות</span>
    </div>
    <div class="pricelist-modal__cost-btn">
      הוסף לעגלה
    </div>
    <div class="pricelist-modal__cost-item mobile">
      מחיר: ₪2,470
    </div>
    <ul class="pricelist-modal__desc-steps mobile">
      <li>
                <span class="name">
                    בחרו
                    <br>
                    מסגרת
                </span>
        <span class="num">1</span>
        <img src="@img/product/01.png" alt="">
      </li>
      <li>
                <span class="name">
                    בחרו
                    <br>
                    בד לסוכה
                </span>
        <span class="num">2</span>
        <img src="@img/product/02.png" alt="">
      </li>
      <li>
                <span class="name">
                    בחרו
                    <br>
                    סכך
                </span>
        <span class="num">3</span>
        <img src="@img/product/03.png" alt="">
      </li>
      <li>
                <span class="name">
                    בחרו
                    <br>
                    אביזרים
                </span>
        <span class="num">4</span>
        <img src="@img/product/04.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheProductCost',
  data: () => ({
    activeSize: '2.1',
    width: null,
    activeWidth: false,
    activeHeight: false,
    count: 1,
    widthIndex: 0,
  }),
  props: {
    product: {}
  },
  computed: {
    size(){
      return this.product.sizes[this.activeSize] || []
    },

    widths(){
      return this.size.map(size => size.width)
    },

    currentSize(){
      return this.widths[this.widthIndex]
    },

    cost(){
      const cost = this.size.find(s => s.width === this.currentSize && s.status === true)
      if (cost && cost.price){
        return cost.price * this.count
      }
      return 0
    }
  },
  methods: {

    checkSize(height){
      this.activeSize = height
      this.activeHeight = false
    },

    checkWidth(index){
      this.widthIndex = index
      this.width = this.widths[index]
      this.activeWidth = false
    },


  },
  mounted() {
    this.width = this.widths[0] ?? null
  }

}
</script>

