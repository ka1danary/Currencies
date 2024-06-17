<template>
  <div class="container">
    <div>
      <div class="base__currencie"><value-list-title /></div>
      <div class="value__container">
        <div class="value__list" v-if="!loadingCurrenceInfo">
          <my-base-currency />
          <div v-for="(currence, index) in allCurrence" :key="index">
            <div v-if="currence.isActive && currence.name != baseCurrency.name">
              <value-field
                :icon="currence.code"
                :name="currence.name"
                :value="currence.value"
                :date="currence.lastUpdate"
              />
            </div>
          </div>
        </div>
        <div v-else class="loading">
          <my-loader />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useValueStore } from "@/store/ValuesStore";
import ValueListTitle from "@/components/UI/ValueListTitle.vue";
import ValueField from "@/components/UI/ValueField.vue";
import MyLoader from "@/components/UI/MyLoader.vue";
import MyBaseCurrency from "@/components/UI/MyBaseCurrence.vue";

const store = useValueStore();

const loadingCurrenceInfo = computed(() => store.isCurrenciesLoading);
const allCurrence = computed(
  () => store.arrayReadyAssembleObjectWithCurrencies
);
const baseCurrency = computed(() => store.selectedBaseCurrency);
</script>

<style scoped>
.container {
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
}
.value__container {
  background: #eaeff1;
  display: flex;
  justify-content: center;
}
.value__list {
  height: 60vh;
  padding: 30px;
  width: 100vw;
  overflow-y: scroll;
}
.value__list::-webkit-scrollbar {
  width: 15px;
}
.value__list::-webkit-scrollbar-track {
  background: rgb(207, 224, 233);
}
.value__list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(89, 187, 228);
}
.loading {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.base__currencie {
  position: sticky;
}

@media (max-width: 349px) {
  .value__list {
    height: 40vh;
  }
  .loading {
    height: 40vh;
  }
}

@media (min-width: 350px) and (max-width: 449px) {
  .value__list {
    height: 50vh;
  }
  .loading {
    height: 50vh;
  }
}

@media (min-width: 450px) and (max-width: 767px) {
  .value__list {
    height: 55vh;
  }
  .loading {
    height: 55vh;
  }
}
</style>
