<template>
  <div class="last__update__field">
    <div class="update__title">{{ $t("nav.lastUpdate") }}</div>
    <div class="last__update_field__time">
      <div style="margin-right: 15px">
        {{ parsedDate.day }}.{{ parsedDate.month }}
      </div>
      <div>{{ parsedDate.hours }}:{{ parsedDate.minutes }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";
import { parseDate } from "@/helpers/helperFunction";

const props = defineProps({
  date: {
    type: String,
    default: "123",
  },
});
const parsedDate = computed(() => {
  return parseDate(props.date);
});
</script>

<style scoped>
.last__update__field {
  display: flex;
  align-items: center;
}
.update__title {
  color: white;
  font-weight: 600;
  font-size: 16px;
}
.last__update_field__time {
  background: #f2fafe;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px;
  width: 160px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: all;
}
.last__update_field__time::selection {
  background-color: #cfe0e9;
}
</style>
