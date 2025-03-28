using CurrencyObserver.WebAPI.Interfaces;
using CurrencyObserver.WebAPI.Models;
using CurrencyObserver.WebAPI.Services;
using Moq;
using Moq.Protected;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyObserver.Tests
{
    public class CurrencyServiceTests
    {
        private readonly Mock<ICurrencyParser> _parserMock;
        private readonly Mock<HttpMessageHandler> _httpMessageHandlerMock;
        private readonly HttpClient _httpClient;
        private readonly CurrencyService _service;

        public CurrencyServiceTests()
        {
            _parserMock = new Mock<ICurrencyParser>();
            _httpMessageHandlerMock = new Mock<HttpMessageHandler>(MockBehavior.Strict);

            _httpClient = new HttpClient(_httpMessageHandlerMock.Object)
            {
                BaseAddress = new Uri("https://bank.gov.ua/")
            };

            _service = new CurrencyService(_parserMock.Object, _httpClient);
        }

        [Fact]
        public async Task GetCurrencyAsync_ValidResponse_ReturnsCurrency()
        {
            var jsonResponse = "[{\"cc\":\"USD\",\"rate\":37.5}]";
            var expectedCurrency = new Currency { Abbreviation = "USD", Rate = 1 / 37.5m };

            _httpMessageHandlerMock.Protected()
                .Setup<Task<HttpResponseMessage>>(
                    "SendAsync",
                    ItExpr.IsAny<HttpRequestMessage>(),
                    ItExpr.IsAny<CancellationToken>()
                )
                .ReturnsAsync(new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.OK,
                    Content = new StringContent(jsonResponse)
                });

            _parserMock.Setup(p => p.ParseCurrency(jsonResponse)).Returns(expectedCurrency);

            var result = await _service.GetCurrencyAsync("USD");

            Assert.NotNull(result);
            Assert.Equal("USD", result.Abbreviation);
            Assert.Equal(1 / 37.5m, result.Rate);
        }

        [Fact]
        public async Task GetCurrencyAsync_ApiReturnsError_ReturnsNull()
        {
            _httpMessageHandlerMock.Protected()
                .Setup<Task<HttpResponseMessage>>(
                    "SendAsync",
                    ItExpr.IsAny<HttpRequestMessage>(),
                    ItExpr.IsAny<CancellationToken>()
                )
                .ReturnsAsync(new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.InternalServerError
                });

            var result = await _service.GetCurrencyAsync("USD");

            Assert.Null(result);
        }
    }
}
