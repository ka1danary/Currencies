import axios from 'axios';

const API_KEY = 'fca_live_u8XgZNsdhaDUHXJiAZg38sEXPltUFz0i3LkSup58';
const BASE_URL = 'https://api.freecurrencyapi.com/v1';

const URL_LATEST = `${BASE_URL}/latest?apikey=${API_KEY}`;
const URL_CURRENCIES = `${BASE_URL}/currencies?apikey=${API_KEY}`;

const allApiFunctions = {
  getAllLatestValueOfCurrencies(name) {
    const url = `${BASE_URL}/latest?apikey=${API_KEY}&base_currency=${name}`;
    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  },

  getAllInfoAboutValuesOfCurrencies() {
    return axios.get(URL_CURRENCIES)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  },

  getInfoValueOfSpecificCurrency(name, base_currency) {
    const url = `${BASE_URL}/latest?apikey=${API_KEY}&currencies=${name}&base_currency=${base_currency}`;
    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
};

export default allApiFunctions;
