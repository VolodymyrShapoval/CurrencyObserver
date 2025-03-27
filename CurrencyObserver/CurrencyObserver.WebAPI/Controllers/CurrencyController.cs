using CurrencyObserver.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CurrencyObserver.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        // GET: api/<CurrencyController>
        [HttpGet]
        public async Task<IActionResult> Get(string abbreviation)
        {
            if (string.IsNullOrWhiteSpace(abbreviation))
            {
                return BadRequest("Currency abbreviation is required.");
            }

            return Ok(new Currency
            {
                Abbreviation = abbreviation,
                USDPrice = 1.0m
            });
        }
    }
}
