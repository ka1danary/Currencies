<template>
  <div v-if="alert">
    <div class="container">
      <div class="alert__text__container">
        <div>
          <strong
            >{{ parseDateAlert.day }}.{{ parseDateAlert.month }}
            {{ parseDateAlert.hours }}:{{ parseDateAlert.minutes }}</strong
          >
        </div>
        <div class="text">{{ $t("autoUpdatePopUp.title") }}</div>
        <br />
        <div class="text">
          {{ $t("autoUpdatePopUp.nextUpdate") }} {{ nextUpdateParse.hours }}:{{
            nextUpdateParse.minutes
          }}
        </div>
      </div>
      <div class="alert__bottom">
        <button @click="helperClose">Ok</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAutoUpdateStore } from "@/store/AutoUpdateStore";
import { useValueStore } from "@/store/ValuesStore";
import { calculateDate, parseDate } from "@/helpers/helperFunction";


const autoUpdateStore = useAutoUpdateStore();
const valueStore = useValueStore();

const alert = computed(() => autoUpdateStore.alertStatus);
const lastUpdate = computed(() => valueStore.lastUpdateAll);
const frequency = computed(() => autoUpdateStore.frequencyUpdateValue);

const helperClose = () => {
  autoUpdateStore.alertStatus = false;
};

const parseDateAlert = computed(() => {
  return parseDate(lastUpdate.value);
});

const nextUpdate = computed(() => {
  return calculateDate(lastUpdate.value, frequency.value);
});

const nextUpdateParse = computed(() => {
  return parseDate(nextUpdate.value);
});
</script>

<style scoped>
.container {
  width: 210px;
  height: 200px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 70px;
  left: 30px;
  z-index: 99;
}

.alert__text__container {
  height: 130px;
  border-bottom: 2px solid #d2dbde;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 10px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert__bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #0096d5;
  font-size: 1.3em;
}
</style>
