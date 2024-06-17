<template>
  <div class="btn__container">
    <div v-if="typeIcon === 'home'">
      <div v-if="!status" class="img__content">
        <img src="../../../icons/home-icons/home-off.svg" />
      </div>
      <div v-else class="img__content">
        <img src="../../../icons/home-icons/home-on.svg" />
      </div>
    </div>
    <div v-else-if="typeIcon === 'settings'">
      <div v-if="status" class="img__content">
        <img src="../../../icons/setting-icons/settings-on.svg" />
      </div>
      <div v-else class="img__content">
        <img src="../../../icons/setting-icons/settings-off.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import "./btn.style.css";

const props = defineProps({
  typeIcon: String,
  status: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped></style>
