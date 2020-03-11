<template>
  <div
    class="notification"
    :class="{ 'notification--active': isNotificationVisibility }"
  >
    {{ notificationMessage }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Notification",
  computed: {
    ...mapState("global", ["isNotificationVisibility", "notificationMessage"])
  },
  watch: {
    isNotificationVisibility(value) {
      if (value) {
        setTimeout(() => {
          this.setNotification([false, ""]);
        }, 3000);
      }
    }
  },
  methods: {
    ...mapActions({
      setNotification: "global/setNotificationVisibility"
    })
  }
};
</script>
