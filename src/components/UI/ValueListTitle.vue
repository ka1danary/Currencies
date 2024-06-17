<template>
  <div class="value__list__title">
    <div class="item">{{ $t("currenciesTableTitle.name") }}</div>
    <div class="item">{{ $t("currenciesTableTitle.value") }}</div>
    <div class="item">{{ $t("currenciesTableTitle.date") }}</div>
    <div class="item">{{ $t("currenciesTableTitle.functions") }}</div>
  </div>
</template>

<script setup></script>

<style scoped>
.value__list__title {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 0 30px;
  padding-right: 50px;
  font-size: 1.3em;
  background: white;
  border-bottom: 1px solid #d2dbee;
  min-height: 50px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  text-align: center;
  padding: 10px;
}

@media (max-width: 700px) {
  .value__list__title {
    grid-template-rows: auto auto;
    font-size: 1em;
    min-height: auto;
  }
  .item {
    padding: 10px;
    word-break: break-word;
  }
}
</style>
