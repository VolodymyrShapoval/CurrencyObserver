import axios from 'axios';
import {Currency} from '../models/Currency.js';
const CurrencyService = {
    instance: axios.create({
        baseURL: 'https://localhost:7028/currency/',
        timeout: 1000,
    }),

    async getCurrency(abbreviation) {
        try {
            const response = await this.instance.get(`${abbreviation}`);
            const currencyRaw = response.data;
            return new Currency(abbreviation, currencyRaw.rate);
        } catch (error) {
            console.error('Error fetching currency data:', error);
            return null;
        }
    },
    async getCurrencies()
    {
        try {
            const response = await this.instance.get();
            const currenciesRaw = response.data;
            const currencies = Object.entries(currenciesRaw).map(([abbreviation, rate]) => new Currency(abbreviation, rate));
            return currencies;
        } catch (error) {
            console.error('Error fetching currencies data:', error);
            return null;
        }
    },
    convertCurrency(fromCurrency, toCurrency, amount) {
        if (!fromCurrency || !toCurrency || fromCurrency.rate === 0) {
            console.error('Invalid currency data');
            return null;
        }
        const convertedAmount = (amount / fromCurrency.rate) * toCurrency.rate;
        return convertedAmount;
    }
};
export default CurrencyService;