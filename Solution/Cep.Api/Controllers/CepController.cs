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
    public class CepController : ControllerBase
    {
        private readonly ICepRepository _cepRepository;

        public CepController(ICepRepository cepRepository)
        {
            _cepRepository = cepRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCeps()
        {
            var ceps = await _cepRepository.GetAllCep();
            return Ok(ceps);
        }

        [HttpGet("{cep}")]
        public async Task<IActionResult> GetCep(string cep)
        {
            var cepEntity = await _cepRepository.GetCepAsync(cep);
            if (cepEntity == null)
            {
                return NotFound("Cep não Existente.");
            }
            return Ok(cepEntity);
        }
    }
}