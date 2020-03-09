<template>
  <div>
    <Header />
    <ul class="item-list">
      <li class="item-list__item" v-for="(item, key) in 12" :key="key"></li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "Home",
  components: {
    Header
  },
  created() {
    this.$store.dispatch("order/getProducts").then(response => {
      console.log(response);
    });
  }
};
</script>
