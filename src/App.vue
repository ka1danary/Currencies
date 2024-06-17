<template>
  <div class="main">
    <MyHeader />
    <div class="content">
      <div v-if="alertWindow" class="alert">
        <pop-up-window />
      </div>
      <transition name="fade" appear>
        <router-view />
      </transition>
      
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAutoUpdateStore } from "./store/AutoUpdateStore";

import MyHeader from "./components/header/MyHeader.vue";
import popUpWindow from "./components/UI/popUpWindow.vue";

const store = useAutoUpdateStore();

const alertWindow = computed({
  get: () => store.alertStatus,
});
</script>

<style scoped>
.content {
  margin-top: 20px;
}
.title {
  font-size: 2em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 428px) {
  .alert {
    display: none;
  }
}
</style>
