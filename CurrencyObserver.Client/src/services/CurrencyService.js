import axios from 'axios';
import {Currency} from '../models/Currency.js';
const CurrencyService = {
    instance: axios.create({
        baseURL: 'https://currensyobserverwebapi.azurewebsites.net/api/currency/',
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
    async getCurrencies() {
        try {
            const response = await this.instance.get();
            const currenciesRaw = response.data;
    
            if (!Array.isArray(currenciesRaw)) {
                throw new Error('Invalid currency data format');
            }
    
            const currencies = currenciesRaw.map(currency => 
                new Currency(currency.abbreviation, currency.rate)
            );
    
            return currencies;
        } catch (error) {
            console.error('Error fetching currencies data:', error);
            return [];
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