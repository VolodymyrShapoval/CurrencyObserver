using CurrencyObserver.WebAPI.Models;

namespace CurrencyObserver.WebAPI.Interfaces
{
    public interface ICurrencyParser
    {
        Task<Currency?> ParseCurrencyAsync(string? jsonResponse);
    }
}
