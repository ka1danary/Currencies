<template>
  <div class="container">
    <div class="auto__update__mode">
      <div>{{ $t("autoUpdate.autoUpdateTitle") }}</div>
      <div class="checkbox__container">
        <my-custom-checkbox v-model="autoUpdateMode" />
      </div>
    </div>
    <div class="frequency__user__field" :class="{ disable: !autoUpdateMode }">
      <div class="text">{{ $t("autoUpdate.frequency") }}</div>
      <div class="time__container">
        <input
          class="time__field"
          v-model="frequency"
          @input="handleInput"
          :disabled="!autoUpdateMode"
          maxlength="4"
        />
        <div style="margin-left: 30px">
          {{ $t("autoUpdate.minutes") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAutoUpdateStore } from "@/store/AutoUpdateStore";
import MyCustomCheckbox from "@/components/UI/MyCustomCheckbox.vue";

const updateStore = useAutoUpdateStore();

const autoUpdateMode = computed({
  get: () => updateStore.autoUpdateMode,
  set: (value) => (updateStore.autoUpdateMode = value),
});

const frequency = computed({
  get: () => updateStore.frequencyUpdateValue,
  set: (value) => {
    const sanitizedValue = parseInt(value, 10);
    updateStore.frequencyUpdateValue = isNaN(sanitizedValue)
      ? 0
      : sanitizedValue;
  },
});

const handleInput = (event) => {
  const value = event.target.value.replace(/\D/g, "").slice(0, 4);
  frequency.value = value;
};
</script>

<style scoped>
.container {
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgb(210, 219, 222);
  background: rgb(255, 255, 255);
  padding: 30px;
  display: grid;
}
.auto__update__mode {
  display: flex;
  align-items: center;
  min-height: 50px;
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 10px;
}
.checkbox__container {
  margin-left: 30px;
}
.frequency__user__field {
  display: flex;
  min-height: 40px;
  align-items: center;
}

.time__field {
  border-radius: 5px;
  background: rgb(234, 239, 241);
  width: 83px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 5px;
  text-align: center;
  font-size: 1em;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
  margin-left: 20px;
}
.time__container {
  display: flex;
}
.time__field:focus {
  border-color: #a4c4d1;
}
.disable {
  opacity: 0.4;
  pointer-events: none;
  user-select: none;
}

@media (max-width: 350px) {
  .auto__update__mode {
    display: grid;
    margin-bottom: 10px;
  }
  .checkbox__container {
    margin: 10px 0;
  }
}
@media (max-width: 349px) {
  .frequency__user__field {
    display: grid;
    margin: 10px 0px;
  }
  .text {
    margin-bottom: 10px;
  }
  .time__field {
    padding: 0;
    margin: 0;
  }
}
</style>
