using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cep.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cep.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DialingController : ControllerBase
    {
        private readonly IDialingRepository _dialingRepository;

        public DialingController(IDialingRepository dialingRepository)
        {
            _dialingRepository = dialingRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllDdds()
        {
            var ddds = await _dialingRepository.GetAllDddsAsync();
            return Ok(ddds);
        }

        [HttpGet("{ddd}")]
        public async Task<IActionResult> GetDdd(int ddd)
        {
            var dddEntity = await _dialingRepository.GetDddAsync(ddd);
            if (dddEntity == null)
            {
                return NotFound("Ddd não Existente.");
            }
            return Ok(dddEntity);
        }
    }
}