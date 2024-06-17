<template>
  <div class="container">
    <button
      class="btn"
      :class="{ active: locale === 'ru' }"
      @click="changeLocale('ru')"
    >
      Русский
    </button>
    <button
      class="btn"
      :class="{ active: locale === 'en' }"
      @click="changeLocale('en')"
    >
      English
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useLanguageStore } from "@/store/LanguageStore";


const languageStore = useLanguageStore();
const locale = computed(() => languageStore.locale);

const changeLocale = (newLocale) => {
  languageStore.updateLocale(newLocale);
};
</script>

<style scoped>
.container {
  display: flex;
}
.btn {
  padding: 10px;
  margin-right: 5px;
  border: 1px solid;
  border-color: #d3e9f1;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  opacity: 0.6;
  transition: all 0.3s ease;
}
@media (max-width: 320px) {
  .container {
    display: block;
    margin-bottom: 20px;
  }
}
.active {
  border-color: #0096d5;
  opacity: 1;
}
</style>
