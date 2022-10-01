<template>
  <div class="branches-sidebar__hours-title">
    {{ contact.translate.time_title }}
  </div>
  <ul class="branches-sidebar__hours">
    <li v-for="(time,i) in contact.translate.time_list"
        :key="i"
    > {{ time }}</li>
  </ul>
  <div class="branches-sidebar__tel">
    <span>{{ contact.translate.additional_title }} </span>
    <a :href="`tel:${contact.translate.additional_tel}`">{{ contact.translate.additional_tel  }}</a>
  </div>
  <div class="branches-sidebar__faks">
    <span>{{ contact.translate.fax_title }}</span>
    <p >{{ contact.translate.fax }}</p>
  </div>
  <div class="branches-sidebar__mail">
    <span>{{ contact.translate.write_us_title }}</span>
    <a :href="`mailto:${contact.translate.write_us_email}`">{{ contact.translate.write_us_email }}</a>
  </div>
  <div class="branches-sidebar__stock">
    <span>{{ contact.translate.address_title }}</span>
    <div>{{ contact.translate.address }}</div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  props:{
    contact: {}
  }
}
</script>

