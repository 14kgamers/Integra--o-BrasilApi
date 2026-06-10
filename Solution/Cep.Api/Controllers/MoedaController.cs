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
    public class MoedaController : ControllerBase
    {
        private readonly IMoedaRepository _moedaRepository;

        public MoedaController(IMoedaRepository moedaRepository)
        {
            _moedaRepository = moedaRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllMoedas()
        {
            var moedas = await _moedaRepository.GetAllMoeda();
            return Ok(moedas);
        }

        [HttpGet("{simbolo}")]
        public async Task<IActionResult> GetMoeda(string simbolo)
        {
            var moedaEntity = await _moedaRepository.GetMoedaAsync(simbolo);
            if (moedaEntity == null)
            {
                return NotFound("Moeda não Existente.");
            }
            return Ok(moedaEntity);
        }
    }
}