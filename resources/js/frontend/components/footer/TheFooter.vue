<template>
<footer class="footer ">
    <div class="footer__bg">
    </div>
    <div class="footer__title title">
      <span></span>
      שתפו
      <span></span>
    </div>
    <div class="footer__social">
      <a href="" class="footer__social-item">
        <img src="@img/footer/wu-color.svg" alt="">
      </a>
      <a href="" class="footer__social-item">
        <img src="@img/footer/fb-color.svg" alt="">
      </a>
    </div>
    <form class="footer__follow mob">
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
    <div class="footer__text">
      {{ content?.footer_text }}
     
    </div>
    <nav class="footer-body">
      <ul class="footer-body__col">
        <li>
          <div class="footer-body__col-title">
            יצירת קשר
          </div>
        </li>
        <li>
          <a href="tel:0722133333" class="footer-body__col-link">
            072-2133333
           
            <!-- <img src="@img/footer/tel.svg" alt=""> -->
          </a>
        </li>
        <li>
          <a href="tel:0722606364" class="footer-body__col-link">
            072-2606364
            <img src="@img/footer/fax.svg" alt="">
          </a>
        </li>
        <li>
          <a href="#" class="footer-body__col-link">
            072-2133333
            <img src="@img/footer/wu-yellow.svg" alt="">
          </a>
        </li>
        <li>
          <a href="mailto:sukkot@sukkothadar.co.il" class="footer-body__col-link">
            sukkot@sukkothadar.co.il
            <img src="@img/footer/mail.svg" alt="">
          </a>
        </li>
      </ul>
      <ul class="footer-body__col">
        <li>
          <div class="footer-body__col-title">
            שפות
          </div>
        </li>
        <li>
          <a href="" class="footer-body__col-link">עברית</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">English</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">Русский</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">Français</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">Italiano</a>
        </li>
      </ul>
      <ul class="footer-body__col">
        <li>
          <div class="footer-body__col-title">מאמרים אחרונים</div>
        </li>
        <li>
          <a href="" class="footer-body__col-link">איך מרכיבים סוכה טלסקופית?</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">איך מרכיבים סוכת ילדים?</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">מה ההבדל בין סוכות הדר לסוכות נחלים?</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">מהי הסוכה הטובה ביותר?</a>
        </li>
      </ul>
      <ul class="footer-body__col">
        <li>
          <div class="footer-body__col-title"> שירותים מרכזיים</div>
        </li>
        <li>
          <a href="" class="footer-body__col-link"> משלוחים לסוכה</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link"> הגדלת סוכה</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">השכרת סוכה </a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">סוכה טלסקופית </a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">סוכות לילדים </a>
        </li>
        <li>
          <a href="" class="footer-body__col-link"> סוכות מתנפחות</a>
        </li>
      </ul>
      <ul class="footer-body__col">
        <li>
          <div class="footer-body__col-title">ניווט באתר </div>
        </li>
        <li>
          <a href="" class="footer-body__col-link">קניית סוכה </a>
        </li>
        <li>
          <a href="" class="footer-body__col-link"> השכרת סוכה</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">מאמרים לסוכה </a>
        </li>
        <li>
          <a href="" class="footer-body__col-link"> הלכות סוכה</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link"> כל המוצרים</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link"> סוכה טלסקופית</a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">צור קשר </a>
        </li>
        <li>
          <a href="" class="footer-body__col-link">אודות</a>
        </li>
      </ul>
      <div class="footer-body__col">
        <div class="footer-body__col-title">
          קניה בטוחה ומאובטחת
          <img src="@img/footer/ssl.svg" alt="">
        </div>
        <div class="footer-body__col-img">
          <img src="@img/footer/payments.svg" alt="">
        </div>
      </div>
    </nav>
    <ul class="footer-media">
      <span></span>
      <li>
        <a href="" class="footer-media__item">
          <img src="@img/footer/inst.svg" alt="">
        </a>
      </li>
      <li>
        <a href="" class="footer-media__item">
          <img src="@img/footer/yt.svg" alt="">
        </a>
      </li>
      <li>
        <a href="" class="footer-media__item">
          <img src="@img/footer/tw.svg" alt="">
        </a>
      </li>
      <li>
        <a href="" class="footer-media__item">
          <img src="@img/footer/fb.svg" alt="">
        </a>
      </li>
      <span></span>
    </ul>
    <div class="footer__sitename">
      סוכות הדר 2022
    </div>
  </footer>
</template>

<script>
    export default {
        name: 'TheFooter',
        props:{
          content: {}
        }
    }
</script>

<style lang="scss" >

.footer {
  margin: 30px 0 0 0;
  position: relative;
}

.footer.is404 .footer__title {
  display: none;
}

.footer.is404 .footer__social {
  display: none;
}

.footer__bg {
  overflow: hidden;
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 736px;
  background-image: url(/img/footer/bg2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
}

.footer__bg::before {
  content: '';
  display: block;
  width: 100%;
  height: 308px;
  position: absolute;
  z-index: 1;
  top: -1px;
  left: 0;
  background-color: #FFFFFF;
  -webkit-transform: rotate(-10deg) translate(0, -150%) scaleX(2) scaleY(1.5);
      -ms-transform: rotate(-10deg) translate(0, -150%) scaleX(2) scaleY(1.5);
          transform: rotate(-10deg) translate(0, -150%) scaleX(2) scaleY(1.5);
  -webkit-transform-origin: top right;
      -ms-transform-origin: top right;
          transform-origin: top right;
}

.footer__bg img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: bottom center;
     object-position: bottom center;
}

.footer__social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 10px 0 0 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}

.footer__social-item {
  margin: 0 0 0 18px;
}

.footer__social-item:first-child {
  margin: 0;
}

.footer__text {
  margin: 25px 36px 0;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #707070;
}

.footer-body {
  margin: 356px 40px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}

.footer-body__col {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.footer-body__col-title {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 35px;
  text-align: right;
  color: #FFD600;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}

.footer-body__col-title img {
  margin: 0 0 0 10px;
}

.footer-body__col-link {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 31px;
  text-align: right;
  color: #FFFFFF;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}

.footer-body__col-link img {
  margin: 0 0 0 10px;
}

.footer-body__col-img {
  margin: 20px 0 0 0;
}

.footer-body__col-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: left center;
     object-position: left center;
}

.footer-media {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 20px 0 0 0;
}

.footer-media span {
  display: block;
  height: 1px;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  background: #D3D3D3;
}

.footer-media__item {
  display: block;
  margin: 0 10px;
}

.footer__sitename {
  margin: 15px 0;
  text-align: center;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}

.footer__follow {
  display: none;
  margin: 20px 0 0 0;
  padding: 10px 15px 24px;
  background: #FFD600;
}

.footer__follow-title {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #000000;
}

.footer__follow-subtitle {
  margin: 7px 0 0 0;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
}

.footer__follow-input {
  margin: 15px 0 0 0;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #000;
  background: #FFFFFF;
  border-radius: 30px;
  width: 100%;
  padding: 0 27px;
  height: 48px;
}

.footer__follow-input::-webkit-input-placeholder {
  color: #717171;
}

.footer__follow-input::-moz-placeholder {
  color: #717171;
}

.footer__follow-input:-ms-input-placeholder {
  color: #717171;
}

.footer__follow-input::-ms-input-placeholder {
  color: #717171;
}

.footer__follow-input::placeholder {
  color: #717171;
}

.footer__follow-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 48px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 15px 0 0 0;
  background: #53A200;
  border: 2px solid #FFFFFF;
  border-radius: 30px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFE4E4;
}

</style>