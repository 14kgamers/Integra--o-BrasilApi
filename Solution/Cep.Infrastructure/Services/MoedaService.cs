using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Cep.Domain.Entities;

namespace Cep.Infrastructure.Services
{
    public class MoedaService
    {
        private readonly HttpClient _httpClient;
        public MoedaService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<MoedaEntity?> BuscarMoedaAsync(string simbolo)
        {
            var response = await _httpClient.GetAsync(
                $"https://brasilapi.com.br/api/cambio/v1/moedas/{simbolo}");

            if (!response.IsSuccessStatusCode)
                return null;

            var content = await response.Content.ReadAsStringAsync();

            var dados = JsonSerializer.Deserialize<MoedaEntity>(
                content,
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

            return dados;
        }

    }
}