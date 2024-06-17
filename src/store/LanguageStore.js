import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useLanguageStore = defineStore('languageStore', () => {
  const locale = ref(JSON.parse(localStorage.getItem('locale') || '"ru"'));

  const updateLocale = (newLocale) => {
    locale.value = newLocale;
    localStorage.setItem('locale', JSON.stringify(newLocale));
  };

  watch(locale, (newLocale) => {
    localStorage.setItem('locale', JSON.stringify(newLocale));
  });

  return {
    locale,
    updateLocale,
  };
});
