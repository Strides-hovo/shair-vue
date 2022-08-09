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

    <base-menu :is-active="ButtonMenu" @closeMenu="ButtonMenu = false"  />

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
import BaseMenu from './BaseMenu.vue'
import TheWcag from './TheWcag.vue'
import TheCart from './TheCart.vue'
import BaseBreadcrumb from '../../components/BaseBreadcrumb.vue';

export default {
  name: "TheHeader",
  components: { TheLanguageSelect, BaseMenu, TheWcag, TheCart,BaseBreadcrumb },
  data: () => ({
    ButtonMenu: false
  }),
  mounted(){
    console.log(this.$route.name);
  }

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

.header-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  visibility: hidden;
}

.header-menu.active {
  pointer-events: all;
  visibility: visible;
}

.header-menu.active .header-menu__bg {
  opacity: 1;
}

.header-menu.active .header-menu__body {
  -webkit-transform: translate(0);
  -ms-transform: translate(0);
  transform: translate(0);
}

.header-menu__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
  opacity: 0;
  -webkit-transition: all .4s ease;
  -o-transition: all .4s ease;
  transition: all .4s ease;
}

.header-menu__body {
  position: absolute;
  background: #FFFFFF;
  padding: 30px 0;
  right: 0;
  width: 355px;
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-transform: translate(100%, 0);
  -ms-transform: translate(100%, 0);
  transform: translate(100%, 0);
  -webkit-transition: all .4s ease;
  -o-transition: all .4s ease;
  transition: all .4s ease;
  background-image: url(/img/header/menu-bg-bottom.png);
  background-repeat: no-repeat;
  background-position: left -20px bottom 10px;
}

.header-menu__body::-webkit-scrollbar {
  width: 5px;
  height: 100%;
}

.header-menu__body::-webkit-scrollbar-thumb {
  background-color: #346600;
}

.header-menu__top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 18px 0 24px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-menu__top span {
  position: relative;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: right;
  color: #346600;
}
 
.header-menu__top span::after {
  content: url(/img/header/menu-bg-top.png);
  z-index: -1;
  position: absolute;
  display: block;
  top: 6px;
  left: -45px;
}

.header-menu__top-close {
  cursor: pointer;
}

.header-menu__btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 52px 0 0 0;
  position: relative;
}

.header-menu__btns::after {
  content: url(./img/header/menu-bg-bottom.png);
  z-index: -1;
  position: absolute;
  display: block;
  pointer-events: none;
  bottom: -50px;
  left: -20px;
  display: none;
}

.header-menu__btns li {
  margin: 42px 0 0 0;
}

.header-menu__btns li:first-child {
  margin: 0;
}

.header-menu__btns-item {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 18px 10px 24px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  text-align: right;
  color: #53A200;
  -webkit-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-menu__btns-item.menu-dropdown-btn {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.header-menu__btns-item.menu-dropdown-btn:hover {
  background: transparent;
  color: #53A200;
}

.header-menu__btns-item.menu-dropdown-btn span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.header-menu__btns-item.menu-dropdown-btn .header-menu__btns-item {
  padding: 10px 0 10px;
}

.header-menu__btns-item.menu-dropdown-btn.active:hover {
  background: transparent;
  color: #53A200;
}



.header-menu__btns-item .menu-dropdown-content .header-menu__btns-item:hover {
  background: transparent;
  color: #53A200;
}



.header-menu__btns-item img {
  margin: 0 4px 0 0;
}

.header-menu__btns-item:hover {
  background: #53A200;
  color: #FFFFFF;
}


  .header {
    padding: 0 15px !important;
  }

  .header-menu__body {
    width: 305px;
  }

  .header-menu__top {
    padding: 0 22px;
  }

  .header-menu__top span {
    font-size: 24px;
  }

  .header-menu__top span::after {
    content: '';
    width: 90px;
    background-image: url(/img/header/menu-bg-top.png);
    height: 60px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    left: -30px;
  }

  .header-menu__btns {
    margin: 40px 0 0 0;
  }

  .header-menu__btns::after {
    content: '';
    background-image: url(./img/menu-bg-bottom.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 330px;
    height: 235px;
  }

  .header-menu__btns-item {
    font-size: 18px;
    line-height: 26px;
    margin: 30px 0 0 0;
    padding: 0 22px;
  }

  .header-body__logo span {
    font-size: 12px;
    line-height: 107.88%;
  }


</style>