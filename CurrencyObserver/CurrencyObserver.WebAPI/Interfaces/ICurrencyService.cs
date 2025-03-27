using CurrencyObserver.WebAPI.Models;

namespace CurrencyObserver.WebAPI.Interfaces
{
    public interface ICurrencyService
    {
        Task<Currency?> GetCurrencyAsync(string abbreviation);
    }
}
