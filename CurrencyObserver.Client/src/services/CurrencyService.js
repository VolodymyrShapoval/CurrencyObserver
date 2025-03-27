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
    }
};