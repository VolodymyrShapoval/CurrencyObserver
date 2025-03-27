using CurrencyObserver.WebAPI.Interfaces;
using CurrencyObserver.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CurrencyObserver.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        private readonly ICurrencyService _currencyService;
        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        [HttpGet("{abbreviation}")]
        public async Task<IActionResult> Get(string abbreviation)
        {
            if (string.IsNullOrWhiteSpace(abbreviation))
            {
                return BadRequest("Currency abbreviation is required.");
            }

            var currency = await _currencyService.GetCurrencyAsync(abbreviation);

            if(currency == null)
            {
                return NotFound();
            }
            return Ok(currency);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var currencies = await _currencyService.GetCurrenciesAsync();

            if (currencies.Count() == 0)
            {
                return NotFound();
            }
            return Ok(currencies);
        }
    }
}
