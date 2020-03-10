<template>
  <div>
    <ul class="item-list">
      <li class="item-list__item" v-for="(item, key) in data" :key="key">
        <Card :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/card";

export default {
  name: "Home",
  data() {
    return {
      data: []
    };
  },
  components: {
    Card
  },
  created() {
    this.$store.dispatch("order/getProducts").then(response => {
      this.data = response.data;
    });
  }
};
</script>
