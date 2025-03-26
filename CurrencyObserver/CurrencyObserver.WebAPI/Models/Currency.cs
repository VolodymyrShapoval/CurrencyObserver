using System.ComponentModel.DataAnnotations.Schema;

namespace CurrencyObserver.WebAPI.Models
{
    public class Currency
    {
        public required string Abbreviation { get; set; }
        public decimal USDPrice { get; set; }
    }
}
