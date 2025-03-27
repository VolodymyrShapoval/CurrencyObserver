using CurrencyObserver.WebAPI.Interfaces;
using CurrencyObserver.WebAPI.Models;

namespace CurrencyObserver.WebAPI.Services
{
    public class CurrencyService : ICurrencyService
    {
        private readonly ICurrencyParser _parser;
        private readonly HttpClient _httpClient;
        public CurrencyService(ICurrencyParser parser, HttpClient httpClient) 
        {
            _parser = parser;
            _httpClient = httpClient;
        }
        public async Task<Currency?> GetCurrencyAsync(string abbreviation)
        {
            string url = $"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode={abbreviation}&json";
            var response = await _httpClient.GetAsync(url);
            var json = await response.Content.ReadAsStringAsync();
            return _parser.ParseCurrency(json);
        }
    }
}
