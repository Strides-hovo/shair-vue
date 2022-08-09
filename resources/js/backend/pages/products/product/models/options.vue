<template>
  <div class="container-content__body container-content__body_info">
    <div class="container-content__body-info article product-params">
      <div class="info-row">

        <div class="info-item small">
          <span>
            קטגוריה:
          </span>
          <label>
            <select @change="SelectCategory" v-model.number="category_id">
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.translate.name }}
              </option>
            </select>
          </label>
        </div>
      </div>
      <div class="info-item small">
        <span>
          שם ב-Hebrew:
        </span>
        <input type="text" placeholder="אנא הזינו שם ב-Hebrew" v-model="product.translate.name">
      </div>
      <div class="info-item">
        <span>
          תיאור קצר ב-Hebrew:
        </span>
        <input type="text" placeholder="אנא הזינו תיאור קצר ב-Hebrew" v-model="product.translate.short_description">
      </div>
      <div class="info-item">
        <span>
          תיאור ארוך ב-Hebrew:
        </span>
        <input type="text" placeholder="אנא הזינו תיאור ארוך ב-Hebrew" v-model="product.translate.description">
      </div>
      <div class="info-item">
        <span>
          יתרונות המוצר ב-Hebrew:
        </span>
        <input type="text" placeholder="אנא הזינו יתרונות המוצר ב-Hebrew" v-model="product.translate.advantage">
      </div>
      <div class="info-item">
        <span>
          <b>{{ Instruction_file }}</b> קובץ הוראות בפורמט PDF:
        </span>

        <base-file-upload @UploadNewFile="UploadPdf" type="application/pdf">
          <label class="file-upload">
            <span>
              הוספת קובץ
            </span>
          </label>
        </base-file-upload>

      </div>
      <div class="info-row">
        <div class="info-col">
          <div class="info-col__title">
            אפשרויות נוספות:
          </div>
          <div class="info-col__body">
            <div class="info-col__body-item">
              <label>
                <input type="checkbox" v-model="product.sale">
                <span class="fake"></span>
                <span class="text">
                  נמצא במלאי - מחירון
                </span>
              </label>
            </div>
            <div class="info-col__body-item">
              <label>
                <input type="checkbox" v-model="product.rent">
                <span class="fake"></span>
                <span class="text">
                  נמצא במלאי - השכרה
                </span>
              </label>
            </div>
            <div class="info-col__body-item">
              <label>
                <input type="checkbox" v-model="product.status">
                <span class="fake"></span>
                <span class="text">
                  נמצא בעמוד מוצרים
                </span>
              </label>
            </div>
            <div class="info-col__body-item">
              <label>
                <input type="checkbox" v-model="product.guarantee">
                <span class="fake"></span>
                <span class="text">
                  יש אחריות למוצר זה
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="info-col">
          <div class="info-col__title">
            תוויות:
          </div>
          <div class="info-col__body">
            <div class="info-col__body-item" v-for="flag of flags" :key="flag.key">
              <label class="radio">
                <input type="radio" :checked="product.flag === flag.key" name="flag" :value="flag.key"
                  v-model="product.flag">
                <span class="fake"></span>
                <span class="text">
                  {{ flag.val }}
                </span>
              </label>
            </div>


          </div>
        </div>
      </div>
      <div class="info-row">
        <div class="product-params__type">
          <div class="product-params__type-item">
            <label>
              <input type="radio" :checked="!product.dimension" name="dimension">
              <span class="fake"></span>
              <span class="text">
                מוצר ללא מידות
              </span>
            </label>
          </div>
          <div class="product-params__type-item">
            <label>
              <input type="radio" :checked="product.dimension" name="dimension">
              <span class="fake"></span>
              <span class="text">
                מוצר עם מידות
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="product-table-info">
        <div class="product-table-info__tabs">
          <div class="product-table-info__tabs-item" :class="{ active: activeTab === '2.1' }" @click="activeTab = '2.1'">
            גובה 2.10
          </div>
          <div class="product-table-info__tabs-item" :class="{ active: activeTab === '2.3' }" @click="activeTab = '2.3'">
            גובה 2.30
          </div>
        </div>
        <div class="product-table-info__bottom">
          <div class="product-table-info__title">
            מחירים לפי גדלים
          </div>
          <div class="product-table-info__btns">
            <div class="product-table-info__btns-item">ייבוא קובץ Excel</div>
            <div class="product-table-info__btns-item">העלאת קובץ Excel</div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>
              <label>
                <input type="checkbox">
                <span></span>
              </label>
            </td>
            <td>גודל</td>
            <td>קוד לחשבונית</td>
            <td>SKU</td>
            <td>מחיר</td>
            <td>
              מוצג באתר
            </td>
            <td>
              מחיר משלוח לרכישה
            </td>
            <td>מחיר משלוח להשכרה</td>
          </tr>
        </thead>
        <tbody>

          <tr v-for="size in sizes" :key="size.id">
            <td>
              <label>
                <input type="checkbox">
                <span></span>
              </label>
            </td>
            <td>
              2X2
            </td>
            <td>
              <input type="text" v-model.number="size.width">
            </td>
            <td>
              <input type="text" v-model.number="size.sku">
            </td>
            <td>
              <input type="text" v-model.number="size.price">
            </td>
            <td>
              <label>
                <input type="checkbox" v-model="size.status">
                <span></span>
              </label>
            </td>
            <td>
              <input type="text" v-model.number="size.price_delivery_sale">
            </td>
            <td>
              <input type="text" v-model.number="size.price_delivery_rent">
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
  <div class="cart-btns">
    <button class="cart-btns__item btn" @click="UpdateProduct">
      שמור
    </button>
  </div>
</template>

<script>
import BaseFileUpload from "../../../../components/BaseFileUpload";
import { mapGetters } from 'vuex'
export default {
  name: "options",
  components: { BaseFileUpload },

  emits: ['update:category_id', 'update:Instruction_file'],
  props: {
    product: {},
    category_id: Number,
    categories: {
      default: []
    }
  },
  data: () => ({
    activeTab: '2.1',
    flags: [
      { key: 'stock', val: 'קנה קבל' },
      { key: 'sale', val: 'מבצע' },
      { key: 'new', val: 'חדש' },
      { key: 'noting', val: 'ללא' }
    ],
    Instruction_file: null
  }),
  computed: {
    ...mapGetters({ catData: 'category/FilterSizes', languageId: 'lang/getlanguageId' }),

    category() {

      return this.catData(this.category_id, this.languageId)
    },

    sizes() {
      return this.category.sizes ? this.category.sizes[this.activeTab] : []
    }
  },

  methods: {

    SelectCategory(evt) {
      this.$emit('update:category_id', Number(evt.target.value))
    },

    UpdateProduct() {
      console.log(this.category)
    },

    UploadPdf(file) {
      this.$emit('update:Instruction_file', file.src)
      this.Instruction_file = file.src
      console.log(file)
    }

  },


}
</script>

