import axios from 'axios';

axios.defaults.baseURL =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';

export const getCurrentCurrencyExchange = () => {
  const response = axios();
  return response;
};
