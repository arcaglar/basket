<template>
  <div class="card">
    <img :src="item.image" class="card__image" />
    <div class="card__title">{{ item.name }}</div>
    <div class="card__bottom">
      <div class="card__price">
        <span>{{ item.price }}</span>
        <span>{{ item.currency }}</span>
      </div>
      <div class="card__button">Sepete Ekle</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
