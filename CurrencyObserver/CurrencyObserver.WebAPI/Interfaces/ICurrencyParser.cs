using CurrencyObserver.WebAPI.Models;

namespace CurrencyObserver.WebAPI.Interfaces
{
    public interface ICurrencyParser
    {
        Currency? ParseCurrency(string? jsonResponse);
    }
}
