<template>
  <header class="header">
    <div class="header-body">
      <div class="header-body__col">
        <div class="header-body__btns">

          <the-wcag />
          <the-cart />

          <a href="tel:0722133333" class="header-body__btns-item tel">
            072-2133333
            <img src="@img/header/tel.svg" alt="">
          </a>

          <the-language-select />

        </div>
      </div>
      <div class="header-body__logo">
        <img src="@img/header/logo.png" alt="">
        <span>הכי זול הכי מהודר</span>
      </div>
      <div class="header-body__col">
        <div class="header-body__btns">
          <a href="" class="header-body__btns-item">
            מחירון סוכות
          </a>
          <div class="header-body__btns-item menu-burger" @click="ButtonMenu = !ButtonMenu">
            תפריט
            <img src="@img/header/burger.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <the-right-sidebar :is-active="ButtonMenu" @closeMenu="ButtonMenu = false"  />

  </header>

  <div class="mobile-bottom">
    <a href="" class="mobile-bottom__wu">
      <img src="@img/icons/wu.svg" alt="">
    </a>
    <a href="" class="mobile-bottom__pricelist">
      מחירון
    </a>
    <a href="" class="mobile-bottom__tel">
      <!-- <img src="@img/icons/tel.svg" alt=""> -->
    </a>
  </div>
  <div class="tel-btn">
    <img src="@img/icons/tel.png" alt="">
  </div>
  <div class="callback-btn">
    <div class="callback-btn__close">
      <img src="@img/icons/callback-close.svg" alt="">
    </div>
    רוצים לדבר איתנו?
    קליק ונתקשר מיד
  </div>
  <div class="callback-content">
    <form class="footer__follow">
      <div class="callback-content__close">
        <img src="@img/icons/callback-close.svg" alt="">
      </div>
      <div class="footer__follow-title">
        רוצה לקבל ייעוץ מקצועי?
      </div>
      <div class="footer__follow-subtitle">
        השאירו פרטים ואחד הסוכנים שלנו יחזור אליך
      </div>
      <input type="text" class="footer__follow-input" placeholder="שם מלא">
      <input type="text" class="footer__follow-input" placeholder="מס’ טלפון שלך">
      <button class="footer__follow-btn">שלח</button>
    </form>
  </div>
  <base-breadcrumb />
</template>

<script>
import TheLanguageSelect from './TheLanguageSelect.vue'

import TheWcag from './TheWcag.vue'
import TheCart from './TheCart.vue'
import BaseBreadcrumb from '../../components/BaseBreadcrumb.vue';
import TheRightSidebar from "./rigth-sidebar/TheRightSidebar";

export default {
  name: "TheHeader",
  components: { TheLanguageSelect, TheRightSidebar, TheWcag, TheCart,BaseBreadcrumb },
  data: () => ({
    ButtonMenu: false
  }),


}

</script>

<style >
.header {
  position: absolute;
  z-index: 999;
  padding: 0 20px;
  width: 100%;
  height: 163px;
  background: -webkit-gradient(linear, left top, left bottom, from(#000000), to(rgba(0, 0, 0, 0)));
  background: -o-linear-gradient(top, #000000 0%, rgba(0, 0, 0, 0) 100%);
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
}

.header.sticky {
  position: fixed;
}

.header.sticky .header-body__logo span {
  display: none;
}

.header .main__bg {
  display: none;
}

.header.main {
  background: none;
}

.header-body {
  padding: 40px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-body__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  pointer-events: none;
  left: 50%;
  -webkit-transform: translate(-50%, -40px);
  -ms-transform: translate(-50%, -40px);
  transform: translate(-50%, -40px);
}

.header-body__logo span {
  font-family: 'Guttman Drogolin';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 107.88%;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header-body__logo img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

.header-body__btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-body__btns-item {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 56px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #376B00;
  overflow: hidden;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  position: relative;
  margin: 0 0 0 42px;
  border-radius: 40px;
  padding: 0 20px 0 32px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-body__btns-item:first-child {
  margin: 0;
}

.header-body__btns-item.circle {
  width: 56px;
  border: 2px solid #376B00;
  border-radius: 50%;
  padding: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.header-body__btns-item.cart span {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 19.2px;
  text-align: right;
  color: #000000;
  position: absolute;
  top: 22px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.header-body__btns-item.cart img {
  height: 36px;
  position: absolute;
  top: 8px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.header-body__btns-item.invalid {
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 0;
  background-color: transparent;
}

.header-body__btns-item.invalid .mob {
  display: none;
}

.header-body__btns-item.invalid img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: center;
  object-position: center;
}

.header-body__btns-item.tel img {
  margin: 0 0 0 20px;
}

.header-body__btns-item.menu-burger {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: right;
  padding: 0 26px 0 33px;
  margin: 0 0 0 20px;
}

.header-body__btns-item.menu-burger img {
  margin: 0 0 0 16px;
}

  .header-body__logo span {
    font-size: 12px;
    line-height: 107.88%;
  }


</style>