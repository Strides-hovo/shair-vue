<template>
  <div class="tents">
    <div class="tents__title title">
      <span></span>
      {{ $trans._lang('Our packages') }}
      <span></span>
    </div>
    <div class="container">
      <div class="tents-body">
        <div class="tents-body__item">
          <div class="tents-body__item-tip">
            קנה קבל
            <span>
              <p>
                טקסט תיאור של קנה קבל
              </p>
              <p>
                טקסט תיאור של קנה קבל
              </p>
              <p>
                טקסט תיאור של קנה קבל
              </p>
              <p>
                טקסט תיאור של קנה קבל
              </p>
            </span>
          </div>
          <a href="" class="tents-body__item-link"></a>
          <div class="tents-body__item-img">
            <img src="/img/tents/01.png" alt="">
          </div>
          <div class="tents-body__item-info">
            <div class="tents-body__item-title">שם של החבילה</div>
            <div class="tents-body__item-descr">
              החבילה טקסט תיאור של החבילה טקסט תיאור של החבילה טקסט
              תיאור של החבילה
            </div>
          </div>
          <div class="tents-body__item-bottom">
            <div class="tents-body__item-btn">לפרטים</div>
            <div class="tents-body__item-price"> 1345 ₪ </div>
          </div>
        </div>
        <div class="tents-body__item">
          <div class="tents-body__item-tip">
            קנה קבל
            <span>
              <p>
                טקסט תיאור של קנה קבל
              </p>
              <p>
                טקסט תיאור של קנה קבל
              </p>
              <p>
                טקסט תיאור של קנה קבל
              </p>
              <p>
                טקסט תיאור של קנה קבל
              </p>
            </span>
          </div>
          <a href="" class="tents-body__item-link"></a>
          <div class="tents-body__item-img">
            <img v-lazy="{src: '/img/tents/01.png'}" alt="">
          </div>
          <div class="tents-body__item-info">
            <div class="tents-body__item-title">שם של החבילה</div>
            <div class="tents-body__item-descr">
              החבילה טקסט תיאור של החבילה טקסט תיאור של החבילה טקסט
              תיאור של החבילה
            </div>
          </div>
          <div class="tents-body__item-bottom">
            <div class="tents-body__item-btn">לפרטים</div>
            <div class="tents-body__item-price"> 1345 ₪ </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrProducts'
}
</script>

