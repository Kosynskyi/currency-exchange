import React, { useState, useEffect } from 'react';
import CurrentExchangeRate from './CurrentExchangeRate';
// import CurrencyExchangeCalculator from './CurrencyExchangeCalculator';
import CurrencyConverter from './CurrencyConverter';
import { getCurrentCurrencyExchange } from 'services/API/API';

export const App = () => {
  const [currentRate, setCurrentRate] = useState(null);

  useEffect(() => {
    getCurrentCurrencyExchange().then(setCurrentRate);
  }, []);

  return (
    <>
      <CurrentExchangeRate currentRate={currentRate} />
      {/* <CurrencyExchangeCalculator currentRate={currentRate} /> */}
      <CurrencyConverter currentRate={currentRate} />
    </>
  );
};
