import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import allApiFunctions from "@/API/valueService";

export const useValueStore = defineStore('valuesStore', () => {
  const allKeysOfCurrencies = ref(JSON.parse(localStorage.getItem('allKeysOfCurrencies')) || []);
  const allValuesOfCurrencies = ref({});
  const allInfoAboutValues = ref([]);

  const arrayReadyAssembleObjectWithCurrencies = ref(JSON.parse(localStorage.getItem('arrayReadyAssembleObjectWithCurrencies')) || []);
  const hasDataAlreadyBeenDownloaded = ref(JSON.parse(localStorage.getItem('hasDataAlreadyBeenDownloaded')) || false);
  const isCurrenciesLoading = ref(false);
  const isCurrencyLoading = ref(false);

  const lastUpdateAll = ref(new Date(JSON.parse(localStorage.getItem('lastUpdateAll')) || new Date()));
  const selectedBaseCurrency = ref(JSON.parse(localStorage.getItem('selectedBaseCurrency')) || {
    code: '$',
    name: 'USD'
  });

  const saveToLocalStorageCurrencies = () => {
    localStorage.setItem('arrayReadyAssembleObjectWithCurrencies', JSON.stringify(arrayReadyAssembleObjectWithCurrencies.value));
    localStorage.setItem('lastUpdateAll', JSON.stringify(lastUpdateAll.value));
    localStorage.setItem('hasDataAlreadyBeenDownloaded', JSON.stringify(hasDataAlreadyBeenDownloaded.value));
    localStorage.setItem('allKeysOfCurrencies', JSON.stringify(allKeysOfCurrencies.value));
    localStorage.setItem('selectedBaseCurrency', JSON.stringify(selectedBaseCurrency.value));
  };

  const getAllValuesOfCurrencies = async () => {
    try {
      const response = await allApiFunctions.getAllLatestValueOfCurrencies(selectedBaseCurrency.value.name);
      allValuesOfCurrencies.value = response.data;
    }
    catch (error) {
      throw error
    }
  };

  const getAllInfoOfCurrencies = async () => {
    try {
      const response = await allApiFunctions.getAllInfoAboutValuesOfCurrencies();
      allInfoAboutValues.value = response.data;
    }
    catch (error) {
      throw error
    }
  };

  const buildFullArrayOfCurrencies = async () => {
    isCurrenciesLoading.value = true;

    try {
      await getAllValuesOfCurrencies();
      await getAllInfoOfCurrencies();

      allKeysOfCurrencies.value = Object.keys(allValuesOfCurrencies.value);
      console.log('keys ', allKeysOfCurrencies.value);
      arrayReadyAssembleObjectWithCurrencies.value = allKeysOfCurrencies.value.map((currencyCode) => {
        const info = allInfoAboutValues.value[currencyCode];
        const value = allValuesOfCurrencies.value[currencyCode];

        if (info && value) {
          return {
            code: info.symbol,
            name: currencyCode,
            value: value,
            lastUpdate: new Date().toISOString(),
            isActive: true
          };
        }
        else {
          return null;
        }
      })
      lastUpdateAll.value = new Date();
      isCurrenciesLoading.value = false;
      hasDataAlreadyBeenDownloaded.value = true;
      saveToLocalStorageCurrencies();
    }
    catch (error) {
      throw error
    }
  };

  const updateConcreteCurrency = async (name) => {
    isCurrencyLoading.value = true;
    try {
      const response = await allApiFunctions.getInfoValueOfSpecificCurrency(name, selectedBaseCurrency.value.name);
      const newValue = response.data[name];

      arrayReadyAssembleObjectWithCurrencies.value = arrayReadyAssembleObjectWithCurrencies.value.map(currency => {

        if (currency.name === name) {
          return {
            ...currency,
            value: newValue,
            lastUpdate: new Date().toISOString()
          };
        }
        return currency;
      });
      saveToLocalStorageCurrencies();

    }
    catch (error) {
      throw error
    }
    finally {
      isCurrenciesLoading.value = false;
    }
  };

  const updateAllCurrencies = async () => {
    isCurrenciesLoading.value = true;
    try {
      const response = await allApiFunctions.getAllLatestValueOfCurrencies(selectedBaseCurrency.value.name);
      const newData = response.data;

      arrayReadyAssembleObjectWithCurrencies.value = arrayReadyAssembleObjectWithCurrencies.value.map(currency => {
        return {
          ...currency,
          value: newData[currency.name],
          lastUpdate: new Date().toISOString()
        };
      });

      lastUpdateAll.value = new Date();

      saveToLocalStorageCurrencies();
    }
    catch (error) {
      throw error;
    }
    finally {
      isCurrenciesLoading.value = false;
    }
  };

  const selectCurrenciesInSettings = (name, status) => {
    arrayReadyAssembleObjectWithCurrencies.value = arrayReadyAssembleObjectWithCurrencies.value.map(currency => {
      if (currency.name === name) {
        return {
          ...currency,
          isActive: status
        };
      }
      return currency;
    });
    saveToLocalStorageCurrencies();
  };

  const setSelectedBaseCurrency = () => {
    localStorage.setItem('selectedBaseCurrency', JSON.stringify(selectedBaseCurrency.value));
    updateAllCurrencies();
  };

  watch([selectedBaseCurrency], () => {
    setSelectedBaseCurrency();
  });

  watch([arrayReadyAssembleObjectWithCurrencies], () => {
    saveToLocalStorageCurrencies();
  }, { deep: true });

  onMounted(() => {
    if (!hasDataAlreadyBeenDownloaded.value || arrayReadyAssembleObjectWithCurrencies.value.length === 0) {
      buildFullArrayOfCurrencies();
    }
  });

  return {
    allKeysOfCurrencies,
    allValuesOfCurrencies,
    getAllValuesOfCurrencies,
    getAllInfoOfCurrencies,
    allInfoAboutValues,
    isCurrenciesLoading,
    arrayReadyAssembleObjectWithCurrencies,
    buildFullArrayOfCurrencies,
    updateConcreteCurrency,
    isCurrencyLoading,
    lastUpdateAll,
    selectCurrenciesInSettings,
    updateAllCurrencies,
    selectedBaseCurrency,
    setSelectedBaseCurrency
  };
});
