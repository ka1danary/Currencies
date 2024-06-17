<template>
  <div class="page__container">
    <div class="page__content">
      <div class="title_page">
        <div class="title">{{ $t("mainPage.currencyTitle") }}</div>
        <div>
          <my-button-copy-all />
        </div>
      </div>
      <div class="page__content">
        <value-main-table />
      </div>
    </div>
  </div>
</template>
<script setup>
import ValueMainTable from "@/components/ValMainTable.vue";
import MyButtonCopyAll from "@/components/UI/buttons/MybuttonCopyAll.vue";
import "./pages.css";

</script>
<style scoped></style>
