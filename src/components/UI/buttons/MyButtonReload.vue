<template>
  <div class="btn__container">
    <div class="button" v-if="!isLoading">
      <img src="../../../icons/reload-icons/update-off.svg" alt="reload" />
    </div>
    <div v-else>
      <my-loader color="white" />
    </div>
  </div>
</template>

<script>
import { useValueStore } from "@/store/ValuesStore";
import MyLoader from "../MyLoader.vue";
import { computed } from "vue";
export default {
  name: "my-button-reload",
  components: {
    MyLoader,
  },
  setup() {
    const valueStore = useValueStore();
    const isLoading = computed(() => valueStore.isCurrenciesLoading);
    return {
      isLoading,
    };
  },
};
</script>

<style scoped>
.btn__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  transition: background-color 0.3s ease;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
