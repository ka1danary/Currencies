<template>
  <div class="header">
    <div class="header__container">
      <div class="menu">
        <div class="drop__menu">
          <my-drop-menu />
        </div>
        <div class="header__left__menu">
          <router-link to="/">
            <div @click="headerStore.setStateTrueForHome">
              <my-route-button typeIcon="home" :status="homeIcon" />
            </div>
          </router-link>
          <router-link to="/settings">
            <div @click="headerStore.setStateTrueForSettings">
              <my-route-button typeIcon="settings" :status="settingsIcon" />
            </div>
          </router-link>
        </div>
      </div>
      <div class="header__right__menu">
        <div class="last__update__field">
          <last-update-field :date="valueStore.lastUpdateAll" />
        </div>
        <div @click="helperReload">
          <my-button-reload />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useValueStore } from "@/store/ValuesStore";
import { useHeaderStore } from "@/store/HeaderStore";
import MyRouteButton from "../UI/buttons/MyRouteButton.vue";
import LastUpdateField from "../UI/LastUpdateField.vue";
import MyDropMenu from "./MyDropMenu.vue";
import { computed } from "vue";

const headerStore = useHeaderStore();
const valueStore = useValueStore();

const homeIcon = computed(() => headerStore.homeIcon);
const settingsIcon = computed(() => headerStore.settingsIcon);

const helperReload = async () => {
  await valueStore.updateAllCurrencies();
};
</script>
<style scoped>
.no-scroll {
  overflow: hidden;
}

.header {
  width: 100%;
  height: 60px;
  background: #0096d5;
  user-select: none;
  position: fixed;
  top: 0;
  z-index: 200;
}
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.menu {
  display: flex;
  align-items: center;
}
.header__left__menu,
.header__right__menu {
  display: flex;
  align-items: center;
}
.drop__menu {
  display: none;
}

@media (max-width: 991px) {
  .header__left__menu {
    display: none;
  }
  .drop__menu {
    display: block;
  }
  .last__update__field {
    display: none;
  }
}

@media (min-width: 992px) {
  .drop__menu {
    display: none;
  }
  .header__left__menu {
    display: flex;
  }
}
</style>
