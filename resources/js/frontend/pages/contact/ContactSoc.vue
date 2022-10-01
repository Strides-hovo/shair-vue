<template>
  <ul class="branches-sidebar__social">
    <li>
      <a :href="contact.facebook" target="_blank">
        <base-icon icon="facebook-big" width="76" height="76" />
      </a>
    </li>
    <li>
      <a :href="contact.twitter" target="_blank">
        <base-icon icon="twitter-big" width="76" height="75" />
      </a>
    </li>
    <li>
      <a :href="contact.insagram" target="_blank">

        <base-icon icon="instagram-big" width="76" height="75" />
      </a>
    </li>
    <li>
      <a :href="contact.youtube" target="_blank">

        <base-icon icon="youtube-big" width="76" height="75" />
      </a>
    </li>
    <li>
      <a :href="`https://wa.me/${contact.whatsapp}`" target="_blank">

        <base-icon icon="whatsapp-big" width="76" height="75" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ContactSoc",
  props:{
    contact: {}
  }
}
</script>

