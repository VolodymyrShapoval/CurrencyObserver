using CurrencyObserver.WebAPI.Interfaces;
using CurrencyObserver.WebAPI.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Text.Json;

namespace CurrencyObserver.WebAPI.Services
{
    public class NBUCurrencyParser : ICurrencyParser
    {
        private readonly ILogger<NBUCurrencyParser> _logger;
        public NBUCurrencyParser(ILogger<NBUCurrencyParser> logger)
        {
            _logger = logger;
        }
        public Currency? ParseCurrency(string? jsonResponse)
        {
            if (String.IsNullOrEmpty(jsonResponse))
            {
                return null;
            }

            try
            {
                var currencies = JsonSerializer.Deserialize<List<NBUCurrency>>(jsonResponse);
                var NBUcurrency = currencies?.FirstOrDefault();
                if (NBUcurrency == null)
                {
                    return null;
                }
                return new Currency
                {
                    Abbreviation = NBUcurrency.Abbreviation,
                    Rate = 1 / NBUcurrency.UAHRate
                };
            }
            catch (JsonException ex)
            {
                _logger.LogError(ex, "Error parsing JSON");
                return null;
            }
        }
    }
}
