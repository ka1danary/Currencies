<template>
  <div class="page__container">
    <div class="page__content">
      <div class="title_page">
        <div class="title">{{ $t("settingsPage.settingsTitle") }}</div>
      </div>
      <div class="select__locale">
        <div class="text__block" style="margin-right: 20px">
          {{ $t("settingsPage.chodeLanguageTitle") }}
        </div>
        <div>
          <my-selector-language />
        </div>
        <div></div>
      </div>
      <div class="select__cur__container">
        <div class="text__block" style="margin-right: 20px">
          {{ $t("settingsPage.baseValueTitle") }}
        </div>
        <div>
          <my-selected-base-currency />
        </div>
      </div>
      <div>
        <div class="text__block">
          {{ $t("settingsPage.selectedCurrenciesTitle") }}
        </div>
        <div style="margin-bottom: 30px">
          <settings-currencies-select />
        </div>
      </div>
      <div>
        <div>
          <settings-time />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import SettingsTime from "@/components/SettingsTime.vue";
import SettingsCurrenciesSelect from "@/components/SettingsCurrenciesSelect.vue";
import MySelectedBaseCurrency from "@/components/MySelectBaseCurrency.vue";
import MySelectorLanguage from "@/components/UI/MySelectorLanguage.vue";
import "./pages.css";


</script>
<style scoped>
.text__block {
  height: 80px;
  display: flex;
  align-items: center;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
}
.select__locale {
  display: flex;
  align-items: center;
  min-height: 80px;
  border-bottom: 1px solid #d2dbde;
}
.select__cur__container {
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d2dbde;
}
@media (max-width: 320px) {
  .select__locale {
    display: block;
  }
}
</style>
