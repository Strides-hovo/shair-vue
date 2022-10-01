<template>
  <div class="advantages">
    <div class="advantages__title title title_singleline">
      <span></span>
      {{ $trans._lang('why buy from us') }}
      <span></span>
    </div>
    <div class="advantages-body">
      <div class="advantages-body__row">
        <div class="advantages-body__item">
          <div class="advantages-body__item-ico">
            <img src="/img/advantages/01.png" alt="">
          </div>
          <div class="advantages-body__item-title">
            {{ $trans._lang('Thousands of satisfied customers') }}
          </div>
        </div>
        <div class="advantages-body__item">
          <div class="advantages-body__item-ico">
            <img src="/img/advantages/03.png" alt="">
          </div>
          <div class="advantages-body__item-title">

            {{ $trans._lang('10 years warranty') }}
          </div>
        </div>
        <div class="advantages-body__item">
          <div class="advantages-body__item-ico">
            <img src="/img/advantages/06.png" alt="">
          </div>
          <div class="advantages-body__item-title">
            {{ $trans._lang('Fast shipping') }}

          </div>
        </div>
        <div class="advantages-body__item">
          <div class="advantages-body__item-ico">
            <img src="/img/advantages/07.png" alt="">
          </div>
          <div class="advantages-body__item-title">

            {{ $trans._lang('Safe shopping') }}
          </div>
        </div>
      </div>
      <div class="advantages-body__row">
        <div class="advantages-body__item">
          <div class="advantages-body__item-ico">
            <img src="/img/advantages/02.png" alt="">
          </div>
          <div class="advantages-body__item-title">
            {{ $trans._lang('The lowest prices in Israel') }}

          </div>
        </div>
        <div class="advantages-body__item">
          <div class="advantages-body__item-ico">
            <img src="/img/advantages/04.png" alt="">
          </div>
          <div class="advantages-body__item-title">

            {{ $trans._lang('The lowest prices in Israel') }}
          </div>
        </div>
        <div class="advantages-body__item">
          <div class="advantages-body__item-ico">
            <img src="/img/advantages/05.png" alt="">
          </div>
          <div class="advantages-body__item-title">
            {{ $trans._lang('12 years without interest') }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeAdvantages'
}
</script>

