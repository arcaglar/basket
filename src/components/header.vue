<template>
  <header class="header">
    <div class="header__logo">arcaglar</div>
    <div class="shopping-cart">
      <shopping-cart></shopping-cart>
    </div>
  </header>
</template>

<script>
import ShoppingCart from "@/components/header-shopping-cart";

export default {
  name: "Header",
  components: {
    ShoppingCart
  }
};
</script>
