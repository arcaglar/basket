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
      <input type="number" class="card__amount" />
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
      isButtonVisibility: true
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
      addBasket: "order/addBasket"
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
    }
  },
  created() {
    this.itemInBasketCheck();
  }
};
</script>
