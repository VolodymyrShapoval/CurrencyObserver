import React, { useState, useEffect } from "react";
import CurrencyService from "../../../services/CurrencyService";

const Currencies = () => {
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
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <section className="my-currencies-page" id="my-currencies-page">
    </section>
  );
};

export default Currencies;
