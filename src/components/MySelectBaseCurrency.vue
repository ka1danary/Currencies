<template>
  <div class="select" @click.stop="toggleDropdown" ref="select">
    <div class="select__preview">
      <div>
        {{ selectedCurrence.name }}
      </div>
      <div>
        <img
          src="../icons/arrow_drop_down.svg"
          alt="arrow"
          class="arrow"
          :class="{ open: isOpen }"
        />
      </div>
    </div>
    <div v-if="isOpen" class="select__dropdown">
      <div
        v-for="(currency, index) in allCurrence"
        :key="index"
        class="item"
        :class="{ selected: currency.name === selectedCurrence }"
        @click.stop="selectCurrency(currency)"
      >
        {{ currency.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useValueStore } from "../store/ValuesStore";

const valueStore = useValueStore();

const isOpen = ref(false);
const select = ref(null);

const selectedCurrence = computed(() => valueStore.selectedBaseCurrency);
const allCurrence = computed(
  () => valueStore.arrayReadyAssembleObjectWithCurrencies
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (event) => {
  if (select.value && !select.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const selectCurrency = (currency) => {
  valueStore.selectedBaseCurrency = currency;
  console.log(currency);
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
.select {
  position: relative;
  display: inline-block;
  width: 100px;
}

.select__preview {
  height: 37px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1em;
  user-select: none;
  cursor: pointer;
}

.select__preview .arrow {
  transition: transform 0.3s;
}

.select__preview .arrow.open {
  transform: rotate(180deg);
}

.select__dropdown {
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  background: rgb(255, 255, 255);
  width: 100px;
  padding: 10px;
  overflow-y: scroll;
  height: 200px;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 37px;
}

.select__dropdown::-webkit-scrollbar {
  width: 5px;
}

.select__dropdown::-webkit-scrollbar-track {
  background: rgb(207, 224, 233);
}

.select__dropdown::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(89, 187, 228);
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-bottom: 1px solid #d2dbde;
  cursor: pointer;
}

.item:hover,
.item.selected {
  background-color: #dce7ec;
}
</style>
