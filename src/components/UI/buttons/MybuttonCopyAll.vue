<template>
  <div class="container" @click="handleCopy">
    <div class="icon" v-if="!isCopy">
      <img src="../../../icons/copy/content-copy-on.svg" alt="copy_all" />
    </div>
    <div v-else>
      <img src="../../../icons/copy/check.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { copyCurrence, excludeField } from "@/helpers/helperFunction";
import { useValueStore } from "@/store/ValuesStore";
import { computed, ref } from "vue";

const isCopy = ref(false);
const valueStore = useValueStore();

const currencies = computed(
  () => valueStore.arrayReadyAssembleObjectWithCurrencies
);

const handleCopy = () => {
  const clearCurrencies = excludeField(currencies, "isActive");
  copyCurrence(clearCurrencies);
  isCopy.value = true;
  setTimeout(() => {
    isCopy.value = false;
  }, 2000);
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  transition: border-color 0.3s ease;
  border: 1px solid white;
  cursor: pointer;
  border: 2px solid #d1edf5;
}
.container:hover {
  border-color: #536d9e;
}
</style>
