import React, { useState, useEffect } from 'react';
import { TbArrowsUpDown } from 'react-icons/tb';
import { Box } from 'components/Box';
import {
  MainTitle,
  StyledForm,
  Button,
  StyledInput,
  StyledSelect,
} from './CurrencyConverter.styled';

const CurrencyConverter = ({ currentRate }) => {
  const [data, setData] = useState({
    firstCurrency: 'usd',
    secondCurrency: 'uah',
    firstCurrencyAmount: 0,
  });

  const [rate, setRate] = useState(0);
  const firstCurrency = data.firstCurrency.toLowerCase();
  const secondCurrency = data.secondCurrency.toLowerCase();

  useEffect(() => {
    if (!currentRate) return;

    const createRate = (currentRate, data) => {
      if (!data) return;

      if (firstCurrency === secondCurrency) {
        return 1;
      }

      if (firstCurrency === 'usd' && secondCurrency !== 'uah') {
        const currencyExchangeRate =
          currentRate.data[1].buy / currentRate.data[0].sale;
        return Number(currencyExchangeRate).toFixed(4);
      }

      if (firstCurrency === 'eur' && secondCurrency !== 'uah') {
        const currencyExchangeRate =
          currentRate.data[0].sale / currentRate.data[1].sale;
        return Number(currencyExchangeRate).toFixed(4);
      }

      if (firstCurrency !== 'uah') {
        const currencyExchangeRate = currentRate.data.find(
          item => item.ccy.toLowerCase() === firstCurrency
        );
        return Number(currencyExchangeRate.buy).toFixed(2);
      }

      if (secondCurrency !== 'uah') {
        const currencyExchangeRate = currentRate.data.find(
          item => item.ccy.toLowerCase() === secondCurrency
        );
        return Number(currencyExchangeRate.sale).toFixed(2);
      }
    };

    setRate(createRate(currentRate, data));
  }, [currentRate, data, firstCurrency, secondCurrency]);

  if (!currentRate) return;

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'firstCurrencyAmount':
        setData(prev => ({ ...prev, firstCurrencyAmount: value }));
        break;
      case 'firstCurrency':
        setData(prev => ({ ...prev, firstCurrency: value }));
        break;
      case 'secondCurrencyAmount':
        setData(prev => ({ ...prev, secondCurrencyAmount: value }));
        break;
      case 'secondCurrency':
        setData(prev => ({ ...prev, secondCurrency: value }));
        break;

      default:
        break;
    }
  };

  const converter = (data, rate) => {
    if (firstCurrency !== 'uah') {
      const result = data.firstCurrencyAmount * rate;
      return result;
    }

    if (secondCurrency !== 'uah') {
      const result = data.firstCurrencyAmount / rate;
      return result;
    }

    if (firstCurrency === secondCurrency) {
      const result = data.firstCurrencyAmount * rate;
      return result;
    }
  };

  const reverseConverter = () => {
    if (!data) return;

    setData(prev => ({
      ...prev,
      firstCurrency: data.secondCurrency,
      secondCurrency: data.firstCurrency,
    }));
  };

  return (
    <Box
      p={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <MainTitle>Введіть суму, яку Ви бажаєте конвертувати</MainTitle>

      <StyledForm onChange={handleChange}>
        <Box mb={5}>
          <StyledInput
            type="number"
            name="firstCurrencyAmount"
            placeholder="0"
          />
          <StyledSelect
            name="firstCurrency"
            value={data.firstCurrency}
            readOnly
          >
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="uah">UAH</option>
          </StyledSelect>
        </Box>

        <Button type="button" onClick={reverseConverter}>
          <TbArrowsUpDown size={30} color="green" />
        </Button>

        <Box>
          <StyledInput
            type="number"
            name="secondCurrencyAmount"
            placeholder="0"
            value={(converter(data, rate) ? converter(data, rate) : 0).toFixed(
              2
            )}
            readOnly
          />
          <StyledSelect
            name="secondCurrency"
            value={data.secondCurrency}
            readOnly
          >
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="uah">UAH</option>
          </StyledSelect>
        </Box>
      </StyledForm>
    </Box>
  );
};

export default CurrencyConverter;
