import axios from 'axios';
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
    async convertCurrency(fromCurrency, toCurrency, amount) {
        if (!fromCurrency || !toCurrency || fromCurrency.rate === 0) {
            console.error('Invalid currency data');
            return null;
        }
        const convertedAmount = (amount / fromCurrency.rate) * toCurrency.rate;
        return convertedAmount;
    }
};