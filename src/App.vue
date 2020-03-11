<template>
  <div id="app">
    <Header />
    <notification />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header";
import notification from "@/components/notification";

export default {
  name: "App",
  components: {
    Header,
    notification
  }
};
</script>

<style lang="scss">
@import "./assets/stylesheet/style";
</style>
