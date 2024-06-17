import { createApp, watch, computed } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import App from '@/App.vue';
import router from '@/router/router';
import components from '@/components/UI/index.js';
import { useLanguageStore } from '@/store/LanguageStore';

import ru from '@/i18n/locale/ru.json';
import en from '@/i18n/locale/en.json';

import './style.css';
import './reset.css';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

const languageStore = useLanguageStore();
const locale = computed(() => languageStore.locale);

const i18n = createI18n({
  locale: locale.value,
  messages: {
    en: en,
    ru: ru,
  },
  legacy: false,
  globalInjection: true,
});

watch(locale, (newLocale) => {
  i18n.global.locale.value = newLocale;
});

components.forEach((component) => {
  app.component(component.name, component);
});

const storedRoute = localStorage.getItem('activePage');
if (storedRoute && storedRoute !== '/') {
  router.push(storedRoute).catch(() => { });
}

app.use(router);
app.use(i18n);

app.mount('#app');
