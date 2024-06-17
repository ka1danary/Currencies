<template>
  <div>
    <div class="menu__icon" @click="toggleMenu(true)">
      <img src="../../icons/menu.svg" alt="menu" />
    </div>
    <div
      class="menu__overlay"
      :class="{ open: isOpen }"
      @click.self="toggleMenu(false)"
    >
      <div class="menu__content" :class="{ open: isOpen }">
        <div class="container__btn">
          <button class="close__btn" @click="toggleMenu(false)">✖</button>
        </div>
        <div class="last__update">
          {{ $t("nav.lastUpdate") }}
          <div class="date__time">
            <div class="date">{{ parsedDate.day }}.{{ parsedDate.month }}</div>
            <div class="time">{{ parsedDate.hours }}:{{ parsedDate.minutes }}</div>
          </div>
        </div>
        <div @click="setHome">
          <router-link to="/" class="menu__item" @click="toggleMenu(false)">
            <img src="../../icons/home-icons/home-dropdown.svg" alt="home" />
            <div :class="{ active: homeIcon }">
              {{ $t("nav.main") }}
            </div>
          </router-link>
        </div>
        <div @click="setSettings">
          <router-link to="/settings" class="menu__item" @click="toggleMenu(false)">
            <img src="../../icons/setting-icons/settings-off.svg" alt="settings" />
            <div :class="{ active: settingIcon }">
              {{ $t("nav.settings") }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useValueStore } from "@/store/ValuesStore";
import { parseDate } from "@/helpers/helperFunction";
import { useHeaderStore } from "@/store/HeaderStore";

const valueStore = useValueStore();
const headerStore = useHeaderStore();

const lastUpdate = computed(() => valueStore.lastUpdateAll);
const isOpen = ref(false);

const toggleMenu = (state) => {
  isOpen.value = state;
  if (state) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const parsedDate = computed(() => parseDate(lastUpdate.value));
const setHome = () => {
  headerStore.setStateTrueForHome();
  toggleMenu(false);
};
const setSettings = () => {
  headerStore.setStateTrueForSettings();
  toggleMenu(false);
};
const homeIcon = computed(() => headerStore.homeIcon);
const settingIcon = computed(() => headerStore.settingsIcon);
</script>

<style scoped>
.menu__icon {
  cursor: pointer;
  height: 60px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  padding: 0;
}

.menu__icon:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

img {
  margin-right: 10px;
}

.menu__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.menu__overlay.open {
  opacity: 1;
  visibility: visible;
}

.menu__content {
  width: 50%;
  height: 100%;
  background: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 10px 10px 0px;
  overflow-y: auto;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.menu__content.open {
  transform: translateX(0);
}

@media (max-width: 600px) {
  .menu__content {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 30px;
  }
}

.container__btn {
  display: flex;
  align-items: start;
  width: 100%;
  justify-content: flex-end;
  height: 70px;
}

.close__btn {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close__btn:hover {
  color: #0096d5;
}

.date__time {
  display: flex;
  align-items: center;
  background: #dfecf1;
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  user-select: all;
  margin-left: 15px;
}

.date {
  margin-right: 15px;
}

.menu__item {
  font-size: 1.2em;
  margin: 20px 0;
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 2px solid #d2dbde;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu__item:hover {
  background-color: #f0f0f0;
}

.menu__item .active {
  color: #2979ff;
  font-weight: 600;
}

.last__update {
  display: flex;
  align-items: center;
}
</style>
