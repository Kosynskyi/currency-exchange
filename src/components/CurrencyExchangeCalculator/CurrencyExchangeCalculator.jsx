// import React, { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
// import { getCurrentCurrencyExchange } from 'services/API/API';

const CurrencyExchangeCalculator = ({ currentRate }) => {
  //   const [result, setResult] = useState(0);
  //   useEffect(() => {}, []);
  // export const getCalculation = (sum) => {

  // };
  console.log(currentRate.data);

  return (
    <>
      <h3>Enter the amount and select the desired currency</h3>
      <Formik
        initialValues={{
          amountFirstCurrency: '',
          firstCurrency: 'eur',
          amountSecondCurrency: '',
          secondCurrency: 'uah',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        <Form>
          <Field type="number" name="amountFirstCurrency" placeholder="100" />
          <Field as="select" name="firstCurrency">
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="uah">UAH</option>
          </Field>
          <Field
            type="number"
            name="amountSecondCurrency"
            placeholder={Math.floor(100 * 40.95).toFixed(2)}
          />
          <Field as="select" name="secondCurrency">
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="uah">UAH</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <p>
        You will get <span>{0}</span>
      </p>
    </>
  );
};

export default CurrencyExchangeCalculator;
