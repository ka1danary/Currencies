<template>
  <div class="toggle__switch" @click="toggle">
    <div class="toggle__circle" :class="{ toggle__on: isChecked }"></div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isChecked = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    isChecked.value = newValue;
  }
);

const toggle = () => {
  isChecked.value = !isChecked.value;
  emit("update:modelValue", isChecked.value);
};
</script>

<style scoped>
.toggle__switch {
  width: 55px;
  background: #e9eef1;
  border-radius: 30px;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  transition: background-color 0.3s;
}
.toggle__circle {
  width: 24px;
  height: 24px;
  background: #8a8a8a;
  border-radius: 50%;
  margin: 3px;
  transition: transform 0.3s, background-color 0.3s;
}
.toggle__on {
  transform: translateX(25px);
  background: #0096d5;
}
</style>
