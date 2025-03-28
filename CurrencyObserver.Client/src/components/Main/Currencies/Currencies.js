import React, { useState, useEffect } from "react";
import CurrencyService from "../../../services/CurrencyService";
import CurrencyComponent from "./CurrencyComponent";

const Currencies = () => {
  const [baseCurrency, setBaseCurrency] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await CurrencyService.getCurrencies();
        if (!response.ok) {
          throw new Error("Failed to fetch currencies");
        }
        const data = await response.json();
        setCurrencies(data); 
        setBaseCurrency(data[1]);
      } catch (error) {
        console.error("Error fetching currencies:", error);
        //test data
        const data = [
          { abbreviation: "USD", rate: 1 },
          { abbreviation: "EUR", rate: 0.85 },
          { abbreviation: "GBP", rate: 0.75 },
          { abbreviation: "UAH", rate: 41.5 },
        ];
        setCurrencies(data); 
        setBaseCurrency(data[3]);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <section className="my-currencies-page" id="my-currencies-page">
      <h2 className="section-title"><strong>Currencies</strong></h2>
      <div className="base-currency-header">
        <h2>Base currency: </h2>
        <select 
          onChange={(e) => setBaseCurrency(currencies.find(currency => currency.abbreviation === e.target.value))} 
          value={baseCurrency?.abbreviation}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            outline: "none",
            cursor: "pointer",
          }}
        >
          {currencies.map((currency) => (
            <option key={currency.abbreviation} value={currency.abbreviation}>
              {currency.abbreviation}
            </option>
          ))}
        </select>
      </div>
      <div className="currencies-header">
        <p>Currency</p>
        <p>Rate</p>
        <p>Price per one</p>
      </div>
      <div className="currencies-container">
          {currencies
            .filter(currency => currency.abbreviation !== baseCurrency?.abbreviation)
            .map((currency) => (
              <CurrencyComponent key={currency.abbreviation} currency={currency} baseCurrency={baseCurrency}/>
          ))}
      </div>
    </section>
  );
};

export default Currencies;
