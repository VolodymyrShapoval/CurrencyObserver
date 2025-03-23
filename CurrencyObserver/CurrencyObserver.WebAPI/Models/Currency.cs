namespace CurrencyObserver.WebAPI.Models
{
    public class Currency
    {
        public required string Name { get; set; }
        public required decimal USDPrice { get; set; }
    }
}
