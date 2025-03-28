import React, { useState, useEffect } from "react";
import CurrencyService from "../../../services/CurrencyService";

const CurrencyComponent = ({currency, baseCurrency}) => {
    const [currencyConverted, setCurrencyConverted] = useState(null);
    useEffect(() => {
        setCurrencyConverted(CurrencyService.convertCurrency(baseCurrency, currency, 1));
      }, [baseCurrency]);
        
  return (
    <div className="currency-item">
        <p>{currency.abbreviation}</p>
        <p>{Math.round(currencyConverted * 1000) / 1000}</p>
        <p>{Math.round((1 / currencyConverted) * 1000) / 1000} {baseCurrency.abbreviation}</p>
    </div>
  );
};

export default CurrencyComponent;
