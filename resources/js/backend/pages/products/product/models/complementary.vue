<template>
  <div class="container-content__body">
    <table class="orders productspage product-products">
      <thead>
      <tr>
        <td>
          <label>
            <input type="checkbox">
            <span class="fake"></span>
          </label>
        </td>
        <td>
          תמונה של המוצר
        </td>
        <td>
          שם המוצר
        </td>
        <td>
          קטגוריה
        </td>
      </tr>
      </thead>
      <tbody>
      <tr class="order-row">
        <td>
          <label>
            <input type="checkbox">
            <span class="fake"></span>
          </label>
        </td>
        <td>
          <img src="@img/article-img.png" alt="">
        </td>
        <td>
          בד אוקספורד לסוכה
        </td>
        <td>
          סוכות לנצח
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "complementary"
}
</script>

<style scoped>

</style>