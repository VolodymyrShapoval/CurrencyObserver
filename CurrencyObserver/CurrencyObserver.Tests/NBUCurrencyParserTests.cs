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
    }
}
