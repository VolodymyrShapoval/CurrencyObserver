using CurrencyObserver.WebAPI.Controllers;
using CurrencyObserver.WebAPI.Interfaces;
using CurrencyObserver.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyObserver.Tests
{
    public class CurrencyControllerTests
    {
        [Fact]
        public async Task GetCurrency_ReturnsOkResult()
        {
            var mockService = new Mock<ICurrencyService>();
            mockService.Setup(s => s.GetCurrencyAsync("USD")).ReturnsAsync(new Currency { Abbreviation = "USD", Rate = 1 / 37.5m });
            var controller = new CurrencyController(mockService.Object);

            var result = await controller.Get("USD");

            var okResult = Assert.IsType<OkObjectResult>(result);
            var currency = Assert.IsType<Currency>(okResult.Value);
            Assert.Equal("USD", currency.Abbreviation);
            Assert.Equal(1 / 37.5m, currency.Rate);
        }

        [Fact]
        public async Task GetCurrencies_ReturnsOkResult()
        {
            var mockService = new Mock<ICurrencyService>();
            mockService.Setup(s => s.GetCurrenciesAsync()).ReturnsAsync(new List<Currency> { new Currency { Abbreviation = "USD", Rate = 1 / 37.5m } });
            var controller = new CurrencyController(mockService.Object);

            var result = await controller.Get();

            var okResult = Assert.IsType<OkObjectResult>(result);
            var currencies = Assert.IsType<List<Currency>>(okResult.Value);
            Assert.Single(currencies);
            Assert.Equal("USD", currencies[0].Abbreviation);
        }
    }
}
