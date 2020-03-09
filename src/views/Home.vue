<template>
  <div>
    <Header />
    <div class="home">its home component</div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
