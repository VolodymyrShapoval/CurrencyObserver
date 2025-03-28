using CurrencyObserver.WebAPI.Models;
using CurrencyObserver.WebAPI.Services;
using Microsoft.Extensions.Logging;
using Moq;
using System.Text.Json;

namespace CurrencyObserver.Tests
{
    public class NBUCurrencyParserTests
    {
        private readonly Mock<ILogger<NBUCurrencyParser>> _loggerMock;
        private readonly NBUCurrencyParser _parser;

        public NBUCurrencyParserTests()
        {
            _loggerMock = new Mock<ILogger<NBUCurrencyParser>>();
            _parser = new NBUCurrencyParser(_loggerMock.Object);
        }

        [Fact]
        public void ParseCurrency_NullOrEmptyJson_ReturnsNull()
        {
            Assert.Null(_parser.ParseCurrency(null));
            Assert.Null(_parser.ParseCurrency(""));
        }

        [Fact]
        public void ParseCurrency_InvalidJson_LogsErrorAndReturnsNull()
        {
            var invalidJson = "{ invalid json }";

            var result = _parser.ParseCurrency(invalidJson);

            Assert.Null(result);
            _loggerMock.Verify(
                x => x.Log(
                    LogLevel.Error,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((o, t) => o.ToString().Contains("Error parsing JSON")),
                    It.IsAny<Exception>(),
                    It.IsAny<Func<It.IsAnyType, Exception, string>>()
                ),
                Times.Once
            );
        }

        [Fact]
        public void ParseCurrency_ValidJson_ReturnsCurrency()
        {
            var json = JsonSerializer.Serialize(new List<NBUCurrency>
        {
            new NBUCurrency { Abbreviation = "USD", UAHRate = 37.5m }
        });

            var result = _parser.ParseCurrency(json);

            Assert.NotNull(result);
            Assert.Equal("USD", result.Abbreviation);
            Assert.Equal(1 / 37.5m, result.Rate);
        }

        [Fact]
        public void ParseCurrency_EmptyList_ReturnsNull()
        {
            var json = JsonSerializer.Serialize(new List<NBUCurrency>());

            var result = _parser.ParseCurrency(json);

            Assert.Null(result);
        }

        [Fact]
        public void ParseCurrencies_NullOrEmptyJson_ReturnsEmptyList()
        {
            Assert.Empty(_parser.ParseCurrencies(null));
            Assert.Empty(_parser.ParseCurrencies(""));
        }

        [Fact]
        public void ParseCurrencies_InvalidJson_LogsErrorAndReturnsEmptyList()
        {
            var invalidJson = "{ invalid json }";

            var result = _parser.ParseCurrencies(invalidJson);

            Assert.Empty(result);
            _loggerMock.Verify(
                x => x.Log(
                    LogLevel.Error,
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((o, t) => o.ToString().Contains("Error parsing JSON")),
                    It.IsAny<Exception>(),
                    It.IsAny<Func<It.IsAnyType, Exception, string>>()
                ),
                Times.Once
            );
        }

        [Fact]
        public void ParseCurrencies_ValidJson_ReturnsCurrencyList()
        {
            var json = JsonSerializer.Serialize(new List<NBUCurrency>
        {
            new NBUCurrency { Abbreviation = "USD", UAHRate = 37.5m },
            new NBUCurrency { Abbreviation = "EUR", UAHRate = 40.0m }
        });

            var result = _parser.ParseCurrencies(json);

            Assert.NotNull(result);
            Assert.Equal(2, result.Count());
            Assert.Contains(result, c => c.Abbreviation == "USD" && c.Rate == 1 / 37.5m);
            Assert.Contains(result, c => c.Abbreviation == "EUR" && c.Rate == 1 / 40.0m);
        }

        [Fact]
        public void ParseCurrencies_EmptyList_ReturnsEmptyList()
        {
            var json = JsonSerializer.Serialize(new List<NBUCurrency>());

            var result = _parser.ParseCurrencies(json);

            Assert.Empty(result);
        }
    }
}
