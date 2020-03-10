<template>
  <div class="page-inner">
    <ul class="item-list">
      <li class="item-list__item" v-for="(item, key) in basket" :key="key">
        <Card :item="item" :type="'order'" />
      </li>
    </ul>
    <div class="button-group">
      <div
        class="button button--outline"
        @click="$router.push({ name: 'Home' })"
      >
        Alışverişe Devam Et
      </div>
      <div class="button button--normal">Sipariş Ver</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/card";

export default {
  name: "Order",
  components: {
    Card
  },
  computed: {
    ...mapState("order", ["basket"])
  }
};
</script>
