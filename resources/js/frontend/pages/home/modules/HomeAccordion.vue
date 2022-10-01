<template>
  <div class="faq">
    <div class="faq__title title title_arrow">
      <div class="title-arrow">
        {{ $trans._lang('Any questions and answers') }}
        <base-icon icon="home-arrow" width="10" height="16" />
      </div>
      <span></span>
        {{ $trans._lang('Questions and answers') }}
      <span></span>
    </div>
    <div class="container">
      <div class="faq-body one">

      <AccordionItem />
      </div>
      <div class="title-arrow title-arrow_mob">
        כל שאלות ותשובות
        <base-icon icon="home-arrow" width="20" height="19" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "../../../../backend/components/UI/BaseIcon";
import AccordionItem from "./AccordionItem";
export default {
  name: 'HomeAccordion',
  components: {AccordionItem, BaseIcon}
}
</script>

