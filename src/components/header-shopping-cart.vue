<template>
  <div class="shopping-cart">
    <div class="shopping-cart__badge">{{ basket.length }}</div>
    <img src="@/assets/image/shopping-basket.svg" class="shopping-cart__icon" />
    <span>Cart</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ShoppingCart",
  computed: {
    ...mapState("order", ["basket"])
  }
};
</script>
