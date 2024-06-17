<template>
  <div class="container">
    <div v-if="!isLoading" class="content">
      <div class="item">
        <div class="name">
          <div class="icon" style="color: #2979ff">
            <strong>{{ baseCurrency.code }}</strong>
          </div>
          <div style="">
            <strong>{{ baseCurrency.name }}</strong>
          </div>
        </div>
      </div>
      <div class="item" style="">
        <strong>1</strong>
      </div>
    </div>
    <div v-else class="loader">
      <my-loader />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useValueStore } from "../../store/ValuesStore";
import MyLoader from "./MyLoader.vue";

const valueStore = useValueStore();

const baseCurrency = computed(() => valueStore.selectedBaseCurrency);
const isLoading = computed(() => valueStore.isCurrencyLoading);
</script>

<style scoped>
.container {
  background: white;
  border: 3px solid #8eb4f7;
  height: 48px;
  color: #121212;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  margin: 10px 0;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 40px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

@media (max-width: 767px) {
  .container {
    height: 80px;
  }
  .content {
    height: 76px;
  }
  .loader {
    height: 76px;
  }
  .name {
    flex-direction: column;
    width: 10vw;
  }
  .item {
    height: 76px;
  }
}
</style>
