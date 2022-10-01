<template>
  <div class="branch-body__info-col">
    <div class="branch-body__info-item">
      <div class="branch-body__info-title">
        {{branch?.translate.name_title }}
      </div>
      <div class="branch-body__info-desc">
        {{branch?.translate.name }}
      </div>
    </div>
    <div class="branch-body__info-item">
      <div class="branch-body__info-title">
        {{branch?.translate.address_title }}
      </div>
      <div class="branch-body__info-desc">
        {{branch?.translate.address }}
      </div>
    </div>
    <div class="branch-body__info-item">
      <div class="branch-body__info-title">
        {{branch?.translate.tel_title }}
      </div>
      <div class="branch-body__info-desc">
        {{branch?.translate.tel }}
      </div>
    </div>
    <div class="branch-body__info-item">
      <div class="branch-body__info-title">
        {{branch?.translate.email_title }}
      </div>
      <a :href="`mailto:${branch?.translate.email}`" class="branch-body__info-desc" target="_blank">
        {{ branch?.translate.email }}
      </a>
    </div>
    <div class="branch-body__info-item">
      <div class="branch-body__info-title">
        {{ branch?.translate.time_title }}
      </div>
      <div class="branch-body__info-desc branch-body__info-desc_time">
        <span
            v-if="branch?.translate.time"
            v-for="(line,lineNumber) of branch?.translate.time.split('\n')"
            :key="lineNumber" >
          {{ line }}<br/>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BranchInfo",
  props:{
    branch: {}
  }
}
</script>

