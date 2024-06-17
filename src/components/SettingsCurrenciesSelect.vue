<template>
  <div class="container">
    <div class="list__values" v-if="!isLoading">
      <div
        v-for="(currency, index) in allCurrence"
        :key="index"
        :class="{ inactive: !currency.isActive }"
        class="item"
        @click="toggleCurrency(currency)"
      >
        <div class="name">
          <div style="color: #2979ff" class="icon">{{ currency.code }}</div>
          <div>{{ currency.name }}</div>
        </div>
        <div class="select" @click.stop>
          <my-radio-checkbox
            v-model="currency.isActive"
            @update:modelValue="(status) => helperSelect(currency.name, status)"
          />
        </div>
      </div>
    </div>
    <div v-else class="loading">
      <my-loader />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useValueStore } from "@/store/ValuesStore";

import MyRadioCheckbox from "./UI/MyRadioCheckbox.vue";
import MyLoader from "./UI/MyLoader.vue";

const store = useValueStore();

const isLoading = computed(() => store.isCurrencuesLoading);
const allCurrence = computed(
  () => store.arrayReadyAssembleObjectWithCurrencies
);

const setSettings = store.selectCurrenciesInSettings;

const helperSelect = (name, status) => {
  setSettings(name, status);
};

const toggleCurrency = (currency) => {
  const newStatus = !currency.isActive;
  currency.isActive = newStatus;
  helperSelect(currency.name, newStatus);
};
</script>

<style scoped>
.container {
  background: rgb(234, 239, 241);
  height: 350px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding: 30px;
  overflow-y: scroll;
}

.item {
  height: 48px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 10px;
  cursor: pointer;
}

.name {
  display: flex;
  align-items: center;
  font-weight: 600;
}

.name {
  margin-right: 10px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.inactive {
  opacity: 0.5;
}

.container::-webkit-scrollbar {
  width: 15px;
}

.container::-webkit-scrollbar-track {
  background: rgb(207, 224, 233);
}

.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(89, 187, 228);
}

@media (max-width: 200px) {
  .item {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .name {
    align-items: center;
  }

  .icon {
    display: none;
  }
}

@media (max-width: 330px) {
  .name {
    flex-direction: column;
    align-items: flex-start;
  }

  .name > div {
    margin-right: 0;
  }
}

@media (max-width: 767px) {
  .container {
    padding: 20px;
  }

  .item {
    height: 80px;
    padding: 20px;
  }
}
</style>
