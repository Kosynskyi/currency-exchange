import React from 'react';
import {
  Wrapper,
  CurrentRateList,
  CurrentRateItem,
  Text,
  MainTitle,
} from './CurrentExchangeRate.styled';

const CurrentExchangeRate = ({ currentRate }) => {
  if (!currentRate) return;

  return (
    <Wrapper>
      <MainTitle>Курс валют станом на {new Date().toLocaleString()}</MainTitle>
      <CurrentRateList>
        {currentRate.data.map(({ ccy, buy, sale }) => (
          <CurrentRateItem key={ccy}>
            <Text>{ccy}</Text>
            <Text>{Number(buy).toFixed(2)}</Text>
            <Text>{Number(sale).toFixed(2)}</Text>
          </CurrentRateItem>
        ))}
      </CurrentRateList>
    </Wrapper>
  );
};

export default CurrentExchangeRate;
