using System.Text.Json.Serialization;

namespace CurrencyObserver.WebAPI.Models
{
    public class NBUCurrency
    {
        [JsonPropertyName("r030")]
        public int R030 { get; set; }

        [JsonPropertyName("txt")]
        public string Title { get; set; } = string.Empty;

        [JsonPropertyName("rate")]
        public decimal UAHRate { get; set; }

        [JsonPropertyName("cc")]
        public string Abbreviation { get; set; } = string.Empty;

        [JsonPropertyName("exchangedate")]
        public string ExchangeDate { get; set; } = string.Empty;
    }
}
