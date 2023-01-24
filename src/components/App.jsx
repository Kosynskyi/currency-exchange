import { useState, useEffect } from 'react';
import CurrentExchangeRate from './CurrentExchangeRate';
import CurrencyConverter from './CurrencyConverter';
import Error from './Error';
import { getCurrentCurrencyExchange } from 'services/API/API';

export const App = () => {
  const [currentRate, setCurrentRate] = useState(null);

  useEffect(() => {
    getCurrentCurrencyExchange()
      .then(setCurrentRate)
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      {!currentRate ? (
        <Error />
      ) : (
        <>
          <CurrentExchangeRate currentRate={currentRate} />
          <CurrencyConverter currentRate={currentRate} />
        </>
      )}
    </>
  );
};
