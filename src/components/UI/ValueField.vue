<template>
  <div class="field">
    <div class="container__field" v-if="!loading">
      <div class="name__container">
        <div class="item__name">
          <div class="icon">
            <strong>{{ icon }}</strong>
          </div>
          <div class="text">
            <strong>{{ name }}</strong>
          </div>
        </div>
      </div>
      <div class="item">{{ value }}</div>
      <div class="item_date">
        <div class="date">{{ parsedDate.day }}.{{ parsedDate.month }}</div>
        <div class="time">{{ parsedDate.hours }}:{{ parsedDate.minutes }}</div>
      </div>
      <div class="item right__field_btn">
        <img
          src="../../icons/reload-icons/update-val-off.svg"
          alt="reload"
          class="button"
          @click="helperUpdate(name)"
          style="margin-right: 15px"
        />
        <img
          src="../../icons/copy/content-copy-off.svg"
          alt="copy"
          class="button"
          @click="helperCopy"
          v-if="!copy"
        />
        <img src="../../icons/copy/check.svg" alt="copyCheck" v-else />
      </div>
    </div>
    <div v-else class="loader">
      <my-loader />
    </div>
  </div>
</template>
<script setup>
import { computed, defineProps, ref } from "vue";
import { useValueStore } from "@/store/ValuesStore";
import { copyCurrence, parseDate } from "@/helpers/helperFunction";

import MyLoader from "./MyLoader.vue";

const props = defineProps({
  icon: String,
  name: String,
  value: Number,
  date: {
    type: String,
    default: new Date().toISOString(),
  },
});

const store = useValueStore();
const loading = ref(false);
const copy = ref(false);

const helperUpdate = async (name) => {
  loading.value = true;
  await store.updateConcreteCurrency(name);
  loading.value = false;
};

const helperCopy = () => {
  const currenceObject = {
    code: props.icon,
    name: props.name,
    value: props.value,
    lastUpdate: props.date,
  };
  copyCurrence(currenceObject);
  copy.value = true;
  setTimeout(() => {
    copy.value = false;
  }, 2000);
};

const parsedDate = computed(() => parseDate(props.date));
</script>
<style scoped>
.field {
  background: white;
  min-height: 48px;
  color: #121212;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  margin: 10px 0;
}

.container__field {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  min-height: 48px;
}

img {
  cursor: pointer;
}
.date {
  margin-right: 20px;
}

.right__field_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.icon {
  color: #2979ff;
}
.name__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item__name {
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;
}
.item_date {
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 48px;
}

.button {
  transition: background-color 0.2s ease;
  border-radius: 10px;
}

.button:hover {
  background-color: #eaeff1;
  border-radius: 10px;
}

@media (max-width: 485px) {
  .container__field {
    padding: 0 10px;
  }
  .name__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item__name {
    display: flex;
    align-items: center;
    width: 10vw;
    justify-content: space-between;
    padding: 5px 0px;
    font-size: 0.8em;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-word;
    padding: 0px 5px;
    font-size: 0.8em;
  }
  .item_date {
    font-size: 0.8em;
  }
}

@media (max-width: 767px) {
  .field {
    min-height: 80px;
  }
  .container__field {
    min-height: 80px;
  }
  .loader {
    min-height: 80px;
  }
  .item__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    justify-content: space-between;
  }
  .item_date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .date {
    margin-right: 0;
  }
}
</style>