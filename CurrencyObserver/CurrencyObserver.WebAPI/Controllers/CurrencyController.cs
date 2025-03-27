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

        // GET: api/<CurrencyController>
        [HttpGet]
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
    }
}
