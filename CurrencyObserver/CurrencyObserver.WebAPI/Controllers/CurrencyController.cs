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
        public Currency Get(string Abbreviation)
        {
            return new Currency
            {
                Abbreviation = Abbreviation,
                USDPrice = 1.0m
            };
        }
    }
}
