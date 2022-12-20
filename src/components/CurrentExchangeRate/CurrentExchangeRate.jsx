// import React, { useState, useEffect } from 'react';
// import { getCurrentCurrencyExchange } from 'services/API/API';
import { Box } from 'components/Box';

const CurrentExchangeRate = ({ currentRate }) => {
  //   const [currentRate, setCurrentRate] = useState(null);

  //   useEffect(() => {
  //     getCurrentCurrencyExchange().then(setCurrentRate);
  //   }, []);

  if (!currentRate) return;
  //   console.log('currentRate ', currentRate.data);
  return (
    <Box as="header">
      <ul>
        {currentRate.data.map(({ ccy, buy, sale }) => (
          <li key={ccy}>
            <p>{ccy}</p>
            <p>{buy}</p>
            <p>{sale}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default CurrentExchangeRate;
