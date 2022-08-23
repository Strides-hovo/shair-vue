<template>
  <div class="article">

    <div class="container">
      <div class="article-body">
        <div class="article-body__sidebar">
          <div class="article-body__sidebar-title sidebar-title">
            מאמרים מומלצים
          </div>
          <div class="article-body__sidebar-body">
            <div class="article-body__sidebar-item" v-for="rec in page.recommended"  :key="rec.id">
              <div class="article-body__sidebar-img">
                <img :src="rec.image"  :alt="rec.translate.image_alt" :title="rec.translate.image_title">
              </div>
              <div class="article-body__sidebar-name">
                {{ rec.translate.short_description }}
              </div>
            </div>
          </div>

          <div class="article-body__recomendation">
            <div class="article-body__recomendation-title sidebar-title">
              {{ page.product?.translate?.name }}
            </div>
            <div class="article-body__recomendation-item pricelist-content__item">
              <div class="pricelist-content__item-img">
              <span class="tip">
                קנה קבל
                <span class="tip-content">
                  לבק הנק לש רואית טסקט
                  לבק הנק לש רואית טסקט
                  לבק הנק לש רואית טסקט
                  לבק הנק לש רואית טסקט
                </span>
              </span>
                <img
                    v-if="page.product?.photos"
                    :src="page.product.photos[0].image"
                    :alt="page.product.photos[0].alt"
                    :title="page.product.photos[0].title"
                >
              </div>
              <div class="pricelist-content__item-text">
                <div class="pricelist-content__item-title">שם של המוצר</div>
                <div class="pricelist-content__item-desc">
                  {{ page.product?.translate?.short_description }}
                </div>
                <a href="" class="pricelist-content__item-link">
                  לפרטים נוספים
                </a>
              </div>
              <div class="pricelist-content__item-char">
                <div class="pricelist-content__item-price">מחיר: ₪2260</div>
                <div class="pricelist-content__item-length">
                  <base-icon icon="arrow-green" width="18" height="10" />

                  2.30<span>גובה:</span>

                  <ul class="pricelist-content__item-dropdown">
                    <li>
                      40x40
                    </li>
                    <li>
                      40x40
                    </li>
                    <li>
                      40x40
                    </li>
                    <li>
                      40x40
                    </li>
                  </ul>
                </div>
                <div class="pricelist-content__item-size">
                  <base-icon icon="arrow-green" width="18" height="10" />
                  40x40
                  <span>גודל:</span>

                  <ul class="pricelist-content__item-dropdown">
                    <li>
                      40x40
                    </li>
                    <li>
                      40x40
                    </li>
                    <li>
                      40x40
                    </li>
                    <li>
                      40x40
                    </li>
                  </ul>
                </div>
                <div class="pricelist-content__item-buy">הוסף לעגלה</div>
                <div class="pricelist-content__item-value">
                  <button class="pricelist-item-value-inc">
                    <base-icon icon="arrow-green" width="18" height="10" />
                  </button>
                  <input type="number" value="1">
                  <button class="pricelist-item-value-dec">
                    <base-icon icon="arrow-green" width="18" height="10" />
                  </button>
                  <span>כמות</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="article-body__content">
          <div class="article-body__content-img">
            <img :src="page.image"  :alt="page.translate.image_alt" :title="page.translate.image_title">
          </div>
          <div class="article-body__content-title">
            {{ page.translate.name }}
          </div>
          <div class="article-body__content-subtitle">
            {{ author_data()  }}
          </div>
          <div class="article-body__content-desc" v-html="page.translate.description">

          </div>
        </div>
      </div>
    </div>
  </div>

<!--  <teleport to=".footer__text" >
    {{ page.translate.footer_text }}
  </teleport>-->


</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Article",
  props: {
    _slug: String,
    id: String
  },

  computed:{
    ...mapGetters({pageData: 'article/GET_ARTICLE', language: 'lang/GET_SITE_LANGUAGE' }),

    page(){
      return this.pageData(this.id, this.language.id)
    }
  },
  watch:{
    'page.translate.slug'(slug){
      if (slug){
        this.$router.replace({ name: 'Article', params: {id: this.id, _slug: slug } })
      }
    },
    'page.translate.footer_text'(footer_text){
      this.$emit('footerContent',{
        footer_text: footer_text
      })
    }
  },
  methods: {
    author_data(){
      return this.page.published_at + ' ' + this.page.translate.author
    }
  },

  mounted() {
    const slug = this.page?.translate?.slug
    this.$router.replace({ name: 'Article', params: {id: this.id, _slug: slug } })

    this.$emit('footerContent',{
      footer_text: this.page.translate.footer_text
    })
  }
}
</script>

