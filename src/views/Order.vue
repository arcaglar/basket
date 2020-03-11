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
      <div class="button button--normal" @click="onSubmit">Sipariş Ver</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Card from "@/components/card";

export default {
  name: "Order",
  components: {
    Card
  },
  computed: {
    ...mapState("order", ["basket"])
  },
  methods: {
    ...mapActions({
      clearBasket: "order/clearBasket",
      completeOrder: "order/completeOrder",
      setNotification: "global/setNotificationVisibility"
    }),
    async onSubmit() {
      let arr = [];
      let data = this.basket;
      for (let i = 0; i < data.length; i++) {
        delete data[i].name;
        delete data[i].image;
        delete data[i].price;
        delete data[i].currency;
        arr.push(data[i]);
      }
      try {
        await this.completeOrder(arr).then(response => {
          if (response.status === 200) {
            this.setNotification([true, "Order Success"]);
            this.clearBasket();
            this.$router.push({ name: "Home" });
          }
        });
      } catch (e) {
        if (e.response.status === 404) {
          this.setNotification([true, e.response.data.message]);
        }
      }
    }
  }
};
</script>
