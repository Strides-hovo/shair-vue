<template>
  <table>
    <thead>
    <tr>
      <td>
        <label>
          <input type="checkbox">
          <span></span>
        </label>
      </td>
      <td>גודל</td>
      <td>קוד לחשבונית</td>
      <td>SKU</td>
      <td>מחיר</td>
      <td>
        מוצג באתר
      </td>
      <td>
        מחיר משלוח לרכישה
      </td>
      <td>מחיר משלוח להשכרה</td>
    </tr>
    </thead>
    <tbody>

    <tr v-for="size in sizes" :key="size.id">
      <td>
        <label>
          <input type="checkbox">
          <span></span>
        </label>
      </td>
      <td>
        {{ size.height + 'x' + size.width }}
      </td>
      <td>
        <input type="text" v-model.number="size.invoice_code">
      </td>
      <td>
        <input type="text" v-model.number="size.sku">
      </td>
      <td>
        <input type="text" v-model.number="size.price">
      </td>
      <td>
        <label>
          <input type="checkbox" v-model="size.status">
          <span></span>
        </label>
      </td>
      <td>
        <input type="text" v-model.number="size.delivery_sale">
      </td>
      <td>
        <input type="text" v-model.number="size.delivery_rent">
      </td>
    </tr>

    </tbody>
  </table>
</template>

<script>
export default {
  name: "ProductSizes",
  props:{
    sizes: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>