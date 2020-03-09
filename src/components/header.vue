<template>
  <header class="header">
    <div class="header__logo">arcaglar</div>
    <shopping-cart></shopping-cart>
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
