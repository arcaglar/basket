<template>
  <div class="card">
    <img :src="item.image" class="card__image" />
    <div class="card__title">{{ item.name }}</div>
    <div class="card__bottom" v-if="type === 'list'">
      <div class="card__price">
        <span>{{ item.price }}</span>
        <span>{{ item.currency }}</span>
      </div>
      <div
        class="card__button"
        v-if="isButtonVisibility"
        @click="selectItem(item)"
      >
        Sepete Ekle
      </div>
    </div>
    <div class="card__bottom" v-else>
      <div class="card__remove-button" @click="deleteProduct(item.id)">Sil</div>
      <input
        type="number"
        class="card__amount"
        :value="item.amount"
        @change="amount($event)"
      />
      <div class="card__price">
        <span>{{ item.price }}</span>
        <span>{{ item.currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Card",
  data() {
    return {
      isButtonVisibility: true,
      orginalPrice: this.item.price
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: "list"
    }
  },
  computed: {
    ...mapState("order", ["basket"])
  },
  methods: {
    ...mapActions({
      addBasket: "order/addBasket",
      changeAmount: "order/changeAmount",
      deleteProduct: "order/deleteProduct"
    }),
    selectItem(item) {
      this.addBasket(item);
      this.itemInBasketCheck();
    },
    itemInBasketCheck() {
      let item = this.basket.filter(x => {
        return x.id === this.item.id;
      });
      item.length > 0
        ? (this.isButtonVisibility = false)
        : (this.isButtonVisibility = true);
    },
    amount(e) {
      let price = this.orginalPrice * e.target.value;
      let data = {
        id: this.item.id,
        value: e.target.value,
        price: price
      };
      this.changeAmount(data);
    }
  },
  created() {
    this.itemInBasketCheck();
  }
};
</script>
